var playerFactory = function(game) {
  var player = game.add.sprite(32, game.world.height - 150, 'dude');

  game.physics.arcade.enable(player);

  player.body.bounce.y = 0.2;
  player.body.collideWorldBounds = true;

  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  return player;
}
