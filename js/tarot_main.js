(function () {
    
    //And go...
    // draw the canvas to the viewport size
    reloadCanvas(window.innerWidth, window.innerHeight, "canv");
    
    // redraw the canvas element to fit the window if resized
    window.addEventListener("resize", function() {
        reloadCanvas(window.innerWidth, window.innerHeight, "canv");
        update();
    });

    window.addEventListener("click", function(e) {
        tarotDeck.place(e); //adds a new card with each click
        update();
    });
    window.addEventListener("touchstart", function(e) {
        tarotDeck.placeTap(e);
    });

    tarotDeck.init();
    update();
    

    if (LOGGING) console.log(args);
    
})(args); 