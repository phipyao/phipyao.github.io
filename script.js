

function drawBackground(ref, ctx, keyframes, speed, frame){
    if(ref){
      ctx.drawImage(ref, 0, 600*frame, 900, 600, -(speed*keyframes%900) + 900, 0, 900, 600)
      ctx.drawImage(ref, 0, 600*frame, 900, 600, -(speed*keyframes%900), 0, 900, 600)
    }
}

function getBackground(ref, context, keyframes){
    drawBackground(ref, context, keyframes, 0.2, 0)//sky
    drawBackground(ref, context, keyframes, 0.3, 1, 0)//clouds
    drawBackground(ref, context, keyframes, 0.5, 2, 0)//clouds 2
    drawBackground(ref, context, keyframes, 0.4, 3, 0)//water
    drawBackground(ref, context, keyframes, 1.2, 4, 0)//front water
}

const img = new Image()
let keyframes = 0;

function init(){
    img.src = "background.png"
    window.requestAnimationFrame(draw)
}

function draw(){
    const canvas = document.querySelector("canvas")
    canvas.width = 900;
    canvas.height = 600;
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    getBackground(img, ctx, keyframes)
    keyframes++
    console.log(keyframes)

    window.requestAnimationFrame(draw)
}

init();

