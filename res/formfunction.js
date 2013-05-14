var formclass = {    

	validateEmail : function(y) {
		var x = y.value;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
			return false;
		} else {
			return true;
		}
	},

	resetit : function() {
		frminput.txtmobile.disabled = false;
		frminput.image.src = "#";
		frminput.reset();
		var d = document.getElementById("mydiv");
		d.innerHTML = "";
		formclass.resetsign();
		captcha.setimage();
		frminput.myvideo.src = "#";
	},

	loadfile : function() {
		var input = document.getElementById("file");
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#image').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	},

	loadvideo : function() {
		var input = document.getElementById("videofile");
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#myvideo').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	},

	bluremail : function(y) {
		if (!formclass.validateEmail(y)) {
			if (y.value != "") {
				y.value = "";
				y.focus();
			}
		}
	},

	

	selhobbiesblur : function() {
		var t = frminput.selhobbies;
		var x = 0;
		for (i = 0; i < 6; i++) {
			if (t.options[i].selected) {
				x++;
			}
		}
		if (x >= 3) {
			for (i = 0; i < 6; i++) {
				if (t.options[i].selected) {
					t.options[i].selected = false;
				}
			}
			t.title = "Choose only 2 hobbies";
		} else {
			t.title = "";
		}
	},


	txtpinblur : function() {
		var a = document.frminput.txtpin.value;
		if (a != "") {
			if ((a > 110000) && (a < 859999)) {
				document.frminput.txtpin.title = "";
			} else {
				document.frminput.txtpin.value = "";
				document.frminput.txtpin.title = "Invalid pin";
				document.frminput.txtpin.focus();
			}
		}
	},

	txtmobileblur : function() {
		var a = document.frminput.txtmobile.value;
		if (a != "") {
			if ((a > 8000000000) && (a <= 9999999999)) {
				document.frminput.txtmobile.title = "";
			} else {
				document.frminput.txtmobile.value = "";
				document.frminput.txtmobile.title = "Invalid Mobile No.";
				document.frminput.txtmobile.focus();
			}
		}
	},

	submitform : function() {
		return false();
	},

	setpin : function() {
		frminput.txtpin.value = frminput.pinpoints.value;
	},
	
	txtpinchange: function()
	{
		frminput.pinpoints.value = frminput.txtpin.value;
	},

	savesignfunc : function() {
		var canvas = document.getElementById("mycanvas");
		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			var myImage = canvas.toDataURL("image/png");
		}
		var imageElement = document.getElementById("image");
		imageElement.src = myImage;
	},
	
	resetsign : function() {
		var canvas = document.getElementById("mycanvas");
		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
		
	}
	
}