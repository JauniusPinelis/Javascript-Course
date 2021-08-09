export let layoutConfig = {
    areaWidth: 400,
    areaHeight: 250,

    xMargin: 20,
    yMargin: 40,

    rectangleSizeX : 30, 
    rectangleSizeY : 75, 
}

export let defaultDirection = {
    vertical: "Up", // or Down
    horizontal: "Left", // Right
    speed: 0.8
}

export let ballMovementDirections = [
    {
        vertical: "Up", 
        horizontal:"Left"
    },
    {
        vertical: "Up", 
        horizontal:"Right"
    },
    {
        vertical: "Down", 
        horizontal:"Left"
    },
    {
        vertical: "Down", 
        horizontal:"Right"
    },
]