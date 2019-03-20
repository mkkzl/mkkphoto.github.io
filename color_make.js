var canvas = document.getElementById('pixel_canvas');
var ctx = canvas.getContext("2d");
var swidth= .4 * screen.width;
var sheight= .4* screen.height;
canvas.width=swidth;
canvas.height=sheight;
var p= 0;
while (p<=canvas.width)
{

var i=0
while (i<=canvas.height)
{
  var n=0

  var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.fillStyle = color;
  ctx.fillRect(p, i, 1, 1);

  i=i+1
  n=n+1
}
p= p+1
}
