d3.csv('../data/sewage.csv', _type3, function(error, res) {
  if (error)
    console.log(error)

  let nest_data = d3.nest()
      .key(d => d.state)
      .key(d => d.place)
      .entries(res)

  var data = {
    key: 'STATES'
  }

  data['values'] = nest_data

  drawSewageTreemap('#sewage-chart', data)
})

function drawSewageTreemap(selector, data) {
  var page = d3.select(selector).node().getBoundingClientRect()

  var margin = { top: 0, right: 0, bottom: 0, left: 0},
      w = page.width - margin.left - margin.right,
      h = page.height - margin.top - margin.bottom

  var color = d3.scaleSequential(d3.interpolateRdYlGn)

  var treemap = d3.treemap()
      .tile(d3.treemapSquarify)
      .size([w, h - 30])
      .padding(5)

  // Move the Box 30px down for the label name
  var svg = d3.select(selector).append('svg')
      .attr('width', w)
      .attr('height', h)
      .append('g')
      .attr('transform', `translate(0, 30)`)

  var sewage_tip = d3.tip()
    .attr('class','d3-tip')
    .html(function(d) {
      if (d.height == 1)
        return `
          <div>${d.data.key}</div>
          <div>SG: ${d.value}</div>
          <div>TC: ${d._value}</div>
          <div>E: ${percentage(d._value2)}</div>
          <div>${d.data.values[0]['category']}</div>
        `
      else
        return `
          <div>${d.data.key}</div>
          <div>SG: ${d.value}</div>
          <div>TC: ${d._value}</div>
        `
    })

  svg.call(sewage_tip)

  var root = d3.hierarchy(data, function(d) {
    return d.values
  })
  root
    .sum(d => d.sewage_generated)

  // Add color parameter as _value
  root.eachAfter(function(node) {
    var sum = +node.data.treatment_capacity || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i]._value;
    node._value = sum;
  })

  root.eachAfter(function(node) {
    var sum = +node.data.efficiency || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i]._value2;
    node._value2 = sum;
  })

  render(root)

  function render(root){
    var facts = root.children
        .sort((a,b) => a.value > b.value ? -1: 1)
        .filter((d,i) => i < 2)

    if (root.depth == 0) {
      var notes1 = `<span class='value'>${facts[0].data.key}</span> generates <span class='value'>${facts[0].value} MLD</span> of sewage, it's treatment efficiency is <span class='value'>${percentage(facts[0]._value / facts[0].value)}</span>.`
      var notes2 = `<span class='value'>${facts[1].data.key}</span> generates <span class='value'>${facts[1].value} MLD</span> of sewage, it's treatment efficiency is <span class='value'>${percentage(facts[1]._value / facts[1].value)}</span>.`

      $('#sewage-summary').typeIt({
           strings: [notes1, notes2],
           speed: 40
      })
    }

    if (root.depth == 1) {
      var notes1 = `<span class='value'>${facts[0].data.key}</span> and <span class='value'>${facts[1].data.key}</span> generate maximum amount of sewage in <span class='value'>${facts[0].parent.data.key}</span>.`
      var notes2 = `<span class='value'>${facts[0].data.key}</span> which is a <span class='value'>${facts[0].data.values[0].category} city</span>, generates <span class='value'>${facts[0].value} MLD</span> of sewage and has a treatment efficiency of <span class='value'>${percentage(facts[0]._value2)}</span>.`
      var notes3 = `<span class='value'>${facts[1].data.key}</span> which is a <span class='value'>${facts[1].data.values[0].category} city</span>, generates <span class='value'>${facts[1].value} MLD</span> of sewage and has a treatment efficiency of <span class='value'>${percentage(facts[1]._value2)}</span>.`

      $('#sewage-summary').typeIt({
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
    color.domain(d3.extent(root.children, d => d.value).reverse())

    var join = svg.selectAll('.node').data(root.children || [root])
    var enter = join.enter().append('g').classed('node', true)
    var update = enter.merge(join)
    var exit = join.exit().remove()

    enter.append('rect')
    enter.append('text').classed('name', true)
    enter.append('text').classed('city', true)
    enter.append('text').classed('size', true)
    enter.append('text').classed('color', true)
    enter.append('text').classed('color2', true)

    update.select('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', (d) => { return color(d.value) })
      .attr('cursor', 'pointer')
      .on('click', render)
      .on('mouseover', sewage_tip.show)
      .on('mouseout', sewage_tip.hide)

    update.select('text.name')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '1rem')
      .style('fill', '#fff')
      .text(d => d.data.key)

    update.select('text.size')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '2rem')
      .style('fill', '#fff')
      .text(d => `SG: ${d.value} MLD`)

    update.select('text.color')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '3rem')
      .style('fill', '#fff')
      .text(d => `TC: ${round(d._value)} MLD`)


    update.select('text.color2')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '4rem')
      .style('fill', '#fff')
      .text(d => {
        if (d.height == 1)
          return `E: ${percentage(d._value2)}`
      })

    update.select('text.city')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.25rem')
      .attr('dy', '5rem')
      .style('fill', '#fff')
      .text(d => {
        if (d.height == 1)
          return d.data.values[0]['category']
      })


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

function _type3(d) {
  d.sewage_generated = +d.sewage_generated
  d.treatment_capacity = +d.treatment_capacity
  d.efficiency = +d.efficiency
  return d
}
