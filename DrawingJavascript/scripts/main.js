console.log("Javascript works");

// let canvas = $("#myCanvas")[0];
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,150,75);

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.moveTo(50, -50);
// ctx.lineTo(1000, 1010);
// ctx.stroke();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);

ctx.font = "30px Arial";
ctx.fillText("Hello World", 0, 100);



