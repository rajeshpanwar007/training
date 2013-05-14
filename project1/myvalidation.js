var validation = {
	textAreaVal : function(x) {
		var str = x.innerHTML;
		var patt = /Enter your/gi;
		if (patt.test(str)) {
			x.innerHTML = "";
		}
	},
	validateForm : function() {
		var x = myform.fname.value;
		if (x == "" || x == null) {
			alert("pls fill the First name");
			return false;
		}
		var x = myform.lname.value;
		if (x == "" || x == null) {
			alert("pls fill the last name");
			return false;
		}
		var x = myform.mobileno.value;
		if (x == "" || x == null) {
			alert("pls fill the Mobile Number");
			return false;
		}
		if (isNaN(x) || x > 9999999999 || x < 7000000000) {
			alert("pls enter the valid mobile number \n it should be 10 digits number");
			return false;
		}
		var x = myform.email.value;
		if (x == "" || x == null) {
			alert("pls fill the email id ");
			return false;
		}
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
			alert("Not a valid e-mail address");
			return false;
		}
		var x = myform.address.value;
		if (x == "" || x == null || x == "Enter your address") {
			alert("pls fill the address ");
			return false;
		}

		var x = myform.pincode.value;
		if (x == "" || x == null) {
			alert("pls fill the pincode ");
			return false;
		}
		if (isNaN(x) || x < 0 || x > 999999) {
			alert("pls enter the valid pincode");
			return false;
		}
		return captcha.check();
		//return true;
	}
	
}