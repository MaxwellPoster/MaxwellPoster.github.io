var BattleWatch = BattleWatch || {};
BattleWatch.Game = function(){};
BattleWatch.Game.prototype = {
    create: function() {
        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('tiles', 'gameTiles');
        this.backgroundlayer = this.map.createLayer('backgroundLayer');
        this.blockedLayer = this.map.createLayer('blockedLayer');
        this.map.setCollisionBetween(1,10000, true, 'blockedLayer');
        this.backgroundlayer.resizeWorld();
        this.createItems();
        this.createEnemies();
        var result = this.findObjectsByType('playerStart', this.map, 'objectsLayer')
        this.player = this.game.add.sprite(result[0].x, result[0].y, 'player');
        this.game.physics.arcade.enable(this.player);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
    },
    createItems: function() {
        this.items = this.game.add.group();
        this.items.enableBody = true;
        var item;
        result = this.findObjectsByType('item', this.map, 'objectsLayer');
        result.forEach(function(element){
            this.createFromTiledObject(element, this.items);
        }, this);
        },
    createEnemies: function() {
        this.enemy = this.game.add.group();
        this.enemy.enableBody = true;
        var enemy;
        result = this.findObjectsByType('enemy', this.map, 'objectsLayer');
        result.forEach(function(element){
            this.createFromTiledObject(element, this.enemy);
        }, this);
    },
findObjectsByType: function(type, map, layer) {
    var result = new Array();
    map.objects[layer].forEach(function(element){
                               if(element.properties.type === type) {
        element.y -= map.tileHeight;
        result.push(element);
                               }
    });
    return result;
},
    createFromTiledObject: function(element, group) {
        var sprite = group.create(element.x, element.y, element.properties.sprite);
     Object.keys(element.properties).forEach(function(key){
         sprite[key] = element.properties[key];
     });
    },
    update: function() {
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        this.game.physics.arcade.overlap(this.player, this.items, //insert collectible here
                                         null, this);
        this.player.body.velocity.x = 0;
        if(this.cursors.up.isDown){
            if(this.player.body.velocity.y == 0)
                this.player.body.velocity.y -= 150;
        }
        else if(this.cursors.down.isDown){
            if(this.player.body.velocity.y == 0)
                this.player.body.velocity.y += 150;
        }
        else {
            this.player.body.velocity.y =0;
        }
        if(this.cursors.left.isDown){
            if(this.player.body.velocity.x == 0)
                this.player.body.velocity.x -= 150;
        }
        else if(this.cursors.right.isDown){
            if(this.player.body.velocity.x == 0)
                this.player.body.velocity.x += 150;
        }
        },
    };