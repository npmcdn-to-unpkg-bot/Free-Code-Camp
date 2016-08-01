var height = 500,
    width = 1000,
    margin = { top: 50, right: 50, bottom: 50, right: 50 };
    


var svg = d3.select('body').append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left + margin.right)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
d3.json('uk.json', function(error, uk){
    if (error) return console.error(error);
    svg.append('path')
    .datum(topojson.feature(uk, uk.objects.subunits))
    .attr('d', d3.geo.path().projection(d3.geo.mercator()));
});