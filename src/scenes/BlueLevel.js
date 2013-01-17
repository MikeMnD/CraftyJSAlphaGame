Crafty.scene("BlueLevel", function() {
    
    Crafty.background("blue");

    var elements = [
    "src/entities/Hero.js",
    "src/interfaces/Info.js",
    "src/interfaces/Inventory.js"
    ];
	
    //when everything is loaded, run the main scene
    require(elements, function() {	   
        sc['Hero'] = new Hero();
        
        infc['Info'] = new Info();
        
        infc ['Inventory'] = new Inventory();
    });    

    //for (var i = 0; i < Crafty.viewport.width; i++) {
    //    Crafty.e("2D, Canvas, invisibleTile")
    //        .attr({x: i * 25, y: 0});
    //    Crafty.e("2D, Canvas, invisibleTile")
    //        .attr({x: i * 25, y: (Crafty.viewport.height - 25)});
    //}
    
    //for (var j = 1; j < Crafty.viewport.height; j++) {
    //    Crafty.e("2D, Canvas, invisibleTile")
    //        .attr({x: 0, y: j * 24});
    //    Crafty.e("2D, Canvas, invisibleTile")
    //        .attr({x: (Crafty.viewport.width - 24), y: j * 24});
    //}
});