/**
    examples:             
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
*/

Sprites = Backbone.Model.extend({
    defaults: {
        images: {
            'Hero': {
                'file': 'assets/images/hero2.png',
                'tile': 34,
                'tileh': 63,
                'ofsetx': 10,
                'ofsety': 10,
                'elements': {
                    'Hero1': [0, 0],
                    'Hero2': [0, 1]
                }
            },

            'Mushroom': {
                'file': 'assets/images/shroom.png',
                'tile': 16,
                'tileh': 16,
                'elements': {
                    'Shroom': [0, 0]
                }
            },

            'invisibleTile': {
                'file': 'assets/images/invisibleTile.png',
                'tile': 25,
                'tileh': 24,
                'elements': {
                    'invisibleTile': [0, 0]
                }
            },

            'bushTile': {
                'file': 'assets/images/bushTile.png',
                'tile': 25,
                'tileh': 24,
                'elements': {
                    'bushTile': [0, 0]
                }
            },

            'inventory': {
                'file': 'assets/images/inventory.png',
                'tile': 320,
                'tileh': 256,
                'elements': {
                    'InventoryScreen': [0, 0]
                }
            },

        }
    },
    initialize: function () {

    },
    /**
     * Create Crafty sprites from images object
     * Pass key if You want create only one choosen sprite.
     * 
     * @param  string key - sprite definition key
     */
    create: function (key) {
        if (key != undefined) {
            element = this.get('images')[key];
            if (element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);

            return true;
        };

        _.each(this.get('images'), function (element, k) {
            if (element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements'], element['ofsetx'], element['ofsety']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements'], element['ofsetx'], element['ofsety']);
        });

    },
    /**
     * Get path for sprites files - for loading
     * 
     * @return array array of files paths
     */
    getPaths: function () {
        var array = [], i = 0;
        _.each(this.get('images'), function (element, key) {
            array[i] = element['file']
            i++;
        });

        return array;
    }
});