const canvas = document.querySelector("canvas")
const img = new Image()
let keyframes = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight

images = Math.floor(canvas.width/900) + 2

const ctx = canvas.getContext("2d")


function drawBackground(ref, ctx, keyframes, speed, frame){   
    if(ref){
        for(let i = 0; i < images; i++){
            ctx.drawImage(ref, 0, 600*frame, 900, 600, -(speed*keyframes%900) + (i*899), 17, 900, 617)
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
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.fillStyle = 'rgb(113, 138, 199)'
    ctx.fillRect(0, 617, canvas.width, canvas.height)
    images = Math.floor(canvas.width/900) + 2

    
}

function init(){
    img.src = "background.png"
    ctx.fillStyle = 'rgb(113, 138, 199)'
    ctx.fillRect(0, 617, canvas.width, canvas.height-617)
    window.requestAnimationFrame(draw)
}

function draw(){
    getBackground(img, ctx, keyframes)
    keyframes++
    
    window.requestAnimationFrame(draw)
}

init();

