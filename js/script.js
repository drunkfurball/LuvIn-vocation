
// declarations, etc.

const FPS = 30; //Frames per second
const DEFAULT_BACKGROUND = "#FAFAEC";
let LOGGING = false; //Turns on console feedback for input debugging
let toggle_horoscope = false; //tells the update function if it draws the horoscope or the tarot cards
let captured_mouse = {
    offsetX: 0,
    offsetY: 0
};

function reloadCanvas(width, height, name) {

    //delete any remnants of canvas elements past
    let root = document.getElementById('root');
    root.removeChild(root.childNodes[0]);

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

    

    canv.onmousemove = function(e) {
        if ((distBetweenPoints((canv.width/2) + signs[signSelection(e)].x((canv.width>canv.height?canv.height/2:canv.width/2)), canv.height/2 + signs[signSelection(e)].y((canv.width>canv.height?canv.height/2:canv.width/2)), e.offsetX, e.offsetY) < 40) && (!toggle_horoscope)){
            
            // toggle horoscope is a boolean set by the mousemove event
            toggle_horoscope = !toggle_horoscope;
            // That same event should also kick start a timer to clear the toggle_horoscope boolean
            let clear_horoscope = setInterval(function(){
                toggle_horoscope=!toggle_horoscope;
                captured_mouse.offsetX = 0;
                captured_mouse.offsetY = 0;
                clearInterval(clear_horoscope);
            }, 4000);
            // change e to the mousemove event object captured when ^ this was set
            captured_mouse.offsetX = e.offsetX;
            captured_mouse.offsetY = e.offsetY;


        }; 
        
    };

}

//erase the canvas element (by filling it with the default background color)
function clearBoard(ctx, cnv) {

    ctx.fillStyle = DEFAULT_BACKGROUND;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

}

//everything that needs to be redrawn each frame
function update() {

    reloadCanvas(window.innerWidth, window.innerHeight, "canv");
    let cnv = document.getElementById("canv");
    let ctx = cnv.getContext("2d");
    clearBoard(ctx, cnv);
    
    drawZodiac(ctx, cnv.width/2, cnv.height/2, (cnv.width>cnv.height?cnv.height/2:cnv.width/2), "gray");

    // HERE MURPH!
    if (toggle_horoscope) { // toggle horoscope is a boolean set by the mousemove event
        displayHoroscope(captured_mouse); // change e to the mousemove event object captured when ^ this was set
    }
    else { 
        tarotDeck.drawLayout(ctx, cnv.width/2 - 270, cnv.height/2 - 90);
    }
         
}

let args = ["Success!", false, 3]; // run-time parameters, handy for debugging, passed to the main.js function onload
