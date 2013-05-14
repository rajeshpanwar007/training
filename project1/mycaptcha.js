captcha = {
	captchavalue : '',
	loadCaptcha : function() {
		var no = Math.floor((Math.random() * 6) + 1);
		switch(no) {
			case 1:
				myform.captchaimg.src = "captchaImage/28ivw.JPG";
				captchavalue = '28ivw';
				break;
			case 2:
				myform.captchaimg.src = "captchaImage/FH2DE.JPG";
				captchavalue = 'FH2DE';
				break;
			case 3:
				myform.captchaimg.src = "captchaImage/gwprp.JPG";
				captchavalue = 'gwprp';
				break;
			case 4:
				myform.captchaimg.src = "captchaImage/HRAI.JPG";
				captchavalue = 'HRAI';
				break;
			case 5:
				myform.captchaimg.src = "captchaImage/jw62k.JPG";
				captchavalue = 'jw62k';
				break;
			case 6:
				myform.captchaimg.src = "captchaImage/k4ez.JPG";
				captchavalue = 'k4ez';
				break;
		}
	},
	check : function() {
		var cap = myform.captchatext.value;
		if (cap != captchavalue || cap == null || cap == "") {
			alert("capta value did not match!!! pls try again");
			captcha.loadCaptcha();
			return false;
		} else {
			return true;
		}
	}
}
