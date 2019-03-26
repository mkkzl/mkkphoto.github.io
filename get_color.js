

export function getData() {
  console.log("Getting data...");

  var img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function() {
    var newlist = [];
    var canvas = document.getElementById('image1');
    var context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

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
        y= y+1;
      }
      x=x+1;
      y=0;
    }
    var j, x, i;
    for (i = newlist.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = newlist[i];
        newlist[i] = newlist[j];
        newlist[j] = x;
    }
    console.log("Done parsing");

    console.log("Shuffling and redrawing pixels..");
    var w = 0;
    var canvassmall = document.getElementById('newimage');
    var ctx = canvassmall.getContext("2d");
    canvassmall.width =img.width;
    canvassmall.height= img.height;
    while (w<=img.width)
    {
      var h=0

      while (h<= img.height)
      {

        var n=0
        var color= newlist[w*100 + h];
        ctx.fillStyle = color;
        ctx.fillRect(w, h, 1, 1);

        h=h+1
        n=n+1
      }
      w= w+1
    }
    console.log("Done shuffling");


  }

  img.src = "wall46.jpg";

}


getData();
