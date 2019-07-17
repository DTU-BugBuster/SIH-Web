d3.csv('../data/quality.csv', _type, function(error, data) {
  if (error)
    console.log(error)

  drawFlow('#chart', data)
})

function drawFlow(selector, data) {
  var page = d3.select(selector).node().getBoundingClientRect()

  var margin = { top: 40, right: 5, bottom: 40, left: 5 },
      w = page.width - margin.left - margin.right,
      h = 250 - margin.top - margin.bottom

  var colors = ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837']
  var state_colors = {
    'UTTARAKHAND': '#673AB7',
    'UTTAR PRADESH': '#2196F3',
    'BIHAR': '#C51162',
    'WEST BENGAL': '#CDDC39'
  }

  // Colors
  var ph_color = d3.scaleQuantile()
      .domain([0, 6.5, 8.5, 14])
      .range(['#d73027', '#1a9850', '#d73027'])

  var bod_color = d3.scaleQuantile()
      .domain([0, 2, 3, 4, 100])
      .range(['#006837', '#66bd63','#fee08b', '#d73027'])

  var do_color = d3.scaleQuantile()
      .domain([0,2,4,7,100])
      .range(['#006837', '#66bd63','#fee08b', '#d73027'].reverse())

  var fc_color = d3.scaleQuantile()
      .domain([0, 100, 2500, 100000000])
      .range(['#006837', '#66bd63', '#d73027'])

  var svg = d3.select(selector)
      .append('svg')
      .attr('width', w + margin.left + margin.right)
      .attr('height', h + margin.top + margin.bottom)

  var defs = svg.append("defs")

  //Append a linearGradient element to the defs and give it a unique id
  var legendGradient = defs.append("linearGradient")
    .attr("id", "legend-gradient")

  legendGradient
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%")

  legendGradient.selectAll("stop")
    .data([
        {offset: "0%", color: "#a50026"},
        {offset: "25%", color: "#f46d43"},
        {offset: "50%", color: "#d9ef8b"},
        {offset: "75%", color: "#66bd63"},
        {offset: "100%", color: "#006837"}
      ])
    .enter().append("stop")
    .attr("offset", function(d) { return d.offset; })
    .attr("stop-color", function(d) { return d.color; })

  svg.append('rect')
    .attr('width', 300)
    .attr('height', 10)
    .style('fill', "url('#legend-gradient')")

  svg.append('text')
    .attr('y', 21)
    .style('font-size', '0.8rem')
    .style('fill', '#999')
    .text('Bad')

  svg.append('text')
    .attr('x', 272)
    .attr('y', 21)
    .style('font-size', '0.8rem')
    .style('fill', '#999')
    .text('Good')

  var flow_tip = d3.tip()
    .attr('class','d3-tip')
    .direction(function(d) {
      if ($(this).position().left > 600)
          return 'w'
      return 'e'
    })
    .offset(function(d) {
      if ($(this).position().left > 600)
          return [0, -8]
      return [0, 8]
    })
    .html(function(d) {
      var selection = d3.select('div.active').attr('id')

      switch(selection) {
        case 'bod':
            return `
              <div>Location: <span>${d.location}</span></div>
              <div>BOD Mean: <span>${d.bod_mean}</span></div>
              <div>BOD Min: <span>${d.bod_min}</span></div>
              <div>BOD Max: <span>${d.bod_max}</span></div>
            `
            break
        case 'fc':
            return `
              <div>Location: <span>${d.location}</span></div>
              <div>FC Mean: <span>${d.fc_mean}</span></div>
              <div>FC Min: <span>${d.fc_min}</span></div>
              <div>FC Max: <span>${d.fc_max}</span></div>
            `
            break
        case 'ph':
            return `
              <div>Location: <span>${d.location}</span></div>
              <div>PH Mean: <span>${d.ph_mean}</span></div>
              <div>PH Min: <span>${d.ph_min}</span></div>
              <div>PH Max: <span>${d.ph_max}</span></div>
            `
            break
        case 'do':
            return `
              <div>Location: <span>${d.location}</span></div>
              <div>DO Mean: <span>${d.do_mean}</span></div>
              <div>DO Min: <span>${d.do_min}</span></div>
              <div>DO Max: <span>${d.do_max}</span></div>
            `
            break
      }
    })

  svg.call(flow_tip)

  // Animating Gradient to create flowing water effect
  var linearGradient = defs.append('linearGradient')
    .attr('id','animatedGradient')
    .attr('x1','0%')
    .attr('y1','0%')
    .attr('x2','100%')
    .attr('y2','0')
    .attr('spreadMethod', 'reflect')

  linearGradient.append('animate')
    .attr('attributeName','x1')
    .attr('values','0%;100%')
    .attr('dur','7s')
    .attr('repeatCount','indefinite')

  linearGradient.append('animate')
    .attr('attributeName','x2')
    .attr('values','100%;200%')
    .attr('dur','7s')
    .attr('repeatCount','indefinite')

  linearGradient.append('stop')
    .attr('offset','5%')
    .attr('stop-color','#fffffe')
  linearGradient.append('stop')
    .attr('offset','45%')
    .attr('stop-color','#B2EBF2')
  linearGradient.append('stop')
    .attr('offset','55%')
    .attr('stop-color','#B2EBF2')
  linearGradient.append('stop')
    .attr('offset','95%')
    .attr('stop-color','#fffffe');

  var g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

  var x = d3.scalePoint()
      .range([0, w])
      .round(true)

  var y = d3.scalePoint()
      .range([0, h])
      .round(true)

  var line = d3.line()
      .curve(d3.curveMonotoneX)
      .x((d, i) => x(i))
      .y(d => y(d['state']))

  var states = ['UTTARAKHAND', 'UTTAR PRADESH', 'BIHAR', 'WEST BENGAL']
  var num_cities = data.length

  var nest = d3.nest()
      .key(d => d.state)
      .rollup(v => v.length)
      .entries(data)

  nest.reduce((a,c) => {
    c.value = a.value + c.value
    return c
  })

  y.domain(states)
  x.domain(d3.range(num_cities))

  var state_labels = g.selectAll('text.state-label')
    .data(nest)
  .enter().append('text')
    .classed('state-label', true)
    .attr('y', d => y(d.key))
    .attr('dy', '1.5rem')
    .attr('x', (d, i) => {
      if (i == 0)
        return 0
      else
        return x(nest[i-1].value)
    })
    .text(d => d.key)

  drawPath(data, 'bod')
  drawNodes(data, 'bod')

  var note1 = `<span class='value'>24 out of 57</span> Monitoring locations had BOD level above <span class='value'>3mg/l</span>.`
  var note2 = `<span class='value'>2</span> in Uttarakhand, <span class='value'>19</span> in UP and <span class='value'>3</span> in West Bengal.`
  var note3 = `<span class='value'>KANPUR</span>, <span class='value'>VARANASI</span>, <span class='value'>HARIDWAR</span>, <span class='value'>KANNAUJ</span> in UP are major regions of concern in terms of BOD level of water.`

  $('.flow-summary').typeIt({
    strings: [note1, note2, note3],
    speed: 40,
    startDelay: 5000
  })

  // Stepper function
  $('#stepper').on('click', 'div', function () {
    $('#stepper > div').removeClass('active')

    var $this = $(this)
    var step = $this.attr('id')
    $this.addClass('active')

    switch(step) {
      case 'bod':
        $('.ideal-value').html('Ideal Value for BOD is <span class="score">3 mg/litre or less</span>')

        var note1 = `<span class='value'>24 out of 57</span> Monitoring locations had BOD level above <span class='value'>3mg/l</span>.`
        var note2 = `<span class='value'>2</span> in Uttarakhand, <span class='value'>19</span> in UP and <span class='value'>3</span> in West Bengal.`
        var note3 = `<span class='value'>KANPUR</span>, <span class='value'>VARANASI</span>, <span class='value'>HARIDWAR</span>, <span class='value'>KANNAUJ</span> in UP are major regions of concern in terms of BOD level of water.`

        $('.flow-summary').typeIt({
          strings: [note1, note2, note3],
          speed: 40,
          startDelay: 5000
        })
        break
      case 'fc':
        $('.ideal-value').html('Desirable value for Faecal Coliform is <span class="score">500 MPN/100ml</span>, Maximum Permissible is <span class="score">2500 MPN/100ml</span>')

        var note1 = `<span class='value'>34 out of 57</span> Monitoring locations had Faecal Coliform level above Maximum Permissible Level <span class='value'>(2500 MPN/100ml)</span>.`
        var note2 = `<span class='value'>3</span> in Uttarakhand, <span class='value'>11</span> in UP, <span class='value'>10</span> in Bihar and <span class='value'>All</span> locations in West Bengal.`
        var note3 = `Quality of Ganga water in <span class='value'>WEST BENGAL is worst</span> in terms of Faecal Coliform level.`

        $('.flow-summary').typeIt({
          strings: [note1, note2, note3],
          speed: 40,
          startDelay: 5000
        })

        break
      case 'ph':
        $('.ideal-value').html('Ideal Value of PH is between <span class="score">6.5 - 8.5</span>')

        var note = `Water quality in terms of <span class='value'>PH is good</span> across all monitoring locations.`
        $('.flow-summary').typeIt({
          strings: note,
          speed: 40,
          startDelay: 5000
        })

        break
      case 'do':
        $('.ideal-value').html('Ideal value for Dissolved Oxygen is <span class="score">5mg/litre or more</span>')
        var note = `Water quality in terms of <span class='value'>DO(dissolved oxygen) is good</span> across all monitoring locations.`
        $('.flow-summary').typeIt({
          strings: note,
          speed: 40,
          startDelay: 5000
        })

        break
    }

    drawPath(data, step)
    drawNodes(data, step)
  })

  function drawPath(data, step) {
    g.select('path.river-flow').remove()

    var path = g.append('path')
        .datum(data)
        .classed('river-flow', true)
        .attr('fill', 'none')
        .attr('stroke', "url('#animatedGradient')")
        .attr('stroke-width', 15)
        .attr('d', line)

    var path_length = path.node().getTotalLength()

    path
        .attr('stroke-dasharray', path_length + ' ' + path_length)
        .attr('stroke-dashoffset', path_length)
        .transition()
          .duration(57*100)
          .ease(d3.easeLinear)
          .attr('stroke-dashoffset', 0)
  }

  function drawNodes(data, step) {
    g.selectAll('circle.node').remove()

    var nodes = g.selectAll('node')
      .data(data)
    .enter().append('circle')
      .classed('node', true)
      .attr('cx', (d, i) => x(i))
      .attr('cy', d => y(d['state']))
      .attr('fill', d => {
        switch(step) {
          case 'bod': return bod_color(d.bod_mean)
          case 'ph': return ph_color(d.ph_mean)
          case 'do': return do_color(d.do_mean)
          case 'fc': return fc_color(d.fc_mean)
          break
        }
      })
      .on('mouseover', flow_tip.show)
      .on('mouseout', flow_tip.hide)
      .attr('r', 0)
    .transition()
      .delay((d, i) => i * 100)
      .duration(100)
      .attr('r', 7)
  }
}

function _type(d) {
  d.bod_max = +d.bod_max
  d.bod_mean = +d.bod_mean
  d.bod_min = +d.bod_min
  d.do_max = +d.do_max
  d.do_mean = +d.do_mean
  d.do_min = +d.do_min
  d.fc_max = +d.fc_max
  d.fc_mean = +d.fc_mean
  d.fc_min = +d.fc_min
  d.ph_max = +d.ph_max
  d.ph_mean = +d.ph_mean
  d.ph_min = +d.ph_min
  d.tc_max = +d.tc_max
  d.tc_mean = +d.tc_mean
  d.tc_min = +d.tc_min
  return d
}
