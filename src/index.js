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
  game.load.image("ufo", "assets/ufo.png");
}

function create() {
  let spaceShip = game.add.image(150, 150, "ufo");

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

  let buttons = [buttonUp, buttonDown];
  let texts = [textUp, textDown];
  let scoreFunctions = [onButtonUp, onButtonDown];

  

  activateButtonInputs();
  drawButtons();

  // ------------------------------ functions ---------------------------------------------------

  function onButtonDown() {
    text.fill = TEXT_COLOR;
    buttonUp.inputEnabled = true;
    buttonUp.input.useHandCursor = true;
    drawShape(BUTTON_BACKGROUND, BUTTON_STYLE, buttonUp);
    score--;
    text.setText(`score: ${score}`);
    game.add
      .tween(spaceShip)
      .to({ x: "-50" }, 350, Phaser.Easing.Linear.None, true);
    game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
    if (score < 1) {
      buttonDown.inputEnabled = false;
      drawShape(BUTTON_DISABLE, BUTTON_BACKGROUND, buttonDown);
    }
  }

  function onButtonUp() {
    buttonDown.inputEnabled = true;
    buttonDown.input.useHandCursor = true;
    drawShape(BUTTON_BACKGROUND, BUTTON_STYLE, buttonDown);
    score++;
    text.setText(`score: ${score}`);
    game.add
      .tween(spaceShip)
      .to({ x: "+50" }, 350, Phaser.Easing.Linear.None, true);
    game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
    if (score > 9) {
      text.fill = "red";
      drawShape(BUTTON_DISABLE, BUTTON_BACKGROUND, buttonUp);
      buttonUp.inputEnabled = false;
    }
  }

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
  
  function drawButtons() {
    for (let i = 0; i < buttons.length; i++) {
      drawShape(BUTTON_BACKGROUND, BUTTON_STYLE, buttons[i]);
    }
  }

  function activateButtonInputs() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].inputEnabled = true;
      buttons[i].input.useHandCursor = true;
      buttons[i].addChild(texts[i]);
      buttons[i].events.onInputDown.add(scoreFunctions[i], this);
    }
  }
  
}

function update() {}
