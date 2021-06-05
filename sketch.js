let matlabRx
let matlabTx

function setup(htmlComponent) {
    matlabTx = htmlComponent;

    htmlComponent.addEventListener("DataChanged", function(event) {
        matlabRx = matlabTx.Data
    })    
}

function setupP5() {
    createCanvas(400, 400)
}

function draw() {
    background(220);
    text(matlabRx, mouseX, mouseY)
}

function mousePressed() {
    matlabTx.Data = 'Hallo from p5js!'
}

