(function () {
    
    //And go...
    // draw the canvas to the viewport size
    reloadCanvas(window.innerWidth, window.innerHeight, "canv");
    
    // redraw the canvas element to fit the window if resized
    window.addEventListener("resize", function(){
        reloadCanvas(window.innerWidth, window.innerHeight, "canv");
    });
    //tarotDeck.init();
    let loop = setInterval(update, 1000 / FPS);

    if (LOGGING) console.log(args);

})(args); 