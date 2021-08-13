import {
  layoutConfig,
  ballMovementDirections,
  defaultDirection
} from "./configuration.js";
import { 
    ballMove, processKeyPress, 
    intersects, changeDirection,
    trackBall, moveUp, moveDown, refreshScore
} from "./functions.js";
import {
  getPlayerObject,
  getComputerObject,
  GetBallObject,
} from "./twohelpers.js";

var elem = document.getElementById("main-game-area");

var params = { width: layoutConfig.areaWidth, height: layoutConfig.areaHeight };
var two = new Two(params).appendTo(elem);

let playerObject = getPlayerObject(two, layoutConfig);
let opponentObject = getComputerObject(two, layoutConfig);
let ballObject = GetBallObject(two, layoutConfig);

ballObject.intersects = intersects;
ballObject.changeDirection = changeDirection;
ballObject.direction = defaultDirection;

opponentObject.moveUp = moveUp;
opponentObject.moveDown = moveDown;
opponentObject.trackBall = trackBall;



two.update();

function launchBall() {

  let direction =
    ballMovementDirections[
      Math.floor(Math.random() * ballMovementDirections.length)
    ];

  ballObject.direction.vertical = direction.vertical;
  ballObject.direction.horizontal = direction.horizontal;
  ballObject.moving = true;

  window.setInterval(function () {
    ballObject.move(layoutConfig, playerObject, opponentObject);
    opponentObject.trackBall(ballObject, layoutConfig);
    two.update();
    refreshScore(playerObject.score, opponentObject.score);
  }, 10);
}

ballObject.move = ballMove;

// $('#main-game-area').on('mousemove', function (e) {
//     console.log(e.offsetX , e.offsetY);
// });

playerObject.processKeyPress = processKeyPress;
playerObject.moveUp = moveUp;
playerObject.moveDown = moveDown;

$(document).keydown(function (e) {
  playerObject.processKeyPress(e, layoutConfig);

  two.update();
});

$("#start-game").click(function() {
  launchBall();
});
