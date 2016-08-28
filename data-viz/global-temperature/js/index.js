'use strict';

var data = {};
var url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json';

//console.log(data);
// from colorbrewer
var heatMap = ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'];

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// d3 stuff

var margin = {
  top: 50,
  right: 30,
  bottom: 75,
  left: 75
};
var height = 600 - margin.top - margin.bottom;
var width = 1200 - margin.left - margin.right;
var barHeight = height / 12;
var barWidth = width / 263;
var legendRectWidth = 24;
var legentRectHeight = legendRectWidth;

d3.json(url, function (error, data) {
  if (error) throw error;
  var getTemp = function getTemp(variance) {
    return (data.baseTemperature + variance).toFixed(1);
  };
  var baseTemperature = data.baseTemperature;
  var timeData = data.monthlyVariance.map(function (item) {
    return item.year;
  });
  var tempData = data.monthlyVariance.map(function (item) {
    return item.variance;
  });
  var maxDate = new Date(d3.max(timeData), 0);
  var minDate = new Date(d3.min(timeData), 0);
  var minVar = d3.min(tempData);
  var maxVar = d3.max(tempData);

  //heat map scale
  //FIXME: minVar + baseTemperature
  var colorScale = d3.scale.quantile().domain([minVar, maxVar]) // data space
  .range(heatMap); //pixelspace

  //x axis

  var xScale = d3.time.scale()
  //.domain(d3.extent(timeData)) 
  .domain([minDate, maxDate]) //.nice()
  .range([0, width]);
  var xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(d3.time.years, 20);

  //y axis

  var yScale = d3.scale.ordinal().domain(months)
  //can convert a continuous range into a discrete set of values using rangeBands or rangePoints. The rangeBands method computes range values so as to divide the chart area into evenly-spaced, evenly-sized bands, as in a bar chart. The similar rangePoints method computes evenly-spaced range values as in a scatterplot.

  //.rangeRoundBands([0, width], .1); adds padding
  .rangeBands([height, 0]);
  var yAxis = d3.svg.axis().scale(yScale).orient('left');
  // graph

  var graph = d3.select('.graph').append('g').attr('transform', "translate(" + margin.left + ',' + margin.top + ")");

  // calling axis 	
  graph.append('g').call(xAxis).attr('class', 'x axis').attr('transform', 'translate(0,' + height + ')').append('text').attr('x', width / 2).attr('y', 50).text('Year');
  graph.append('g').call(yAxis).attr('class', 'y axis').append('text')
  //.attr('text-anchor', 'end')
  .attr('y', -60).attr('x', -250)

  //.attr('dy', '0.75em')
  .text('Month').attr('transform', 'rotate(-90)');

  var toolTip = d3.select('.card').append('div').style('opacity', 0).attr('class', 'toolTip');

  var legend = graph.selectAll('.legend').data(colorScale.quantiles(), function (d) {
    return d;
  }).enter().append('g');

  legend.append('rect').style('fill', function (d, i) {
    return heatMap[i];
  }).attr('x', function (d, i) {
    return width * (2 / 3) + legendRectWidth * i;
  }).attr('y', height + 60).attr('width', legendRectWidth).attr('height', legentRectHeight);

  legend.append('text').text(function (d, i) {
    return parseInt(d + baseTemperature) + " &#8451";
  }).attr('x', function (d, i) {
    return width * (2 / 3) + legendRectWidth * i + legendRectWidth / 3;
  }).attr('y', height + 95);
  legend.append('text').text('Temperature Legend').attr('y', height + 45).attr('x', width * 0.65);

  graph.selectAll('.rect').data(data.monthlyVariance).enter().append('rect').attr('class', 'rect').attr('x', function (d, i) {
    return xScale(new Date(d.year, d.month));
  }).attr('y', function (d, i) {
    return yScale(months[d.month - 1]);
  }).attr('width', barWidth).attr('height', barHeight).attr('fill', function (d, i) {
    return colorScale(d.variance);
  }).on('mouseover', function (d) {
    toolTip.transition().duration(200).style('opacity', 0.9);
    toolTip.html('<h5>Year: <span class="secondary-text">' + months[d.month - 1] + ' ' + d.year + '</span></h5>' + '<h5>Temp: <span class="secondary-text">' + getTemp(d.variance) + '&deg;C</span></h5>' + '<h6>Variance: <span class="secondary-text">' + d.variance + '&deg;C</span></h6>').style('left', d3.event.pageX - 100 + 'px').style('top', d3.event.pageY - 0 + 'px');
  }).on('mouseout', function (d) {
    toolTip.transition().duration(300).style('opacity', 0);
  });
});
var chart = $(".graph"),
    aspect = chart.width() / chart.height(),
    container = chart.parent();
$(window).on("resize", function () {
  var targetWidth = container.width();
  chart.attr("width", targetWidth);
  chart.attr("height", Math.round(targetWidth / aspect));
}).trigger("resize");