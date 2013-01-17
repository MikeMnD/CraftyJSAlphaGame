Inventory = BaseEntity.extend({

    initialize: function () {
        var model = this;
        var entity = Crafty.e("2D, DOM, Text, Inventory, Keyboard");

        entity
            .text("Inventory:")
            .attr({ x: 550, y: 50, z: 1000, w: 400 })
            .textColor('#ff0000')
            .textFont({ 'size': '24px', 'family': 'Arial' })
            .bind("KeyDown", function () {
                if (this.isDown('I')) {
                    //console.log("otvori-zatvori inventara");
                    Crafty("Inventory").viewInventory();
                }
            });

        model.set({ 'entity': entity });
    }

});