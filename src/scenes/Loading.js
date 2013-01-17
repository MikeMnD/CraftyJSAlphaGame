Crafty.scene("Loading", function() {
    // clear scene and interface
    sc = []; 
    infc = [];   

    var loadingText = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Text")
    .attr({
        w: 800, 
        h: 20, 
        x: ((Crafty.viewport.width) / 2), 
        y: (Crafty.viewport.height / 2), 
        z: 2
    })
    .text('Loading...')
    .textColor('#000')
    .textFont({
        'size' : '42px', 
        'family': 'Arial'
    });
		
    // load takes an array of assets and a callback when complete
    Crafty.load(sprites.getPaths(), function() {
        // array with local components
        var elements = [
        "src/components/MouseHover.js?v="+version+"",
        "src/components/RightControls.js?v="+version+"",
        "src/components/LeftControls.js?v="+version+"",
        "src/components/Annoying.js?v="+version+"",
        "src/components/Ape.js?v="+version+"",
        "src/entities/base/BaseEntity.js?v="+version+"",
        ];

        //when everything is loaded, run the main scene
        require(elements, function() {	   
            loadingText.destroy();
            if (gameContainer.scene != undefined) {
                Crafty.scene(gameContainer.scene);
            }
        });
    },
    function(e) {
        loadingText.text('Loading ('+(e.percent.toFixed(0))+'%)');
    });
});