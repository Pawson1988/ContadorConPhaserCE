import 'phaser-ce';

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

}

function create() {
    // Sample text, remove me!!
    let text = game.add.text(game.world.centerX, game.world.centerY, "Hola :D", {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });
    text.anchor.setTo(0.5, 0.5);
}

function update() {

}
