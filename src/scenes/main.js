Crafty.scene("main", function() {

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
});