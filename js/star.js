var starFactory = function(game, quantity, speed) {
  var group = game.add.group();
  group.enableBody = true;

  for (var i = 0; i < quantity; i++)
  {
    var single = group.create(i * 70, 0, 'star');

   single.body.gravity.y = 120;
   single.body.bounce.y = 0.7 + Math.random() * 0.2;
 }

 return group;
}
