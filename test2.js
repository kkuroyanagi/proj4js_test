const proj4 = require('proj4');
const fs = require('fs');
const assert = require('assert');
const readline = require('readline');

// JGD2011
proj4.defs("EPSG:6668", "+proj=longlat +ellps=GRS80 +no_defs");

// 平面直角9系
proj4.defs("EPSG:6677", "+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs");

// 変換オブジェクト作成
const jgd2011_to_rect9 = proj4('EPSG:6668', 'EPSG:6677');


// 参考サイト
// https://qiita.com/tarotaro1129/items/93521afd693796eb2cfa

const rs = fs.createReadStream('./coords.txt');
const ws = fs.createWriteStream('./output.txt');
const rl = readline.createInterface({
    input: rs,
    output: ws
});

rl.on('line', (row) => {
        if (row.trim() == '') { return; }
        const items = row.split('\t');
        const src_coord = [parseFloat(items[1]), parseFloat(items[0])];
        const conv_coord = jgd2011_to_rect9.forward(src_coord);
        const concated = conv_coord.concat(items);
        console.log(concated);
        ws.write(concated.join('\t') + '\r\n');
});

rl.on('close', ()=>{
    console.log('終了');
});

// fs.readFile('./coords.txt', 'utf8', (err, data) => {
//     assert.equal(err, null);
//     const rows = data.split('\r\n');
//     rows.forEach(row => {
//         if (row.trim() == '') { return; }
//         const items = row.split('\t');
//         const src_coord = [parseFloat(items[1]), parseFloat(items[0])];
//         const conv_coord = jgd2011_to_rect9.forward(src_coord);
//         rect9_coord_arr.push(conv_coord);
//         console.log(conv_coord);
//     })
// });


