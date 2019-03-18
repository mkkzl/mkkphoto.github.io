var p= 0
while (p<=50)
{

var i=0
var row = document.createElement("tr")
while (i<=100)
{
  var canvas = document.createElement("canvas");
  canvas.width =[10]
  canvas.height= [10]
  var column = document.createElement("td")
  var n=0
  canvas.id = "canvas"+n;
  var ctx = canvas.getContext("2d");
  var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 10, 10);
  column.appendChild(canvas);
  row.appendChild(column)
  i=i+1
  n=n+1
}
var table =document.getElementById('table')
table.appendChild(row)
p= p+1
}


/*
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
ctx.fillStyle = color;
ctx.fillRect(0, 0, 100, 100);

var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
ctx.fillStyle = color;
ctx.fillRect(0, 0, 100, 100);

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
ctx.fillStyle = color;
ctx.fillRect(0, 0, 100, 100);

var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
ctx.fillStyle = color;
ctx.fillRect(0, 0, 100, 100);

var canvas = document.getElementById("myCanvas4");
var ctx = canvas.getContext("2d");
var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
ctx.fillStyle = color;
ctx.fillRect(0, 0, 100, 100);

var canvas = document.getElementById("myCanvas5");
var ctx = canvas.getContext("2d");
var color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
ctx.fillStyle = color;
ctx.fillRect(0, 0, 100, 100);
*/
