var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');

var lastX = 0;
var lastY = 0;

function draw(e){
  ctx.strokeStyle="#000000";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.x, e.y);
	ctx.stroke();
  [lastX, lastY] = [e.x, e.y]
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	[lastX, lastY] = [e.x, e.y];
});
