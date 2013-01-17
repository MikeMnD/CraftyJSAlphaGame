Info = BaseEntity.extend({
    defaults: {
        'text': "Move object with arrow keys"
    },
    initialize: function () {
        var model = this;
        var entity = Crafty.e("2D, DOM, Text, Mouse, Keyboard");

        entity
            .attr({ x: 50, y: 50, z: 1000, w: 400 })
            .text(model.get('text'))
            .textColor('#000')
            .textFont({ 'size': '24px', 'family': 'Arial' })
            .areaMap([0, 0], [100, 0], [100, 24], [0, 24])
            .bind('Click', function () {
                alert("Opa");
            });

        model.set({ 'entity': entity });
    }
});