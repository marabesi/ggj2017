var setupKeyboard = function(player, cursors, hitPlatform) {
  var speed = 5;

  player.body.velocity.x = 0;

  if (cursors.up.isDown) {
    player.animations.play('up');
    player.body.velocity.y -= speed;
  }

  if (cursors.down.isDown) {
    player.animations.play('down');
    player.body.velocity.y += speed;
  }

  player.animations.stop();

  player.frame = 4;

  if (cursors.up.isDown && player.body.touching.down && hitPlatform)
  {
      player.body.velocity.y = -350;
  }
}
