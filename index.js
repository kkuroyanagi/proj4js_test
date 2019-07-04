
const proj4 = require('proj4');

const jgd = proj4.defs("EPSG:6668","+proj=longlat +ellps=GRS80 +no_defs");
const sys7 = proj4.defs("EPSG:6677","+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");


const ret = proj4('EPSG:6668', 'EPSG:6677', [139.829704, 35.747869]);

console.log(ret);


