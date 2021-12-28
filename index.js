const fs = require("fs");
const {createCanvas,loadImage} = require("canvas");
const console = require("console");
const canvas = createCanvas(420,298);
const ctx = canvas.getContext("2d");

let edition = 1;
const saveLayer = (_canvas) => {
fs.writeFileSync(`./output/${edition}.png`, _canvas.toBuffer("image/png"));
console.log(`${edition} is created`);
}; 


const drawlayer = async () => {
    const image = await loadImage('./input/LuckyDraw.png');
    ctx.drawImage(image,0,0,420,298);    
    ctx.font = 'bold 100px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign  = 'center'
    ctx.fillText(edition, 140,240);
    ctx.fillText(edition, 345,200);
    saveLayer(canvas);
    edition++;
};

for(let i = 1 ; i <= 90; i++){
    drawlayer();
};


