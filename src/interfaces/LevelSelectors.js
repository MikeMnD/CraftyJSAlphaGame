greenLevelSelect = BaseEntity.extend({
    initialize: function () {
        var model = this;
        var entity = Crafty.e("2D, DOM, Color, Mouse, Text");

        entity
            .attr({ x: 250, y: 250, z: 1000, h: 24, w: 100 })
            .css({ "cursor": "pointer" })
            .text("Green Level")
            .color('#00ff00')
            .textColor('#ffffff')
            .textFont({ 'size': '12px', 'family': 'Arial' })
            .areaMap([0, 0], [100, 0], [100, 24], [0, 24])
            .bind("Click", function () {
                Crafty.scene("GreenLevel");
            })

        model.set({ 'entity': entity });


    }
});

blueLevelSelect = BaseEntity.extend({
    initialize: function () {
        var model = this;
        var entity = Crafty.e("2D, DOM, Color, Mouse");

        entity
            .attr({ x: 250, y: 300, z: 1000, h: 30, w: 100 })
            .color('blue')
            .bind("MouseDown", function () {
                Crafty.scene("BlueLevel");
            })

        model.set({ 'entity': entity });


    }
});

button = new SceneButton("BlueLevel", "Green Level");