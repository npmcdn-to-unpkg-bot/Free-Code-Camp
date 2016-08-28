'use strict';

var data = [];

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function (retData) {
	data = retData.data;

	var formatCurrency = d3.format('$, .2f');
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var margin = {
		top: 10,
		right: 50,
		bottom: 80,
		left: 100
	};

	var height = 500 - margin.top - margin.bottom;
	var width = 1000 - margin.left - margin.right;
	var barWidth = Math.floor(width / data.length);
	var minDate = new Date(data[0][0]);
	var maxDate = new Date(data[274][0]);

	var xScale = d3.time.scale().domain([minDate, maxDate]).range([0, width]);
	var yScale = d3.scale.linear().range([height, 0]).domain([0, d3.max(data, function (d) {
		return d[1];
	})]);
	var xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(d3.time.years, 5);
	var yAxis = d3.svg.axis().scale(yScale).orient('left');

	var svg = d3.select('.graph').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
	svg.append('g').attr('class', 'x axis').call(xAxis).attr('transform', 'translate(0,' + height + ')');
	svg.append('g').attr('class', 'y axis').call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 22).attr('x', -175)
	/*   FREE CODE CAMP SOLUTION TO ABOVE 
 .attr("y", 6)
     .attr("dy", "0.8em")
     .style("text-anchor", "end")
 */

	.text("GDP USA ( BILLIONS )");
	var cardPanel = d3.select('.card');
	var info = cardPanel.append('div').style('opacity', 0).attr('class', 'info');

	svg.selectAll('.bar').data(data).enter().append('rect').attr('width', barWidth).attr('class', 'bar').attr('height', function (d) {
		return height - yScale(d[1]);
	}).attr('x', function (d) {
		return xScale(new Date(d[0]));
	}).attr('y', function (d) {
		return yScale(d[1]);
	}).on('mouseover', function (d) {
		var self = d3.select(this);
		self.classed('active', true);
		var date = new Date(d[0]);
		var gdp = d[1];
		var year = date.getFullYear();
		var month = date.getMonth();
		info.transition().duration(200).style('opacity', 0.8);
		info.html('<span>' + year + ' ' + months[month] + '</span>' + '<br><span> ' + formatCurrency(gdp) + '  &nbsp;Billion</span>').style('left', d3.event.pageX + 5 + 'px').style('top', d3.event.pageY - 50 + 'px');
	}).on('mouseout', function (d) {
		var self = d3.select(this);
		self.classed('active', false);
		info.transition().duration(500).style('opacity', 0);
	});
});