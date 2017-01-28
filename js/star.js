var starFactory = function(game, quantity, speed) {
  var group = game.add.group();
  group.enableBody = true;

  for (var i = 0; i < quantity; i++)
  {
    var y = getRandomInt(0, 900);
    var x = getRandomInt(100, 200);

    var single = group.create(700 + x, y, 'star');

   single.body.gravity.x -= 100;
   single.body.bounce.y = 0.7 + Math.random() * 0.2;
 }

 return group;
}
