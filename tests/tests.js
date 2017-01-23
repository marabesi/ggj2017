QUnit.test( "Should be 3 images created", function( assert ) {
	var images = game.load.image.length;

  assert.equal( 3, images );
});
