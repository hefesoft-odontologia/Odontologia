Array.prototype.concatByReference = function(array){
	
	for (var i = array.length - 1; i >= 0; i--) {
			this.push(array[i]);
		};
}