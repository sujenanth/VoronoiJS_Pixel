class Circle{
  constructor(x, y, r, color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  draw_Circle = function(r){
    let x0 = this.x;
    let y0 = this.y;

  	let d = 5 - 4*r;

  	let x = 0;
  	let y = r;

  	let deltaA = (-2*r + 5)*4;
  	let deltaB = 3*4;

  	while (x <= y) {
  		ellipse_points(ctx, x0, y0, x, y, this.color);
  		ellipse_points(ctx, x0, y0, y, x, this.color);


  		if (d > 0) {
  			d += deltaA;
  			y -= 1;
  			x += 1
  			deltaA += 4*4;
  			deltaB += 2*2;
  		}
  		else {
  			d += deltaB;

  			x += 1;

  			deltaA += 2*4;
  			deltaB  += 2*4;
  		}
  	}
  }

  start = function(){
    this.draw_Circle(this.r);
  }

  animate = function(){
    this.r  = this.r + 0.5;
    this.draw_Circle(this.r)
  }
}
