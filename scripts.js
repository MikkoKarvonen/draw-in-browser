var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 25;

var drawing = false;
var lastX = 0;
var lastY = 0;

function draw(e){
  if(!drawing) return;
  ctx.strokeStyle="#000000";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);

var inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  if (this.name === 'lWidth'){
    ctx.lineWidth = this.value;
  }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
