var picture =  document.getElementById('image')
function getImageData( picture ) {

    var canvas = document.createElement( 'canvas' );
    canvas.width = 1000;
    canvas.height = 1000;

    var context = canvas.getContext( '2d' );
    context.drawImage(picture, 0, 0 );

    return context.getImageData( 0, 0, picture.width, picture.height );

}

function getPixel( imagedata, x, y ) {

    var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
    return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };

}

var imagedata = getImageData( picture.image );
var list= [];
x= 0
y=0
while (x<= 1000) {
  while (y<=1000){
    var color = getPixel( imagedata, x, y);
    list.push(color)
    y= y+1;
  }
  x=x+1;
}
