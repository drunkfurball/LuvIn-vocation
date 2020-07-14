
// declarations, etc.

const FPS = 30; //Frames per second
const DEFAULT_BACKGROUND = "#000000";
const DEFAULT_TEXT = "#FFFFFF"
let LOGGING = true; //Turns on console feedback for input debugging

function reloadCanvas(width, height, name) {

    //delete any remnants of canvas elements past
    let root = document.getElementById('root');
    while (root.childElementCount) {
        root.removeChild(root.childNodes[0]);
    }

    //create a new canvas element, same as the first, but with the new dimensions
    let canv = document.createElement('canvas');
    canv.id = name;
    canv.width = width;
    canv.height = height;
    canv.style.position = "absolute";
    canv.style.top = 0;
    canv.style.left = 0;
    canv.style.margin = 0;
    canv.style.zIndex = 0;

    // add the new element
    root.appendChild(canv);

}

//erase the canvas element (by filling it with the default background color)
function clearBoard(ctx, cnv) {

    ctx.fillStyle = DEFAULT_BACKGROUND;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

}

//everything that needs to be redrawn each frame
function update() {

    let cnv = document.getElementById("canv");
    let ctx = cnv.getContext("2d");
    clearBoard(ctx, cnv);
    tarotDeck.drawLayout(ctx, cnv.width/2, cnv.height/2);
             
}

let args = ["Success!", false, 3]; // run-time parameters, handy for debugging, passed to the main.js function onload
