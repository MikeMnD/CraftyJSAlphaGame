Crafty.scene("LevelSelect", function() {
    
    Crafty.background("black");
    
    var elements = [
    "src/entities/LevelButton.js",
    ];
	
    //when everything is loaded, run the main scene
    require(elements, function() {
        
        var LevelOneButton = new LevelButton(
            null,{levelName: "GreenLevel"}
        );
        var LevelOneButtonEntity = LevelOneButton.getEntity();
        
        LevelOneButtonEntity.text("Green level");
        LevelOneButtonEntity.attr({
            x: 250, 
            y: 250, 
            z: 1000, 
            h: 24, 
            w: 100
        });
        LevelOneButtonEntity.color('#00ff00');

        console.log(LevelOneButton);
        console.log(LevelOneButtonEntity);
       
        infc['GreenLevelButton'] = LevelOneButton;
        
        var LevelTwoButton = new LevelButton(
        null,{levelName: "BlueLevel"}   
        );
        var LevelTwoButtonEntity = LevelTwoButton.getEntity();
        
        LevelTwoButtonEntity.text("Blue level");
        LevelTwoButtonEntity.attr({
            x: 250, 
            y: 300, 
            z: 1000, 
            h: 24, 
            w: 100
        });
        LevelTwoButtonEntity.color('#0000ff');
     
        infc['BlueLevelButton'] = LevelOneButton;
     
    });

    
});