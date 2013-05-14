//geting the values

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
		return true;
	}
}

db_interaction = {
	createDb : function() {
		db = openDatabase("MyDataBase", "2", "my first use", 6 * 1024 * 1024);
		myform = document.getElementById("myform");
		createtable = "CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT ,fname TEXT, lname TEXT,gender TEXT,mobileno INTEGER,dob TEXT,email TEXT,game TEXT,address TEXT,pincode INTEGER,hobbies TEXT,image BLOB)";
		insertstatement = "INSERT INTO user(fname,lname,gender,mobileno,dob,email,game,address,pincode,hobbies,image) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
		deletestatement = "DELETE FROM user WHERE id=?";
		updatestatement = "UPDATE user SET fname=?,lname=?,gender=?,mobileno=?,dob=?,email=?,game=?,address=?,pincode=?,hobbies=?,image=? WHERE id=?";
		db.transaction(function(tx) {
			tx.executeSql(createtable);
			alert("table created");
		});
	},

	insertRecord : function() {
		if (validation.validateForm()) {
			var gametxt = "";
			var hobbiestxt = "";
			var gen = "";
			hob = myform.hobbies;
			for (var i = 0; i < 6; i++) {
				if (hob.options[i].selected) {
					hobbiestxt += hob.options[i].value + ",";
				}
			}
			//alert(hobbiestxt);
			for (var i = 0; i < 4; i++) {
				if (myform.game[i].checked) {
					gametxt += myform.game[i].value + ",";
				}
			}
			//alert(gametxt);

			if (document.getElementById("gendermale").checked == true) {
				gen = "male";
			} else {
				gen = "female";
			}
			//alert(gen);
			var mysrc = myform.photo.src;

			db.transaction(function(tx) {
				tx.executeSql(insertstatement, [myform.fname.value, myform.lname.value, gen, myform.mobileno.value, myform.dob.value, myform.email.value, gametxt, myform.address.value, myform.pincode.value, hobbiestxt, mysrc], db_interaction.doBlankField, db_interaction.onError);
				alert("data inserted");
			});
		}
	},
	showRecord : function() {
		db.transaction(function(tx) {
			tx.executeSql("SELECT * FROM user", [], function(tx, results) {
				dataset = results.rows;
				var res = document.getElementById("result");
				var data = "<table border='1px' ><th>First Name</th><th>Last Name</th><th>Gender</th><th>Mobile No.</th><th>D.O.B.</th><th>Email Id</th><th>Game </th><th>Address</th><th>Pincode</th><th>Hobbies</th><th>Photo</th><th>delete</th><th>edit</th>";
				for (var i = 0; i < dataset.length; i++) {

					data += "<tr>";
					data += "<td>" + dataset.item(i).fname + "</td>";
					data += "<td>" + dataset.item(i).lname + "</td>";
					data += "<td>" + dataset.item(i).gender + "</td>";
					data += "<td>" + dataset.item(i).mobileno + "</td>";
					data += "<td>" + dataset.item(i).dob + "</td>";
					data += "<td>" + dataset.item(i).email + "</td>";
					data += "<td>" + dataset.item(i).game + "</td>";
					data += "<td>" + dataset.item(i).address + "</td>";
					data += "<td>" + dataset.item(i).pincode + "</td>";
					data += "<td>" + dataset.item(i).hobbies + "</td>";
					data += "<td><img height='50' width='50' src=" + dataset.item(i).image + " /></td>";
					data += "<td><a href='#' onclick='db_interaction.deleteRecord(" + dataset.item(i).id + ")'>delete</a></td>";
					data += "<td><a href='#' onclick='db_interaction.loadRecord(" + i + ")'>edit</a></td>";
					data += "</tr>";

				}
				data += "</table>";
				res.innerHTML = data;
			});
		});
	},
	insertRecord : function() {
		if (validation.validateForm()) {
			var gametxt = "";
			var hobbiestxt = "";
			var gen = "";
			hob = myform.hobbies;
			for (var i = 0; i < 6; i++) {
				if (hob.options[i].selected) {
					hobbiestxt += hob.options[i].value + ",";
				}
			}
			//alert(hobbiestxt);
			for (var i = 0; i < 4; i++) {
				if (myform.game[i].checked) {
					gametxt += myform.game[i].value + ",";
				}
			}
			//alert(gametxt);

			if (document.getElementById("gendermale").checked == true) {
				gen = "male";
			} else {
				gen = "female";
			}
			//alert(gen);
			var mysrc = myform.photo.src;

			db.transaction(function(tx) {
				tx.executeSql(insertstatement, [myform.fname.value, myform.lname.value, gen, myform.mobileno.value, myform.dob.value, myform.email.value, gametxt, myform.address.value, myform.pincode.value, hobbiestxt, mysrc], db_interaction.doBlankField, db_interaction.onError);
				alert("data inserted");
			});
		}
	},
	updateRecord : function() {
		if (validation.validateForm()) {
			var gametxt = "";
			var hobbiestxt = "";
			var gen = "";

			for (var i = 0; i < 6; i++) {
				if (myform.hobbies.options[i].selected) {
					hobbiestxt += myform.hobbies.options[i].value + ",";
				}
			}
			//alert(hobbiestxt);
			for (var i = 0; i < 4; i++) {
				if (myform.game[i].checked) {
					gametxt += myform.game[i].value + ",";
				}
			}
			//alert(gametxt);

			if (document.getElementById("gendermale").checked == true) {
				gen = "male";
			} else {
				gen = "female";
			}
			//alert(gen);
			var mysrc = myform.photo.src;
			db.transaction(function(tx) {
				tx.executeSql(updatestatement, [myform.fname.value, myform.lname.value, gen, myform.mobileno.value, myform.dob.value, myform.email.value, gametxt, myform.address.value, myform.pincode.value, hobbiestxt, mysrc, myform.id.value], db_interaction.showRecord, db_interaction.onError);
				alert("data updated");
			});
		}
	},
	deleteRecord : function(id) {
		db.transaction(function(tx) {
			tx.executeSql(deletestatement, [id], db_interaction.showRecord, db_interaction.onError);
			alert("data deleted successfully");
		});
	},
	loadRecord : function(i) {
		db_interaction.doBlankField();
		myform.id.value = dataset.item(i).id;
		myform.fname.value = dataset.item(i).fname;
		myform.lname.value = dataset.item(i).lname;
		if (dataset.item(i).gender == "male") {
			document.getElementById("gendermale").checked = true;
		} else {
			document.getElementById("genderfemale").checked = true;
		}
		myform.mobileno.value = dataset.item(i).mobileno;
		myform.dob.value = dataset.item(i).dob;
		myform.email.value = dataset.item(i).email;

		var gametxt = dataset.item(i).game;
		var n = gametxt.split(",");
		for (var j = 0; j < n.length - 1; j++) {
			if (n[j] == "cricket") {
				document.getElementById("cric").checked = true;
			}
			if (n[j] == "football") {
				document.getElementById("foot").checked = true;
			}
			if (n[j] == "basketball") {
				document.getElementById("bask").checked = true;
			}
			if (n[j] == "hockey") {
				document.getElementById("hock").checked = true;
			}
		}
		myform.address.value = dataset.item(i).address;
		myform.pincode.value = dataset.item(i).pincode;

		var hobt = dataset.item(i).hobbies;
		var h = hobt.split(",");
		for (var k = 0; k < 6; k++) {
			for (var m = 0; m < h.length - 1; m++) {
				if (myform.hobbies.options[k].value == h[m]) {
					myform.hobbies.options[k].selected = true;
				}
			}
		}

		myform.photo.src = dataset.item(i).image;
		myform.update.disabled = false;
		myform.insert.disabled=true;
		alert("record loaded successfully");
	},
	doBlankField : function() {
		myform.photo.src = "#";
		myform.insert.disabled=false;
		myform.update.disabled=true;
		myform.reset();
	},
	onError : function(tx, error) {
		alert(error.message);
	}
}


//canvas using
	
	
var canvas={
	
}
