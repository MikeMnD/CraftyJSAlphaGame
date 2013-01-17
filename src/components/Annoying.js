Crafty.c("Annoying", {
    _message: "HiHi",
    init: function () {
        //this.bind("EnterFrame", function() { alert(this.message); });

    },
    annoying: function (message) {
        this.message = message;
        alert(this.message);
    }
});
