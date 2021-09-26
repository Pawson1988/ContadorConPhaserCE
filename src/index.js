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
  game.load.image("ufo", "assets/ufo.png"); //para que descarga antes de la funcion create lanza
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

  drawShape1(BUTTON_BACKGROUND, BUTTON_STYLE);
  drawShape2(BUTTON_BACKGROUND, BUTTON_STYLE);

  // ------------------------------- Up Button ---------------------------------------

  buttonUp.inputEnabled = true;
  buttonUp.input.usehandCursor = true;

  buttonUp.events.onInputDown.add(onButtonUp, this);

  // Podria crear una funcion para evitar repitir code para los dos butones y mantenerlo DRY.
  function drawShape1(fill, style) {
    buttonUp.clear();

    buttonUp.beginFill(fill);
    buttonUp.lineStyle(4, style, 1);

    buttonUp.moveTo(0, 0);
    buttonUp.lineTo(250, 0);
    buttonUp.lineTo(250, 100);
    buttonUp.lineTo(125, 100);
    buttonUp.lineTo(0, 100);
    buttonUp.lineTo(0, 0);

    buttonUp.endFill();
  }

  buttonUp.addChild(textUp); //anadir al buton el texto

  // ----------------------- Down Button ---------------------------------------------

  buttonDown.inputEnabled = true;
  buttonDown.input.usehandCursor = true;

  buttonDown.events.onInputDown.add(onButtonDown, this);

  function drawShape2(fill, style) {
    buttonDown.clear();

    buttonDown.beginFill(fill);
    buttonDown.lineStyle(4, style, 1);
    buttonDown.moveTo(0, 0);
    buttonDown.lineTo(250, 0);
    buttonDown.lineTo(250, 100);
    buttonDown.lineTo(125, 100);
    buttonDown.lineTo(0, 100);
    buttonDown.lineTo(0, 0);

    buttonDown.endFill();
  }

  buttonDown.addChild(textDown);

  // ------------------------------ functions for button press ---------------------------------

  function onButtonDown() {
    if (score >= 1) {
      // para que no puede llegar a menos 1 en el contador
      score--; // para decrementar el variable.
      text.setText(`score: ${score}`); // para actualizar en la pagina
      spaceShip.x -= 50; //para desplazar el spaceship a la izquierda
      game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
    }

    if (score < 1) {
      buttonDown.inputEnabled = false;
      buttonUp.inputEnabled = false; // para deshabiliatr los dos butones
      drawShape2(BUTTON_DISABLE, BUTTON_BACKGROUND); // para pintar buttonDown en gris
    }
  }

  function onButtonUp() {
    score++;
    text.setText(`score: ${score}`);
    spaceShip.x += 50;
    game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
    if (score > 9) {
      // para cuando el score llega a ser 10.
      text.fill = "red";
      drawShape1(BUTTON_DISABLE, BUTTON_BACKGROUND);
      buttonUp.inputEnabled = false;
      buttonDown.inputEnabled = false;
    }
  }
}

function update() {}
