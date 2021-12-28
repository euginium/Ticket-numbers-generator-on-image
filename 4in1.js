const fs = require("fs");
const {createCanvas,loadImage} = require("canvas");
const console = require("console");
const canvas = createCanvas(3508,2480);
const ctx = canvas.getContext("2d");


let previewEdition = 1;
let edition1 = 1;
let edition2 = 2;
let edition3 = 3;
let edition4 = 4;
const saveLayer = (_canvas) => {
fs.writeFileSync(`./output2/${previewEdition}.png`, _canvas.toBuffer("image/png"));
console.log(`${previewEdition} is created`);
}; 


const drawlayer = async () => {
    const image = await loadImage('./input/4in1-horizontal.png');
    ctx.drawImage(image,0,0,3508,2480);    
    ctx.font = 'bold 300px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign  = 'center'
    //1
    ctx.fillText(edition1, 580 ,950);
    ctx.fillText(edition1, 1450,800);
    //2
    ctx.fillText(edition2, 580,2150);
    ctx.fillText(edition2, 1450,2050);
    //3
    ctx.fillText(edition3, 2350,950);
    ctx.fillText(edition3, 3200,800);
    //4
    ctx.fillText(edition4, 2350,2150);
    ctx.fillText(edition4, 3200,2050);



    saveLayer(canvas);
    previewEdition++;
    edition1 = (edition1+4);//increment of 4
    edition2 = (edition2+4);
    edition3 = (edition3+4);
    edition4 = (edition4+4);
};

for(let i = 1 ; i <= 45; i++){
    drawlayer();
};


