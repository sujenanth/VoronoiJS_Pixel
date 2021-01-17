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

  	let d = 1 - r;

  	let x = 0;
  	let y = r;

  	let deltaA = 1;
  	let deltaB = 2 - 2 * r;

  	while (x <= y) {
  		if (d < 0) {
  			d += d + deltaA;
  			x += 1;
  			deltaA = deltaA + 2;
  			deltaB = deltaB + 2;
  		}
  		else {
  			d += deltaB;
			x += 1;
			y = y -1;
			deltaA = deltaA	+ 2;
			deltaB = deltaB + 4
  		}
		ellipse_points(ctx, x0, y0, x, y, this.color);
		ellipse_points(ctx, x0, y0, y, x, this.color);
  	}
  }

  start = function(){
    this.draw_Circle(this.r);
  }

  animate = function(){
    this.r  = this.r + 1;
    this.draw_Circle(this.r)
  }
}
