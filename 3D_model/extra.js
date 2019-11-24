let y = 200;

function player() {
	this.x = 5;

	this.show = function() {
		//fill(0,255,255);
		//rect(this.x,y,40,40);
		image(invader,this.x,y,50,50);
	}

	this.update = function() {
		y += 3;

		if (y > height - 140) {
			y = height - 140;
		} else if (y < 5) {
			y = 5;
		}
	}
}

function mouseClicked() {
	y -= 120;
}

function obstacle(w,h,x,r,g,b) {
	this.x = random(width + 50,width + 200);
	this.y = random(50,height - 150);

	this.show = function() {
		if (x == 0) {
	     	image(ob,this.x,this.y,100,100);
	    } else {
		    image(ob2,this.x,this.y,100,100);	
	    }
	}

	this.update = function() {
		this.x -= 5;
	}

	this.hit = function() {
		var d = dist(this.x,this.y,player.x,y);

		if (d<55) {
			return true;
		}else {
			return false;
		}
	}
}