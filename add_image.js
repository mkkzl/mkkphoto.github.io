import { getData } from './get_color.js';

var img =document.getElementById('image')

var w= 0

var l = [];
var newlist = getData(l);
console.log("New list: ", newlist, newlist.length);

while (w<=img.width)
{

var h=0
var row = document.createElement("tr")
while (h<=img.height)
{
  var canvas = document.createElement("canvas");
  canvas.width =[1]
  canvas.height= [1]
  var column = document.createElement("td")
  column.width= [1]
  column.height= [1]
  var n=0
  canvas.id = "canvas"+n;
  var ctx = canvas.getContext("2d");
  var color= newlist[0];
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  column.appendChild(canvas);
  row.appendChild(column)
  newlist.shift();
  h=h+1
  n=n+1
}
var table =document.getElementById('table')
table.appendChild(row)
w= w+1
}
