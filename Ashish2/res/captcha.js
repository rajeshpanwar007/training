var captcha ={
		value:'',
		setimage: function()
		{
			var x = Math.floor((Math.random()*6)+1);
			switch(x)
			{
			case 1:
				frminput.captchaimage.src = "res/captchaImage/28ivw.jpg";
				value='28ivw';
				break;
			case 2:
				frminput.captchaimage.src = "res/captchaImage/FH2DE.jpg";
				value='FH2DE';
				break;
			case 3:
				frminput.captchaimage.src = "res/captchaImage/gwprp.jpg";
				value='gwprp';
				break;
			case 4:
				frminput.captchaimage.src = "res/captchaImage/HRAI.jpg";
				value='HRAI';
				break;
			case 5:
				frminput.captchaimage.src = "res/captchaImage/jw62k.jpg";
				value='jw62k';
				break;
			case 6:
				frminput.captchaimage.src = "res/captchaImage/k4ez.jpg";
				value='k4ez';
				break;
			}
			
		},
		
		checkcaptcha: function(txt)
		{
			if(txt === value)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
}