var ogr2ogr = require('ogr2ogr')
var url = "https://gist.github.com/wavded/7376428/raw/971548233e441615a426794c766223488492ddb9/test.geojson"
ogr2ogr(url).format('kml').stream().pipe(process.stdout)
