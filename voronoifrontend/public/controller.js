const canvas = document.getElementById("voronoi_canvas");
const button = document.getElementById('startButton')
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const value = document.getElementById('slidervalue').innerText
const pixelsize = 1;
const ps = pixelsize;
const circles = [];
const example = document.getElementById('voronoi_canvas');
const context = example.getContext('2d');
const pixelArray = [];



function setup(){
  this.circles = [];
  ctx.clearRect(0,0,canvas.width, canvas.height)
  for(let x = 0; value > x; x++){
    let r = 1;
    let x  = Math.random() * (canvas.width - r * 2) + r;
    let y = Math.random()  * (canvas.height - r * 2) + r;
    circles.push(new Circle(x, y, r))
  }
    circles.forEach(circle => circle.start());


   //circles.push(new Circle(200,200,1))
   //circles.push(new Circle(50,50,1))
   //.push(new Circle(250,250,1))

   circles.forEach(circle => circle.start());
}


function put_pixel(ctx, x, y, color) {
  ctx.save();
  ctx.fillStyle = color;
  let pixelX = x*pixelsize;
  let pixelY = y*pixelsize;

  //ctx.fillRect(pixelX, pixelY, pixelsize, pixelsize);
  for(let tempx = -1; tempx <= 1; tempx = tempx+1){
    for(let tempy = -1; tempy <= 1; tempy = tempy+1){
      if(!(tempx === 0 && tempy === 0)){
        if(checkBackground(x + tempx, y + tempy, color)){
          ctx.fillRect(pixelX, pixelY, pixelsize, pixelsize);
        }
      }
    }
  }

    /*
    if(checkBackground(x, y, color)){
        ctx.fillRect(pixelX,pixelY,pixelsize,pixelsize);
    }*/
  ctx.restore();
}

function ellipse_points(ctx, x0, y0, x, y, color) {
  put_pixel(ctx, x0 + x, y0 + y, color);
  put_pixel(ctx, x0 - x, y0 + y, color);
  put_pixel(ctx, x0 + x, y0 - y, color);
  put_pixel(ctx, x0 - x, y0 - y, color);
}


function Update(){
  for(let i = 0; i < circles.length; i++){
    circles[i].animate();
  }
  requestAnimationFrame(Update);
}

function getData(){
    let dt = this.getContext('2d').getImageData(250,250,1,1).data;
    console.log(dt);
}



button.addEventListener('click', function () {
    setup();
    Update();
})


function findPos(obj) {
    let left = 0, top = 0;
    if (obj.offsetParent) {
        do {
            left += obj.offsetLeft;
            top += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: left, y: top };
    }
    return undefined;
}

function checkBackground(x, y, color){
  let imageData = ctx.getImageData(x, y,1,1).data;
  if(imageData[0] === 0 && imageData[1] === 0 && imageData[2] === 0 && imageData[3] === 255){
    return true;
  }
  else {
    let hex = "#" + ("000000" + rgbToHex(imageData[0], imageData[1], imageData[2])).slice(-6);
    if(hex === '#000000'){
        return true;
    }
    else{
        return false;
    }
  }
    /*
    let string = Math.round(x) + " " + Math.round(y);
    if(!pixelArray.includes(string)){
        pixelArray.push(string)
        return true;
    }
    else{
        return false;
    }
    */


}
function printPixalArray(){
    console.log(pixelArray)
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomColor() {
	return `rgb(${randomInt(256)}, ${randomInt(256)}, ${randomInt(256)})`
}
