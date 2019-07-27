const canvas = document.getElementById('canvas');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  canvas.style.border = "2px solid red";

  function draw(scale) {
    ctx.scale(scale, scale);
    ctx.lineWidth = 5;
    ctx.fillStyle = "green";
    ctx.fillRect(200, 300, 400, 300);
    ctx.fillStyle = "brown";
    ctx.fillRect(450, 450, 100, 150);
    ctx.fillRect(250, 450, 100, 100);
    ctx.fillStyle = "rgba(255, 30, 59, 0.5)";
    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(600, 300);
    ctx.lineTo(400, 100);
    ctx.fill();
  }

  document.onload = draw(1);
  //draw(0.5);
  //draw(4);
} else {

}


