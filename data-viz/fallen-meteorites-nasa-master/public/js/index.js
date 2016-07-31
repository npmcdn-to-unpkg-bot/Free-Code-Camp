//TODO: FIX resize map function errors when zooming . 


//fixme
function clicked(d) {
  //if (active.node() === this) return reset();
  //active.classed("active", false);
  //active = d3.select(this).classed("active", true);

  var bounds = path.bounds(d),
      dx = bounds[1][0] - bounds[0][0],
      dy = bounds[1][1] - bounds[0][1],
      x = (bounds[0][0] + bounds[1][0]) / 2,
      y = (bounds[0][1] + bounds[1][1]) / 2,
      scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
      translate = [width / 2 - scale * x, height / 2 - scale * y];

  svg.transition()
      .duration(750)
      //.call(zoom.translate(translate).scale(scale).event);
  //.call(zoom.transform, d3.zoomIdentity); //resets back to initial state
  .call(zoom.transform(translate).scale(scale).event);
}

const zoomed = () => {
  g.style('stroke-width', 1.5/ d3.event.scale + 'px');
 //g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
   g.attr("transform", "translate(" + d3.event.transform.x + "," + d3.event.transform.y + ") scale(" + d3.event.transform.k + ")");
  //g.attr('scale', d3.event.transform.k);
}
const zoom = d3.zoom()
.scaleExtent([1, 500])
  .on('zoom', zoomed);
  
let width = $('body').width();
let height = $('body').height();

const projection = d3.geoMercator().scale(140).translate([width/2, height/1.75]);//.center([0, 0]).rotate([0, 0]);
const path = d3.geoPath()
  .projection(projection);

 //didn't use. instead used svg with same aspect ratio. 
const resizeMap = () =>{
   width = $('body').width();
   height = $('body').height();
  
}
      //.attr('transform', d3.event.transform)
     // .attr('scale', d3.event.transform.k)
   //.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
   //.attr("transform", transform);
/*   
    was working
    g.attr("transform", "scale(" + $("#root").width()/1200 + ")");
	    $("svg").height($("#root").height());
  $("svg").width($("#root").width());
  
}
*/
const svg = d3.select('body').append('div').append('svg')
  //.attr('width', width)
  //.attr('height', height)
  .attr('viewBox', '0 0 ' + width + ' ' + height)
  .attr('preserveAspectRatio', 'xMinYMin')
.attr('class', 'svg')
 //.call(zoom.transform, d3.zoomIdentity);
  .call(zoom);
  //.call(zoom.event);
/* didn't need just set fill on svg to color
const ocean = svg.append('rect') // append rect before g for correct z-depth svg does z-depth by placement order

.attr('class', 'ocean')
  .attr('width', width)
  .attr('height', height);
*/
const g = svg.append('g');

// load and display the World Map 
d3.json("https://raw.githubusercontent.com/mbostock/topojson/master/examples/world-50m.json", function(error, topology) {
  // meteorite data
  d3.json('https://data.nasa.gov/resource/y77d-th95.geojson', function(error, json) {
  if (error) throw error;
    console.log(topology);
  g.selectAll("path")
    .data(topojson.feature(topology, topology.objects.countries).features)
    .enter().append("path")
    .attr("d", path)
    .attr('class', 'map')
    //.call(zoom)

const toolTip = d3.select('body').append('div')
  .attr('class', 'toolTip')
  .style('opacity', 0);


  if (error) throw error;
  let massData = json.features.map(function(d){
    return d.properties.mass;
  });
  let minMass = d3.min(massData);
  let maxMass = d3.max(massData);
  let colors = ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'].reverse();
const colorScale = d3.scaleQuantile()
  .domain([minMass,maxMass])
  .range(colors);
  g.selectAll('.meteorite')
    .data(json.features)
    .enter().append('circle')
    .attr('cx', function(d) {
      return projection([d.properties.reclong, d.properties.reclat])[0]
    })
    .attr('cy', function(d) {
      return projection([d.properties.reclong, d.properties.reclat])[1]
    })
    .attr('r', function(d) {
      return 5//Math.pow(d.properties.mass, 0.2)
    })
    .attr('class', 'meteorite')
    .style('fill', function(d) {
      return colorScale(d.properties.mass)
    })
    .on('mouseover', function(d) {
      const format = d3.format('.4n');
      let meteorite = d.properties;
      let year = new Date(meteorite.year).getFullYear();
      
      toolTip.transition()
        .duration(200)
        .style('opacity', 0.9)
      toolTip.html(
          '<span>Name: ' + meteorite.name + '</span><br>' +
          '<span>Mass (kg): ' + format(meteorite.mass) + '</span><br>' +
          '<span>Year: ' + year + '</span>'
        )
        .style('left', d3.event.pageX + 25 + 'px')
        .style('top', d3.event.pageY + 25 + 'px')
    })
    .on('mouseout', function(d) {
      toolTip.transition()
        .duration(200)
        .style('opacity', 0);
    })
  .on('click', clicked)
});
  });
d3.select(window).on('resize', resizeMap);