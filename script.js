const canvas = document.querySelector("canvas")
const img = new Image()
let keyframes = 0;
canvas.width = window.innerWidth;
canvas.height = 600;

images = Math.floor(canvas.width/900) + 2

const ctx = canvas.getContext("2d")

function drawBackground(ref, ctx, keyframes, speed, frame){   
    if(ref){
        for(let i = 0; i < images; i++){
            ctx.drawImage(ref, 0, 600*frame, 900, 600, -(speed*keyframes%900) + (i*899), 0, 900, 600)
        }        
    }
}

function getBackground(ref, context, keyframes){
    drawBackground(ref, context, keyframes, 0.2, 0)//sky
    drawBackground(ref, context, keyframes, 0.3, 1, 0)//clouds
    drawBackground(ref, context, keyframes, 0.5, 2, 0)//clouds 2
    drawBackground(ref, context, keyframes, 0.4, 3, 0)//water
    drawBackground(ref, context, keyframes, 1.2, 4, 0)//front water
}

//Handles Dynamic Background Resizes
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    images = Math.floor(canvas.width/900) + 2
}

function init(){
    img.src = "background.png"
    window.requestAnimationFrame(draw)
}

function draw(){
    getBackground(img, ctx, keyframes)
    keyframes++
    
    window.requestAnimationFrame(draw)
}

init();

