const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // establishes that drawing is 2d

//draws a Blue Rectangle at those coordinates in the box made on HTML
ctx.fillStyle = "blue";   // fill color
ctx.fillRect(50, 50, 100, 75);  // x, y, width, height
ctx.fillStyle = "red"
ctx.fillRect(60, 60, 100, 75)

//draws line
ctx.beginPath();
ctx.moveTo(50, 50);   // start
ctx.lineTo(160, 135 );  // end
ctx.stroke();          // draw line
