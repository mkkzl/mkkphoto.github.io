
export function getData() {
  console.log("Getting data...");

  var img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function() {
    var newlist = [];
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.id= 'main_image';
    var canvas2 = document.createElement('canvas');
    var context2 = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas2.width = img.width;
    canvas2.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);

    var x = 0;
    var y = 0;

    console.log("Parsing image...");
    while (x<=img.width){
      while (y<=img.height){
        var imageData = context.getImageData(x, y, 1, 1);
        var data= imageData.data;
        var r= data[0]
        var g= data[1]
        var b= data[2]
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
        var j, t, i;
        for (i = newlist.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            t = newlist[i];
            newlist[i] = newlist[j];
            newlist[j] = t;
        }
        //imageData = data;
        // list.push('['+data+']');
        y= y+1;
      }
      x=x+1;
      y=0;
    }
    console.log("Done parsing");

    console.log("Nnew list: ", newlist.slice(500, 1000));
    console.log("Shuffling and redrawing pixels..");
    var w = 0;
    while (w<=100)
    {
      var h=0
      var row = document.createElement("tr")
      while (h<=100)
      {
        var canvassmall = document.createElement("canvas");
        canvassmall.width =[1]
        canvassmall.height= [1]
        var column = document.createElement("td")
        column.width= [1]
        column.height= [1]
        var n=0
        canvassmall.id = "canvas"+n;
        var ctx = canvassmall.getContext("2d");
        var color= newlist[w*100 + h];
        console.log("color: ", color, w*100 + h);
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
        column.appendChild(canvassmall);
        row.appendChild(column)
        // newlist.shift();
        h=h+1
        n=n+1
      }
      var table =document.getElementById('table')
      table.appendChild(row)
      w= w+1
    }
    console.log("Done shuffling");
  }

  img.src = "image.png";

}
// var list= [];
//var newlist=[];
//

getData();
