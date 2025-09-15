const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // establishes that drawing is 2d

//CANVA PRACTICE
/*
//draws a Blue Rectangle at those coordinates in the box made on HTML
ctx.fillStyle = "blue";   // fill color
ctx.fillRect(50, 50, 100, 75);  // x, y, width, height
ctx.fillStyle = "red"
ctx.fillRect(60, 60, 100, 75)

//draws line
ctx.beginPath();
ctx.moveTo(50, 50);   // start
ctx.lineTo(160, 135 );  // end
ctx.lineWidth = 2;
ctx.stroke();          // draw line
*/

//~TIME LINE~//

//Line Itself
ctx.beginPath()
ctx.moveTo(25,250);
ctx.lineTo(500,250);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//split
ctx.beginPath()
ctx.moveTo(500,187);
ctx.lineTo(500,375);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//hero wins
ctx.beginPath()
ctx.moveTo(500,189);
ctx.lineTo(580,189);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//hero wins split
ctx.beginPath()
ctx.moveTo(580,125);
ctx.lineTo(580,250);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//Child
ctx.beginPath()
ctx.moveTo(580,125);
ctx.lineTo(850,125);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//Adult
ctx.beginPath()
ctx.moveTo(580,250);
ctx.lineTo(850,250);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//Downfall
ctx.beginPath()
ctx.moveTo(500,375);
ctx.lineTo(1200,375);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();



//~GAMES AND EVENTS~//
//Beginning
ctx.beginPath()
ctx.moveTo(25,260);
ctx.lineTo(25,240);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//Skyward Sword
ctx.beginPath();
ctx.arc(50, 250, 10, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "goldenrod";
ctx.fill();

ctx.beginPath();
ctx.arc(50, 250, 6, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "white";
ctx.fill();

//Events B (SS & MC)

ctx.beginPath()
ctx.moveTo(85,260);
ctx.lineTo(85,240);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

ctx.beginPath()
ctx.moveTo(125,260);
ctx.lineTo(125,240);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();


ctx.beginPath()
ctx.moveTo(165,260);
ctx.lineTo(165,240);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//Minish Cap
ctx.beginPath();
ctx.arc(200, 250, 10, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "goldenrod";
ctx.fill();

ctx.beginPath();
ctx.arc(200, 250, 6, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "white";
ctx.fill();

//4 Swords
ctx.beginPath();
ctx.arc(350, 250, 10, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "goldenrod";
ctx.fill();

ctx.beginPath();
ctx.arc(350, 250, 6, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "white";
ctx.fill();

//events B (4S & Oot)
ctx.beginPath()
ctx.moveTo(455,260);
ctx.lineTo(455,240);
ctx.lineWidth = 4;
ctx.strokeStyle = 'gold';
ctx.stroke();

//OoT
ctx.beginPath();
ctx.arc(500, 250, 10, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "goldenrod";
ctx.fill();

ctx.beginPath();
ctx.arc(500, 250, 6, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = "white";
ctx.fill();



//TimeLine Split
ctx.fillStyle = "goldenrod";   // fill color
ctx.fillRect(50, 50, 21, 21);  // x, y, width, height
ctx.fillStyle = "white"
ctx.fillRect(54, 54, 13, 13)