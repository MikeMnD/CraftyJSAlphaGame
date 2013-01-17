/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
LevelButton = BaseEntity.extend({
    initialize: function (attributes, options) {

        var model = this;

        var entity = Crafty.e("2D, DOM, Color, Mouse, Text");

        entity
        .attr({
            x: 250,
            y: 250,
            z: 1000,
            h: 24,
            w: 100
        })
        .css({
            "cursor": "pointer"
        })
        .text("buton")
        .color('#ffffff')
        .textColor('#000000')
        .textFont({
            'size': '12px',
            'family': 'Arial'
        })
        .areaMap([0, 0], [100, 0], [100, 24], [0, 24])
        .bind("Click", function () {
            Crafty.scene(options.levelName);
        })

        model.set({
            'entity': entity
        });

    }
});

