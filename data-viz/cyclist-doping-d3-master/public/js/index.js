'use strict';

//TODO: LEGEND, AXIS, NATIONALITY FLAG

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json', function (retData) {
  var data = retData;

  var margin = {
    top: 30,
    right: 150,
    bottom: 50,
    left: 75
  };
  var height = 500 - (margin.top + margin.bottom);
  var width = 1000 - (margin.left + margin.right);
  var minTime = d3.min(data, function (d) {
    return d.Seconds;
  });
  var maxTime = d3.max(data, function (d) {
    return d.Seconds;
  });
  var difference = maxTime - minTime;
  var secondsBehind = function secondsBehind(time) {
    return time - minTime;
  };

  var xScale = d3.scale.linear().domain([difference + 30, 0]).range([0, width]);
  var yScale = d3.scale.linear().domain([36, 1]).range([height, 0]);
  var xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(10);
  var yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(10);
  var info = d3.select('.card-panel').append('div').attr('class', 'info').style('opacity', 0);
  var svg = d3.select('.graph').attr('height', height + margin.top + margin.bottom).attr('width', width + margin.left + margin.right).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  svg.append('g').call(xAxis).attr('class', 'axis').attr('transform', 'translate(0,' + height + ')');
  svg.append('g').call(yAxis).attr('class', 'axis').append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", "0.8em").style("text-anchor", "end").text("Place");

  svg.selectAll('circle').data(data).enter().append('circle').attr('cx', function (d) {
    return xScale(secondsBehind(d.Seconds));
  }).attr('cy', function (d) {
    return yScale(d.Place);
  }).attr('r', 5).style('fill', function (d) {
    if (!!d.Doping) {
      return '#FF5252';
    }
    return '#4CAF50';
  }).on('mouseover', function (d) {
    var allegationText = !!d.Doping ? '<span>Allegation: ' + d.Doping + '</span><br>' + '<span>' + d.URL + '</span>' : '';
    var self = d3.select(this);
    self.classed('active', true);
    info.transition().duration(200).style('opacity', 0.8);
    info.html('<span class="">' + d.Name + ': ' + '<span> ' + d.Nationality + '</span></span>' + '<br><span>' + 'Time : ' + d.Time + ' minutes</span><br></br>' + allegationText).style('left', d3.event.pageX + 5 + 'px').style('top', d3.event.pageY - 50 + 'px');
  }).on('mouseout', function (d) {
    var self = d3.select(this);
    self.classed('active', false);
    info.transition().duration(500).style('opacity', 0);
  });

  svg.selectAll('.text').data(data).enter().append('text').text(function (d) {
    return d.Name;
  }).attr('x', function (d) {
    return xScale(secondsBehind(d.Seconds));
  }).attr('y', function (d) {
    return yScale(d.Place);
  }).attr('transform', 'translate(15,4)');

  svg.append("text").attr('class', 'x label').attr('x', width * 0.35).attr('y', height + 40).text('Seconds Behind Leader');
  svg.append('text').attr('class', 'y label').attr('x', width * .1).attr('y', height * .5).text('Ranking').attr('transform', 'rotate(90)');

  svg.append('rect').attr('x', width - 250).attr('class', 'legend').attr('y', height * 0.35).attr('width', 250).attr('height', 100);

  //.style('fill', 'none')
  svg.append('circle').attr('cx', width - 230).attr('cy', height * 0.4).attr('class', 'allegations').attr('r', 7);
  svg.append('circle').attr('cx', width - 230).attr('cy', height * 0.5).attr('class', 'no-allegations').attr('r', 7);
  svg.append('text').text('Rider with Doping Allegations').attr('x', width - 200).attr('y', height * 0.41);
  svg.append('text').text('No Doping Allegations').attr('x', width - 200).attr('y', height * 0.51);
});