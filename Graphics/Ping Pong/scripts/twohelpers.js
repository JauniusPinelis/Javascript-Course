export function getPlayerObject(two, layoutConfig){
    let playerObject = two.makeRectangle(
        layoutConfig.xMargin, 
        layoutConfig.yMargin, 
        layoutConfig.rectangleSizeX, 
        layoutConfig.rectangleSizeY);
    
    playerObject.positionX = layoutConfig.xMargin;
    playerObject.positionY = layoutConfig.xMargin;
    playerObject.width = layoutConfig.rectangleSizeX;
    playerObject.height = layoutConfig.rectangleSizeY;

    return playerObject;
}

export function getComputerObject(two, layoutConfig){
    return two.makeRectangle(
        layoutConfig.areaWidth - layoutConfig.xMargin, 
        layoutConfig.yMargin, 
        layoutConfig.rectangleSizeX, 
        layoutConfig.rectangleSizeY)
}

export function GetBallObject(two, layoutConfig){
    let ballObject = two.makeCircle(layoutConfig.areaWidth / 2, layoutConfig.areaHeight/ 2, 5);
    ballObject.positionX = layoutConfig.areaWidth / 2;
    ballObject.positionY = layoutConfig.areaHeight / 2;
    ballObject.radius = 5;
    return ballObject;
}