Crafty.scene("GreenLevel", function () {

    Crafty.background("green");


    var elements = [
    "src/entities/Hero.js",
    "src/interfaces/Info.js",
    "src/interfaces/Inventory.js"
    ];

    //when everything is loaded, run the main scene
    require(elements, function () {
        sc['Hero'] = new Hero();

        infc['Info'] = new Info();

        infc['Inventory'] = new Inventory();

        //Crafty.viewport.init(400,300);



        Crafty.viewport.follow(sc['Hero'].getEntity(), 0, 0);

    });
    
    Crafty.e("2D, DOM, Draggable")
.attr({
    x: 150
, y: 120
, w: 100
, h: 100
})
.css({
    "background-color": "red"
});

    Crafty.e("2D, DOM, Color")
    .attr({
        x: 250
      , y: 120
      , w: 100
      , h: 100
    })
    .color("yellow");



    //for (var i = 0; i < Crafty.viewport.width; i *= 25) {
    //    Crafty.e("2D, Canvas, bushTile, Collision")
    //        .attr({x: i * 25, y: 0});
    //    Crafty.e("2D, Canvas, bushTile, Collision")
    //        .attr({x: i * 25, y: (Crafty.viewport.height - 25)});
    //}

    //for (var j = 1; j < Crafty.viewport.height; j += 24) {
    //    Crafty.e("2D, Canvas, bushTile, Collision")
    //        .attr({x: 0, y: j * 24});


    //    if(j > 15 && j < 24){
    //        Crafty.e("2D, Canvas, bushTile")
    //        .attr({x: (Crafty.viewport.width*2 - 24), y: j * 24});
    //    } else {
    //        Crafty.e("2D, Canvas, bushTile, Collision")
    //        .attr({x: (Crafty.viewport.width*2 - 24), y: j * 24});
    //    }

    //}

    // implement basic panning via mouse hold



    //Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function (e) {


    //        if (e.button > 0) return;
    //        var base = { x: e.clientX, y: e.clientY };

    //        function scroll(e) {
    //            var dx = base.x - e.clientX,
    //                dy = base.y - e.clientY;
    //            base = { x: e.clientX, y: e.clientY };
    //            Crafty.viewport.x -= dx;
    //            Crafty.viewport.y -= dy;
    //            return false;
    //        };
    //        Crafty.addEvent(this, Crafty.stage.elem, "mousemove", scroll);
    //        Crafty.addEvent(this, Crafty.stage.elem, "mouseup", function () {
    //            Crafty.removeEvent(this, Crafty.stage.elem, "mousemove", scroll);
    //            //console.log("Crafty.viewport.x = " + Crafty.viewport.x);
    //            //console.log("Crafty.viewport.y = " + Crafty.viewport.y);
    //        });



    //});



});