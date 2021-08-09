
export function intersects(rect)
{
    let x = Math.abs(this.positionX - rect.positionX);
    let y = Math.abs(this.positionY - rect.positionY);

    if (x > (rect.width/2 + this.radius)) { return false; }
    if (y > (rect.height/2 + this.radius)) { return false; }

    if (x <= (rect.width/2)) { return true; } 
    if (y <= (rect.height/2)) { return true; }

    let cornerDistance_sq = (x - rect.width/2)^2 +
                         (y - rect.height/2)^2;

    return (cornerDistance_sq <= (this.radius^2));
}

export function changeDirection(){
    if (!this.direction){
        return;
    }

    // if (this.direction.vertical == "Up"){
    //     this.direction.vertical = "Down"
    // } 
    // else if (this.direction.vertical == "Down"){
    //     this.direction.vertical = "Up"
    // }

    if (this.direction.horizontal == "Left"){
        this.direction.horizontal = "Right"
    } 
    else if (this.direction.horizontal == "Right"){
        this.direction.horizontal = "Left"
    }
}

export function ballMove(layoutConfig, playerObject){

    if (this.intersects(playerObject)) {
        this.changeDirection();
    }

    if (this.direction.vertical == "Up"){
        this.positionY -= this.direction.speed;
        if (this.positionY < 0){
            this.direction.vertical = "Down"
        }
    }

    if (this.direction.vertical == "Down"){
        this.positionY += this.direction.speed;
        if (this.positionY > layoutConfig.areaHeight){
            this.direction.vertical = "Up"
        }
    }

    if (this.direction.horizontal == "Left"){
        this.positionX -= this.direction.speed;
        if (this.positionX < 5){
            this.direction.horizontal = "Right"
        }
    }

    if (this.direction.horizontal == "Right"){
        this.positionX += this.direction.speed;
        if (this.positionX > layoutConfig.areaWidth){
            this.direction.horizontal = "Left"
        }
    }

    this.translation.set(this.positionX, this.positionY);
}

export function processKeyPress(e, layoutConfig){
    if(e.which == 38) {
        if (this.positionY >= 45){
            this.positionY -= 10;
        }
    }

    if(e.which == 40) {
        if (this.positionY + layoutConfig.yMargin 
            < layoutConfig.areaHeight){
                this.positionY += 10;
        }
    }

    this.translation.set(this.positionX, this.positionY);
}