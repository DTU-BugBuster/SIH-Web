d3.csv('../data/industry.csv', _type2, function(error, res) {
  if (error)
    console.log(error)

  let nest_data = d3.nest()
      .key(d => d.state)
      .key(d => d.category_industry)
      .entries(res)

  var data = {
    key: 'STATES'
  }

  data['values'] = nest_data

  drawIndustryTreemap('#industry-chart', data)
})

function drawIndustryTreemap(selector, data) {
  var page = d3.select(selector).node().getBoundingClientRect()

  var margin = { top: 0, right: 0, bottom: 0, left: 0},
      w = page.width - margin.left - margin.right,
      h = page.height - margin.top - margin.bottom

  var color = d3.scaleSequential(d3.interpolateRdYlGn)

  var treemap = d3.treemap()
      .tile(d3.treemapBinary)
      .size([w, h - 30])
      .padding(4)

  // Move the Box 30px down for the label name
  var svg = d3.select(selector).append('svg')
      .attr('width', w)
      .attr('height', h)
      .append('g')
      .attr('transform', `translate(0, 30)`)

  var industry_tip = d3.tip()
    .attr('class','d3-tip')
    .html(function(d) {
      return `
        <div>${d.data.key}</div>
        <div>WC: ${round(d._value2)}</div>
        <div>WWG: ${round(d._value)}</div>
        <div>#: ${d.value}</div>
      `
    })

  svg.call(industry_tip)

  var root = d3.hierarchy(data, function(d) {
    return d.values
  })
  root
    .sum(d => d.number_industry)

  // Add color parameter as _value
  root.eachAfter(function(node) {
    var sum = +node.data.waste_generation || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i]._value;
    node._value = sum;
  })

  // Add color parameter as _value
  root.eachAfter(function(node) {
    var sum = +node.data.water_consumption || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i]._value2;
    node._value2 = sum;
  })

  render(root)

  function render(root){
    var facts = root.children
        .sort((a,b) => a._value > b._value ? -1: 1)
        .filter((d,i) => i < 2)

    if (root.depth == 0) {
      var notes1 = `
        <span class='value'>${facts[0].data.key}</span> which has <span class='value'>${facts[0].value}</span> number of Industries, generates maximum amount of waste water,
        which accounts to <span class='value'>${round(facts[0]._value)} MLD</span>.
      `
      var notes2 = `
        <span class='value'>${facts[1].data.key}</span> which has <span class='value'>${facts[1].value}</span> number of Industries, generates <span>${round(facts[1]._value)} MLD</span> of waste water.
      `

      $('#industry-summary').typeIt({
           strings: [notes1, notes2],
           speed: 40
      })
    }

    if (root.depth == 1) {
      var notes1 = `<span class='value'>${facts[0].data.key}</span> and <span class='value'>${facts[1].data.key}</span> Industries are the Major source of Pollution in <span class='value'>${facts[0].parent.data.key}</span>.`
      var notes2 = `<span class='value'>${facts[0].data.key}</span> Industry generates <span class='value'>${facts[0]._value} MLD</span> of waste water.`
      var notes3 = `<span class='value'>${facts[1].data.key}</span> Industry generates <span class='value'>${facts[1]._value} MLD</span> of waste water.`

      $('#industry-summary').typeIt({
          strings: [notes1, notes2, notes3],
          speed: 40
      })
    }

    // Attach the Parent data to the label and append it to the top
    var _name = root.parent ? root.data.key : ''
    var label = svg.selectAll('g.label')
      .data([root.parent || root])
    var labelEnter = label.enter().append('g')
      .classed('label', true)
      .on('click', render)
    labelEnter.append('rect')
    labelEnter.append('text')
    var labelUpdate = labelEnter.merge(label)

    labelUpdate.select('rect')
      .attr('x', 0)
      .attr('y', -30)
      .attr('width', w)
      .attr('height', 30)
      .attr('fill', '#fafafa')

    labelUpdate.select('text')
      .attr('x', 10)
      .attr('y', -10)
      .attr('cursor', 'pointer')
      .text(d => name(d) + " . " + _name )

    // Recompute the hierarchy for the root
    recompute = d3.hierarchy(root, function(d) {
      return d.values
    })
    diff = root.depth - recompute.depth

    // Update the width of the root
    reduceWidth(root, diff)

    // Recompute the treemap coordinates for the root
    treemap(root)

    // Update the color scale
    color.domain(d3.extent(root.children, d => d._value).reverse())

    var join = svg.selectAll('.node').data(root.children || [root])
    var enter = join.enter().append('g').classed('node', true)
    var update = enter.merge(join)
    var exit = join.exit().remove()

    enter.append('rect')
    enter.append('text').classed('name', true)
    enter.append('text').classed('size', true)
    enter.append('text').classed('color', true)
    enter.append('text').classed('color2', true)

    update.select('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', (d) => { return color(d._value) })
      .attr('cursor', 'pointer')
      .on('click', render)
      .on('mouseover', industry_tip.show)
      .on('mouseout', industry_tip.hide)

    update.select('text.name')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '1rem')
      .style('fill', '#fff')
      .text(d => d.data.key)

    update.select('text.color')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '2rem')
      .style('fill', '#fff')
      .text(d => `WC: ${round(d._value2)} MLD`)

    update.select('text.color2')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '3rem')
      .style('fill', '#fff')
      .text(d => `WWG: ${round(d._value)} MLD`)

    update.select('text.size')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '4rem')
      .style('fill', '#fff')
      .text(d => `# ${d.value}`)


    // Reduces the width of a node by val
    function reduceWidth(d, val) {
      d.depth -= val
      if (d.children)
        d.children.forEach(function(c) {
          reduceWidth(c, val)
        })
    }

    // Returns the name with all its parent name
    function name(d) {
      return d.parent ? name(d.parent) + " . " + d.data.key : d.data.key
    }
  }
}

function _type2(d) {
  d.number_industry = +d.number_industry
  d.waste_generation = +d.waste_generation
  d.water_consumption = +d.water_consumption
  return d
}
