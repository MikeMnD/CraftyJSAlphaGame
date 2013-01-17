Crafty.c('LeftAndRightControls', {

    init: function () {
        this.requires('Multiway');
        this.oldDirection = { x: 0, y: 0 };
        //this._stopMoving();
    },
    leftAndRightControls: function (speed) {
        this.multiway(speed, {
            W: -90,
            S: 90,
            D: 0,
            A: 180,
            UP_ARROW: -90,
            DOWN_ARROW: 90,
            RIGHT_ARROW: 0,
            LEFT_ARROW: 180
        });
        return this;
    }

});
