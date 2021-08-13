export function refreshScore(playerScore, computerScore) {
  let scoreText = `Player ${playerScore} : ${computerScore} Computer`;
  $("#score").text(scoreText);
}

export function intersects(rect) {
  let x = Math.abs(this.positionX - rect.positionX);
  let y = Math.abs(this.positionY - rect.positionY);

  if (x > rect.width / 2 + this.radius) {
    return false;
  }
  if (y > rect.height / 2 + this.radius) {
    return false;
  }

  if (x <= rect.width / 2) {
    return true;
  }
  if (y <= rect.height / 2) {
    return true;
  }

  let cornerDistance_sq =
    (x - rect.width / 2) ^ (2 + (y - rect.height / 2)) ^ 2;

  return cornerDistance_sq <= (this.radius ^ 2);
}

export function trackBall(ball, layoutConfig) {
  if (this.positionY > ball.positionY) {
    this.moveUp(layoutConfig);
  } else if (this.positionY < ball.positionY) {
    this.moveDown(layoutConfig);
  }

  this.translation.set(this.positionX, this.positionY);
}

export function changeDirection() {
  if (!this.direction) {
    return;
  }

  // if (this.direction.vertical == "Up"){
  //     this.direction.vertical = "Down"
  // }
  // else if (this.direction.vertical == "Down"){
  //     this.direction.vertical = "Up"
  // }

  if (this.direction.horizontal == "Left") {
    this.direction.horizontal = "Right";
  } else if (this.direction.horizontal == "Right") {
    this.direction.horizontal = "Left";
  }
}

export function resetGame(
  ballObject,
  playerObject,
  computerObject,
  layoutConfig
) {
  // Reset Ball Position
  ballObject.positionX = layoutConfig.areaWidth / 2;
  ballObject.positionY = layoutConfig.areaHeight / 2;
  ballObject.moving = false;
  // Reset Player Position
  playerObject.positionX = layoutConfig.xMargin;
  playerObject.positionY = layoutConfig.yMargin;
  // Reset Computer Position
  computerObject.positionX = layoutConfig.areaWidth - layoutConfig.xMargin;
  computerObject.positionY = layoutConfig.yMargin;
}

export function ballMove(layoutConfig, playerObject, computerObject) {
  if (this.moving) {
    if (this.intersects(playerObject) || this.intersects(computerObject)) {
      this.changeDirection();
    }

    if (this.direction.vertical == "Up") {
      this.positionY -= this.direction.speed;
      if (this.positionY < 0) {
        this.direction.vertical = "Down";
      }
    }

    if (this.direction.vertical == "Down") {
      this.positionY += this.direction.speed;
      if (this.positionY > layoutConfig.areaHeight) {
        this.direction.vertical = "Up";
      }
    }

    if (this.direction.horizontal == "Left") {
      this.positionX -= this.direction.speed;
      if (this.positionX < 5) {
        computerObject.score++;
        resetGame(this, playerObject, computerObject, layoutConfig);
      }
    }

    if (this.direction.horizontal == "Right") {
      this.positionX += this.direction.speed;
      if (this.positionX > layoutConfig.areaWidth) {
        playerObject.score++;
        resetGame(this, playerObject, computerObject, layoutConfig);
      }
    }

    this.translation.set(this.positionX, this.positionY);
  }
}

export function moveUp(layoutConfig) {
  if (this.positionY >= 45) {
    this.positionY -= this.moveSpeed;
  }
}

export function moveDown(layoutConfig) {
  if (this.positionY + layoutConfig.yMargin < layoutConfig.areaHeight) {
    this.positionY += this.moveSpeed;
  }
}

export function processKeyPress(e, layoutConfig) {
  if (e.which == 38) {
    this.moveUp(layoutConfig);
  }

  if (e.which == 40) {
    this.moveDown(layoutConfig);
  }

  this.translation.set(this.positionX, this.positionY);
}
