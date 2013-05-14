function myfunction () {
	var fruits = ["apple","orange","banana","papaya","peach","guava"];
	fruits.ucase();
	document.getElementById("txt").innerHMTL=fruits;
	
  
}
Array.prototype.ucase = function() {
  for(var i=0;i<this.length;i++){
  	this[i]=this[i].toUpperCase();
  }
}

