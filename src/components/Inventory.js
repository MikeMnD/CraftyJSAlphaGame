Crafty.c("Inventory", {
    _message: "I am invetory!",
    _InventoryScreen: null,
    _closed: true,
    _holder: new Array(),
    _flags: new Array(),
    init: function () {
        this.requires("Text");
        //this.bind("EnterFrame", function() { alert(this.message); });
        this.holder = this._holder;
        this.message = this._message;
        this.flags = this._flags;
        this.closed = this._closed;
    },
    annoying: function (message) {
        if (message != undefined && message != "") {
            this._message = message;
            //console.log(this);
        } else {
            alert(this.getMessage());
        }
    },
    getMessage: function () {
        console.log(this._message);
        return this._message;
    },
    setName: function (sItemName) {
        //console.log(this);
        var tempText = this.text();
        tempText += sItemName;
        this.text(tempText);
    },
    addItem: function (Item) {
        //arInvItem['id': 2, 'name': 'neshto']
        this._holder.push(Item);
        this._flags.push(Item);
    },
    getAllItems: function () {
        return this._holder;
    },
    getAllFlags: function () {
        return this._flags;
    },
    getItem: function (n) {
        return this._holder[n];
    },
    getFlag: function (n) {
        return this._flags[n];
    },
    getItemList: function () {
        var sItemList = "";
        for (var i = 0; i < this._holder.length; i++) {
            sItemList += this._holder[i].name;
        }
        return sItemList;
    },
    setClose: function () {
        this._closed = true;
    },
    setOpen: function () {
        this._closed = false;
    },
    isClosed: function () {
        console.log(this._closed + "123123");
        return this._closed;
    },
    viewInventory: function () {

        if (this.isClosed()) {

            //Crafty("Inventory").each(function() {
            //    this.text("3434");
            //});

            //Crafty(5).text("prez ID");

            //Crafty("Inventory")[0].text("prez array sys 0");
            this.setOpen();

            if (this._InventoryScreen != null) {

                this._InventoryScreen.visible = true;

            } else {

                this._InventoryScreen = Crafty.e("2D, DOM, InventoryScreen, Mouse, Keyboard")
            .origin("center")
            .attr({
                x: 240,
                y: 172,
                z: 100
            });

                var Items = new Array();
                var temp = new String();

                for (var a = 0; a < this.getAllItems().length; a++) {
                    temp = this.getItem(a).name;
                    console.log(a + " Viewing " + temp);
                    Items[a] = Crafty.e("2D, DOM, " + temp + ", Mouse, Keyboard, Draggable, Collision")
                        .attr({
                            x: 264 + a * 64,
                            y: 194,
                            z: 101
                        })
                        .bind("StartDrag", function () {
                            origX = this.x;
                            origY = this.y;
                        })
                        .bind("StopDrag", function () {
                            if (((this.hit("Coin") != false) && (this.has("Shroom"))) ||
                                ((this.hit("Shroom") != false) && (this.has("Coin")))) {
                                var CoinShroomItem = {
                                    'id': 3,
                                    'name': 'CoinShroom'
                                };
                                Crafty("Inventory").addItem(CoinShroomItem);

                                var tempIndex = Crafty("Inventory").getAllItems().length;
                                for (var b = 0; b < tempIndex; b++) {
                                    if (Crafty("Inventory").getItem(b).name == "Shroom") {
                                        Crafty("Inventory").getAllItems().splice(b, 1);
                                        tempIndex = Crafty("Inventory").getAllItems().length;
                                        b--;
                                    } else if (Crafty("Inventory").getItem(b).name == "Coin") {
                                        Crafty("Inventory").getAllItems().splice(b, 1);
                                        tempIndex = Crafty("Inventory").getAllItems().length;
                                        b--;
                                    }
                                }

                                for (var c = 0; c < a; c++) {
                                    Items[c].destroy();
                                }

                                //Crafty("Inventory").viewInventory();
                            } else {
                                this.x = origX;
                                this.y = origY;
                            }
                        });

                }

            }


        } else {
            if (this._InventoryScreen != null) {

                this._InventoryScreen.visible = false;
                this.setClose();
            }
        }


    },
    closeInventory: function () {
        //console.log(Crafty("Inventory"));
        Crafty("Inventory").each(function () {
            //console.log("123");
            //console.log(this);
        });

        if (this._InventoryScreen != null) {
            // console.log("destroy inventory");
            //console.log(this._InventoryScreen);
            Crafty("Inventory")._closed = true;
            this._InventoryScreen.visible = false;
        }
    }
});
