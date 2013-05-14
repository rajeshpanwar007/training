var fileupload = {
	readURL : function(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#photo').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	},
	readVideo : function(input2) {
		if (input2.files && input2.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#myvideo').attr('src', e.target.result);
			}
			reader.readAsDataURL(input2.files[0]);
		}
	},
	setPincode : function() {
		var y = myform.rangeinput.value;
		myform.pincode.value = y;
	},
	getPincode : function() {
		fileupload.setPincode();
	},
	saveSign : function() {
		var canvas = document.getElementById("mycanvas");
		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			var myImage = canvas.toDataURL("image/png");
		}
		var imageElement = document.getElementById("photo");
		imageElement.src = myImage;
	},
	resetSign : function() {
		var canvas = document.getElementById("mycanvas");
		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
}