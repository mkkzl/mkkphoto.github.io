var newlist= []
var canvas2 = document.createElement('canvas');
var context2 = canvas2.getContext('2d');
context2.fillStyle = "#FF0000";
context2.fillRect(0, 0, 3, 3);
console.log(list);
list.forEach(function(entry) {
  var p= 0
  /*while (p<=20){
    console.log(entry)
    p=p+1
  }*/
  var r= entry[0]
  var g= entry[1]
  var b= entry[2]
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  newlist.push( "#" + r + g + b);
  var j, x, i;
  for (i = newlist.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = newlist[i];
      newlist[i] = newlist[j];
      newlist[j] = x;
  }


});
