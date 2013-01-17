Hero = BaseEntity.extend({
    defaults: {
        'speed': 1,
        'name': 'kiro'
    },
    initialize: function () {
        var model = this;
        var entity = Crafty.e("2D, " + gameContainer.conf.get('renderType') + ",  Ape, LeftAndRightControls, Keyboard,  Hero1, SpriteAnimation, Mouse, Collision");

        entity
        .origin("center")
        .attr({
            x: ((Crafty.viewport.width / 2) - (entity.w / 2)),
            y: ((Crafty.viewport.height / 2) - (entity.h / 2)),
            z: 300
        })
        .Ape()

        .collision(new Crafty.polygon([0, 0], [34, 0], [34, 63], [0, 63]))

        .onHit("invisibleTile", function () {
            Crafty.scene("LevelSelect");
        })
        .onHit("bushTile", function () {
            Crafty.scene("LevelSelect");
        })
        .bind('Moved', function (from) {
            if (this.hit('bushTile')) {
                this.attr({ x: from.x, y: from.y });
            }
        })
        .leftAndRightControls(model.get('speed'))

       //.moveTo(4 * model.get('speed'))

        .bind('EnterFrame', function () {

            ////position of the viewport
            //var vpx = (this._x - Crafty.viewport.width / 2),
            //    vpy = (this._y - Crafty.viewport.height / 2);

            ////Max x in map * 32 - Crafty.viewport.width = 1164
            //if (vpx > 0 && vpx < 1196) {
            //    Crafty.viewport.x = -vpx;
            //}

            //if (vpy > 0 && vpy < 600) {
            //    Crafty.viewport.y = -vpy;
            //}

        })

        .bind("KeyDown", function () {
            if (this.isDown('I')) {
                //console.log(Crafty("Inventory").isClosed() + "crafty check after click");
                //if (Crafty("Inventory").isClosed()) {
                //    Crafty("Inventory").viewInventory();
                //}
            }

            if (this.isDown('SPACE')) {
                Crafty("Inventory").viewInventory();
                Crafty("Inventory").setName("aide de");
                //console.log(Crafty("Inventory"));
            }

        })

        /*.bind('Click', function(){
            
           //console.log(Crafty("Inventory").getMessage());
           console.log(Crafty("Inventory").getAllItems());
           Crafty("Inventory").getItemList();
           Crafty("Inventory").viewInventory();
            //alert("Do you click on everybody?");
         })*/

        .setName('Hero');

        entity.origin(entity.w / 2, entity.h / 2);

        model.set({
            'entity': entity
        });
    }
});