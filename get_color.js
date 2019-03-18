
function getData(list) {

  var img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
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
        var j, x, i;
        for (i = newlist.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = newlist[i];
            newlist[i] = newlist[j];
            newlist[j] = x;
        }
        //imageData = data;
        list.push('['+data+']');
        y= y+1;
      }
      x=x+1;
      y=0;

    }



    return newlist;
  }
  img.src = "image.png";

}
var list= [];
var newlist=[];

console.log(newlist);
getData(list);
