class Matrix {
	constructor(){
		this.data = [1, 0, 0, 
					 0, -1, 0, 
					 0, 0, 1];
	}


	setPosition(vector){
		this.data[2] = vector.x;
		this.data[5] = vector.y;
	}

	apply(){
		applyMatrix(this.data[0], this.data[3], this.data[1], 
      		this.data[4], this.data[2], this.data[5]);
	}

	mult(vector){

		return new p5.Vector()
	}
}