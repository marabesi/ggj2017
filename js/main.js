var width = window.innerWidth;
var height = window.innerHeight;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'parent', { preload: preload, create: create, update: update });

var platforms, player, cursors, stars, score = 0, scoreText, ground, sky, ledge;

function preload() {
  game.load.image('sky', 'img/sky.png');
  game.load.image('ground', 'img/platform.png');
  game.load.image('star', 'img/star.png');
  game.load.spritesheet('dude', 'img/dude.png', 32, 48);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	sky = game.add.tileSprite(0, 0, 800, 600, 'sky');

	platforms = game.add.group();

	platforms.enableBody = true;

	ground = platforms.create(0, game.world.height - 64, 'ground');

	ground.scale.setTo(2, 2);

	ground.body.immovable = true;

  player = playerFactory(game);

  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

  game.camera.follow(player);

  setInterval(function() {
    stars = starFactory(game, 2, 2);
  }, 2000);
}

function update() {
  var hitPlatform = game.physics.arcade.collide(player, platforms);
  var cursors = game.input.keyboard.createCursorKeys();

  setupKeyboard(player, cursors, hitPlatform);

  // game.physics.arcade.collide(stars, player);

  game.physics.arcade.overlap(player, stars, collectStar, null, this);

  sky.tilePosition.x -= 2;

  // ledge.body.x -= 2;
}

function collectStar(player, star)
{
  star.kill();

  score += 10;
  scoreText.text = 'Score: ' + score;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
