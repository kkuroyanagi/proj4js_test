
const proj4 = require('proj4');

// const jgd = proj4.defs("EPSG:6668","+proj=longlat +ellps=GRS80 +no_defs");
// const sys7 = proj4.defs("EPSG:6677","+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");


// const ret = proj4('EPSG:6668', 'EPSG:6677', [139.829704, 35.747869]);

// console.log(ret);


// JGD2000
// http://epsg.io/4612
proj4.defs("EPSG:4612","+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs");

// TKY
// http://epsg.io/4301
proj4.defs("EPSG:4301","+proj=longlat +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +no_defs");

// グローバルゲート付近の座標(WGS84)
const coordGG_jgd = [136.882899, 35.161954];

const tky_to_jgd2000 = proj4('EPSG:4301', 'EPSG:4612');

const coordGG_tky = tky_to_jgd2000.inverse(coordGG_jgd);
console.log(coordGG_tky);
const jgd_2nd = tky_to_jgd2000.forward(coordGG_tky);
console.log(jgd_2nd);
