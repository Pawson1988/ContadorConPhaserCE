import 'phaser-ce';
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const TEXT_FONT = "65px Arial";
const TEXT_COLOR = "#ff0044";
const TEXT_ALIGNMENT = "center";

const game = new Phaser.Game(
    GAME_WIDTH,
    GAME_HEIGHT,
    Phaser.AUTO,
    '',
    {
        preload: preload,
        create: create,
        update: update
    });

function preload() {

}

function create() {
    let text = game.add.text(
        game.world.centerX,
        game.world.centerY,
        "Hola :D",
        {
        font: TEXT_FONT,
        fill: TEXT_COLOR,
        align: TEXT_ALIGNMENT
    });
    text.anchor.setTo(0.5, 0.5);
}

function update() {

}
