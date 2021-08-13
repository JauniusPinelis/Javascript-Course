export function getPlayerObject(two, layoutConfig){
    let playerObject = two.makeRectangle(
        layoutConfig.xMargin, 
        layoutConfig.yMargin, 
        layoutConfig.rectangleSizeX, 
        layoutConfig.rectangleSizeY);
    
    playerObject.positionX = layoutConfig.xMargin;
    playerObject.positionY = layoutConfig.yMargin;
    playerObject.width = layoutConfig.rectangleSizeX;
    playerObject.height = layoutConfig.rectangleSizeY;
    playerObject.moveSpeed = 10;
    playerObject.score = 0;

    return playerObject;
}

export function getComputerObject(two, layoutConfig){
    let computerPlayer = two.makeRectangle(
        layoutConfig.areaWidth - layoutConfig.xMargin, 
        layoutConfig.yMargin, 
        layoutConfig.rectangleSizeX, 
        layoutConfig.rectangleSizeY);

        computerPlayer.positionX =  layoutConfig.areaWidth - layoutConfig.xMargin;
        computerPlayer.positionY = layoutConfig.yMargin;
        computerPlayer.moveSpeed = 1;
        computerPlayer.score = 0;


        return computerPlayer;
}

export function GetBallObject(two, layoutConfig){
    let ballObject = two.makeCircle(layoutConfig.areaWidth / 2, layoutConfig.areaHeight/ 2, 5);
    ballObject.positionX = layoutConfig.areaWidth / 2;
    ballObject.positionY = layoutConfig.areaHeight / 2;
    ballObject.radius = 5;
    ballObject.moving = false;
    return ballObject;
}