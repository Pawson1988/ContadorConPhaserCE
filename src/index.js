import "phaser-ce";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const TEXT_FONT = "65px Arial";
const TEXT_FONT_BTN = "40px Arial";
const TEXT_COLOR = "#ff4099";
const TEXT_ALIGNMENT = "center";
const BUTTON_BACKGROUND = "0x34ebe8";
const BUTTON_STYLE = "0x02fdeb";
const BUTTON_DISABLE = "0x616362";
let score = 0;

const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update,
});

function preload() {
  game.load.image("ufo", "assets/ufo.png"); //para que descarga antes de que la funcion create lanza
}

function create() {
  let spaceShip = game.add.image(150, 150, "ufo"); // anadir el spaceshp el game object

  let text = game.add.text(
    game.world.centerX,
    game.world.centerY,
    `score: ${score}`,
    {
      font: TEXT_FONT,
      fill: TEXT_COLOR,
      align: TEXT_ALIGNMENT,
    }
  );
  // para anadir texto el game object.
  let textUp = game.add.text(90, 28, "UP", {
    font: TEXT_FONT_BTN,
    fill: TEXT_COLOR,
    align: TEXT_ALIGNMENT,
  });

  let textDown = game.add.text(60, 28, "DOWN", {
    font: TEXT_FONT_BTN,
    fill: TEXT_COLOR,
    align: TEXT_ALIGNMENT,
  });

  text.anchor.setTo(0.5, 0.5);

  // --------------------------------- Add graphics to game object -----------------

  let buttonUp = game.add.graphics(
    game.world.centerX - 250,
    game.world.centerY + 100
  );
  let buttonDown = game.add.graphics(
    game.world.centerX + 50,
    game.world.centerY + 100
  );

  drawShape(BUTTON_BACKGROUND, BUTTON_STYLE, buttonDown);
  drawShape(BUTTON_BACKGROUND, BUTTON_STYLE, buttonUp);

  // ------------------------------- Up Button ---------------------------------------

  buttonUp.inputEnabled = true;
  buttonUp.input.useHandCursor = true;
  buttonUp.events.onInputDown.add(onButtonUp, this);

  function drawShape(fill, style, button) {
    button.clear();

    button.beginFill(fill);
    button.lineStyle(4, style, 1);

    button.moveTo(0, 0);
    button.lineTo(250, 0);
    button.lineTo(250, 100);
    button.lineTo(125, 100);
    button.lineTo(0, 100);
    button.lineTo(0, 0);

    button.endFill();
  }

  buttonUp.addChild(textUp); //anadir al buton el texto

  // ----------------------- Down Button ---------------------------------------------

  buttonDown.inputEnabled = true;
  buttonDown.input.useHandCursor = true;
  buttonDown.events.onInputDown.add(onButtonDown, this);
  buttonDown.addChild(textDown);

  // ------------------------------ functions for button press ---------------------------------

  function onButtonDown() {
     buttonUp.inputEnabled = true;
     buttonUp.input.useHandCursor = true;
    drawShape(BUTTON_BACKGROUND, BUTTON_STYLE, buttonUp);
    // para que no puede llegar a menos 1 en el contador
    score--; // para decrementar el variable.
    text.setText(`score: ${score}`); // para actualizar en la pagina
    // spaceShip.x -= 50; //para desplazar el spaceship a la izquierda
    game.add
      .tween(spaceShip)
      .to({ x: "-50" }, 350, Phaser.Easing.Linear.None, true);
    game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
    if (score < 1) {
      buttonDown.inputEnabled = false;
      drawShape(BUTTON_DISABLE, BUTTON_BACKGROUND, buttonDown); // para pintar buttonDown en gris
    }
  }

  function onButtonUp() {
    buttonDown.inputEnabled = true;
    buttonDown.input.useHandCursor = true;
    drawShape(BUTTON_BACKGROUND, BUTTON_STYLE, buttonDown);
    score++;
    text.setText(`score: ${score}`);
    // spaceShip.x += 50;
    game.add
      .tween(spaceShip)
      .to({ x: "+50" }, 350, Phaser.Easing.Linear.None, true);
    game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
    if (score > 9) {
      // para cuando el score llega a ser 10.
      text.fill = "red";
      drawShape(BUTTON_DISABLE, BUTTON_BACKGROUND, buttonUp);
      buttonUp.inputEnabled = false;
    }
  }
}

function update() {}
