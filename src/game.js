window.onload = function () {

    var version;
    var today = new Date();

    // Fix for cache
    if (window.gameContainer.env == 'dev') {
        version = today.getDay() + "_" + today.getHours() + "_" + today.getSeconds();
    } else {
        version = window.gameContainer.gameVersion;
    };

    //start Crafty
    Crafty.init(800, 600);
    
    Crafty.viewport.clampToEntities = false;
    Crafty.viewport.mouselook(false);


    require([
        "src/sprites.js?v=" + version + "",
        "src/config.js?v=" + version + ""
    ], function () {
        // Create Sprites
        var sprites = new Sprites();
        sprites.create();

        // Load config
        window.gameContainer['conf'] = new Config({});

        //the loading screen - that will be display while assets loaded
        Crafty.scene("loading", function () {
            // clear scene and interface
            var sc = [];
            var infc = [];

            var loadingText = Crafty.e("2D, " + window.gameContainer.conf.get('renderType') + ", Text")
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
                'size': '42px',
                'family': 'Arial'
            });

            // load takes an array of assets and a callback when complete
            Crafty.load(sprites.getPaths(), function () {
                // array with local components
                var elements = [
                "src/components/MouseHover.js?v=" + version + "",
                "src/components/LeftAndRightControls.js?v=" + version + "",
                "src/components/Annoying.js?v=" + version + "",
                "src/components/Inventory.js?v=" + version + "",
                "src/components/MoveTo.js?v=" + version + "",
                "src/components/Ape.js?v=" + version + "",
                "src/components/cC_crafty-debug-bar-release-uncompressed.js?v=" + version + "",
                "src/entities/base/BaseEntity.js?v=" + version + ""
                ];

                //when everything is loaded, run the main scene
                require(elements, function () {
                    loadingText.destroy();
                    Crafty.debugBar.show();
                    //if (gameContainer.scene != undefined) {
                    //Crafty.scene("LevelSelect");
                    Crafty.scene("GreenLevel");
                    //}


                });
            },
            function (e) {
                loadingText.text('Loading (' + (e.percent.toFixed(0)) + '%)');
            });
        });

        // declare all scenes
        var scenes = [
        "src/scenes/BlueLevel.js?v=" + version + "",
        "src/scenes/GreenLevel.js?v=" + version + "",
        "src/scenes/LevelSelect.js?v=" + version + ""
        ];

        require(scenes, function () {



        });

        //automatically play the loading scene
        Crafty.scene("loading");

    });
};