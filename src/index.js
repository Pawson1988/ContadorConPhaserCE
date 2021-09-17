import 'phaser-ce';
const TEXT_FONT = "65px Arial";
const TEXT_COLOR = "#ff0044";
const TEXT_ALIGNMENT = "center";

const game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    '',
    {
        preload: preload,
        create: create,
        update: update
    });

function preload() {
    // Load assets here
    //game.load.image('ufo', 'src/assets/ufo.png');
}

function create() {
    // Use loaded assets here
    // Sample text, remove me before start!!
    let text = game.add.text(game.world.centerX, game.world.centerY, "Hola :D", {
        font: TEXT_FONT,
        fill: TEXT_COLOR,
        align: TEXT_ALIGNMENT
    });
    text.anchor.setTo(0.5, 0.5);
    //game.add.sprite(0, game.world.height / 2, 'ufo');
}

function update() {
    // :D
}
