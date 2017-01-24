QUnit.test( "Check the creation of the images", function( assert ) {
	var images = game.load.image.length;
  	assert.equal(images, 3);
});

QUnit.test( "Check the creation of the player object", function( assert ) {
	var player = playerFactory.length;
  	assert.equal(player, 1);
});

