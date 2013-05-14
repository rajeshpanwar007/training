

function getCookies(c_name){
	var abzcookies=document.cookie.split(";");
	var x=abzcookies.substr(0,abzcookies.indexOf("="));
	var v=abzcookies.substr(abzcookies.indexOf("=")+1);
	if(c_name==x)
	{
		return unescape(v);
	}
}

function checkCookies(){
	var username=getCookies("user");
		if (username!=null && username!="")
		{
			//alert("Welcome again " + username);
			return username;
  		}
}
