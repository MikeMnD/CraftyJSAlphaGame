Crafty.c('Ape', {
    init: function () {
        //this.bind("EnterFrame", function() { alert(this.message); });

    },
    Ape: function () {
        //setup animations
        this.requires("SpriteAnimation, Collision, Grid, 2D")
        .animate("walk_left", [[1, 0], [2, 0], [3, 0], [4, 0]])
        .animate("walk_right", 1, 0, 4)
        .animate("walk_up", 1, 0, 4)
        .animate("walk_down", 1, 0, 4)
        .bind("NewDirection",
            function (direction) {
                if (direction.x < 0) {
                    if (!this.isPlaying("walk_left")) {
                        this.flip("X");
                        this.stop().animate("walk_left", 20, -1);
                    }
                }
                if (direction.x > 0) {
                    if (!this.isPlaying("walk_right")) {
                        this.unflip("X");
                        this.stop().animate("walk_right", 20, -1);
                    }
                }
                if (direction.y < 0) {
                    if (!this.isPlaying("walk_up")) {
                        this.stop().animate("walk_up", 20, -1);
                    }
                }
                if (direction.y > 0) {
                    if (!this.isPlaying("walk_down")) {
                        this.stop().animate("walk_down", 20, -1);
                    }
                }
                if (!direction.x && !direction.y) {
                    this.stop().reset();
                }
            });

        if (!this.isPlaying()) {
            this.stop().reset();
        }


        return this;
    }
});