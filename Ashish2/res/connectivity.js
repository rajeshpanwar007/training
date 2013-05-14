var datahandle = {
	maxrow : null,
	row : null,
	db : null,
	loadDB : function() {
		var shortName = 'mydb';
		var version = '3';
		var displayName = 'user info';
		var maxSize = 85536;
		console.log("Hello");
		datahandle.db = openDatabase(shortName, version, displayName, maxSize);
		captcha.setimage();

	},
	display1 : function() {
		datahandle.getrow();
		var mrow = datahandle.maxrow;
		mrow--;
		mrow++;
		var str = "";
		str = str + "<html><body><table border=1>";
		str = str + "<tr>";
		try {
			if (window.openDatabase) {
				datahandle.db
						.transaction(function(tx) {
							tx
									.executeSql(
											"SELECT * FROM peopleinfo",
											[],
											function(tx, result) {
												str = "<html><body><table class='table table-striped'><thead>";
												str = str
														+ "<tr><th>First Name</th><th>Last Name</th>";
												str = str
														+ "<th>Address</th><th>Pin Code</th><th>Mobile(Primary Key)</th>";
												str = str
														+ "<th>Gender</th><th>DOB</th><th>Hobby 1</th><th>Hobby 2</th>";
												str = str
														+ "<th>Email</th><th>Cricket</th><th>Football</th><th>BasketBall</th>";
												str = str
														+ "<th>BaseBall</th><th>Image</th><th colspan='2'>Operations</th></tr></thead><tbody>";
												for (row = 0; row <= mrow; row++) {
													str = str + "<tr><td >";
													str = str
															+ result.rows
																	.item(row)["fname"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["lname"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["address"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["pin"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["mobile"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["gender"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["dob"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["hobby1"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["hobby2"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["email"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["cricket"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["football"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["basketball"];
													str = str + "</td>";
													str = str + "<td>";
													str = str
															+ result.rows
																	.item(row)["baseball"];
													str = str + "</td>";
													str = str + "<td>";
													var image = result.rows
															.item(row)["image"];
													str = str
															+ "<img height=50 width=50 src="
															+ image + "/>";
													str = str + "</td>";
													str = str
															+ "<td style='cursor: pointer;'>";
													str = str
															+ "<a onclick=datahandle.deleteit("
															+ result.rows
																	.item(row)["mobile"]
															+ ")>Delete</a>";
													str = str + "</td>";
													str = str
															+ "<td style='cursor: pointer;'>";
													str = str
															+ "<a onclick=datahandle.updateit("
															+ result.rows
																	.item(row)["mobile"]
															+ ")>Edit</a>";
													str = str + "</td>";
													str = str + "</tr>";
												}
												str = str
														+ "</tbody></table></body></html>";
												document
														.getElementById("mydiv").innerHTML = str;
											}, function(tx, error) {
												// error occured
										});
						});
			}
		} catch (e) {
			alert(e);
		}
	},

	display : function(x) {
		frminput.txtmobile.disabled = true;
		if (x.name == "btnfirst") {
			datahandle.row = 0;
			row = 0;
		} else if (x.name == "btnlast") {
			datahandle.getrow();
			row = datahandle.maxrow;
			datahandle.row = row;
			row = ++row;
			row = --row;

		} else if (x.name == "btnpre") {
			row = datahandle.row;
			if (row == 0) {
				datahandle.getrow();
				row = datahandle.maxrow;
				datahandle.row = row;
				row++;
				row--;
			} else {
				row--;
				datahandle.row = row;
			}
		} else if (x.name == "btnnext") {
			row = datahandle.row;
			datahandle.getrow();
			mrow = datahandle.maxrow;
			if (row == mrow) {
				row = 0;
				datahandle.row = 0;
			} else {
				row++;
				datahandle.row = row;
			}
		}

		try {
			if (window.openDatabase) {
				datahandle.db.transaction(function(tx) {
					tx.executeSql("SELECT * FROM peopleinfo", [], function(tx,
							result) {
						var f = document.frminput;
						f.txtfname.value = result.rows.item(row)["fname"];
						f.txtlname.value = result.rows.item(row)["lname"];
						f.txtaddress.value = result.rows.item(row)["address"];
						f.txtpin.value = result.rows.item(row)["pin"];
						f.txtmobile.value = result.rows.item(row)["mobile"];
						var g = result.rows.item(row)["gender"];
						if (g == "m") {
							var m = document.getElementById("male");
							m.checked = true;
						} else {
							var fe = document.getElementById("female");
							fe.checked = true;
						}
						f.dob.value = result.rows.item(row)["dob"];
						f.email.value = result.rows.item(row)["email"];
						var h1 = result.rows.item(row)["hobby1"];
						var h2 = result.rows.item(row)["hobby2"];
						var image = "#";
						image = result.rows.item(row)["image"];
						f.image.src = image;
						for (i = 0; i < 6; i++) {
							f.selhobbies.options[i].selected = false;
						}
						for (i = 0; i < 6; i++) {
							if (f.selhobbies.options[i].text == h1) {
								f.selhobbies.options[i].selected = true;
							} else if (f.selhobbies.options[i].text == h2) {
								f.selhobbies.options[i].selected = true;
							}
						}
						for (i = 0; i < 4; i++) {
							f.chkbox[i].checked = false;
						}
						if (result.rows.item(row)["cricket"] == "true") {
							f.chkbox[0].checked = true;
						}
						if (result.rows.item(row)["football"] == "true") {
							f.chkbox[1].checked = true;
						}
						if (result.rows.item(row)["basketball"] == "true") {
							f.chkbox[2].checked = true;
						}
						if (result.rows.item(row)["baseball"] == "true") {
							f.chkbox[3].checked = true;
						}
					}, function(tx, error) {
						// error occured
						});
				});
			}
		} catch (e) {
			alert(e);
		}
	},

	savedata : function() {

		var x = document.getElementById("frminput");
		var txt = x.txtcaptcha.value;
		if (captcha.checkcaptcha(txt)) {
			x.btnreset.disabled = false;
			x.btnfirst.disabled = false;
			x.btnpre.disabled = false;
			x.btnlast.disabled = false;
			x.btnnext.disabled = false;
			x.btnshow.disabled = false;
			try {
				if (window.openDatabase) {
					var shortName = 'mydb';
					var version = '3';
					var displayName = 'user info';
					var maxSize = 65536;
					datahandle.db = openDatabase(shortName, version,
							displayName, maxSize);
					/*
					 * var sql = 'drop table peopleinfo'; executeQuery(sql);
					 */
					var sql = 'CREATE TABLE if not exists peopleinfo(fname text,lname text,address text,pin integer,mobile text primary key,gender text,dob numeric,email text,cricket text, football text, basketball text,baseball text,hobby1 text,hobby2 text,image blob)';
					console.log(sql);
					/*
					 * datahandle.db.transaction ( function(transaction) {
					 * transaction.executeSql(sql,[],function(transaction,result){alert("hello2")},function(transaction,result){alert("hello1")}) } );
					 */
					datahandle.executeQuery(sql);

					var g = "0";
					if (document.getElementById("male").checked == true) {
						g = "m";
					} else if (document.getElementById("female").checked == true) {
						g = "f";
					}
					var h = new Array();
					var j = 0;
					for (i = 0; i < 6; i++) {
						if (x.selhobbies.options[i].selected) {
							h[j] = x.selhobbies.options[i].text;
							j++;
						}
					}
					var play = new Array();
					j = 0;
					for (i = 0; i < 4; i++, j++) {
						if (x.chkbox[i].checked) {
							play[j] = true;
						} else {
							play[j] = false;
						}
					}
					var input = document.getElementById("file");
					var i = document.getElementById("image");
					var imgurl = i.src;
					// var blob = new Blob([imgurl], { type: "text/plain" });
					imgurl = imgurl.substring(0, imgurl.length - 2)
					sql = 'insert into peopleinfo VALUES ("' + x.txtfname.value
							+ '","' + x.txtlname.value + '","'
							+ x.txtaddress.value + '",' + x.txtpin.value + ','
							+ x.txtmobile.value + ',"' + g + '","'
							+ x.dob.value + '","' + x.email.value + '","'
							+ play[0] + '","' + play[1] + '","' + play[2]
							+ '","' + play[3] + '","' + h[0] + '","' + h[1]
							+ '","' + imgurl + '")';
					console.log(sql);
					datahandle.executeQuery(sql, function(results) {
					});
					formclass.resetit();
				}
			} catch (e) {
				alert(e + " Mobile number must be different");
			}
		}
	},

	updateit : function(m) {
		try {
			captcha.setimage();
			var f = document.frminput;
			f.btnreset.disabled = true;
			f.btnfirst.disabled = true;
			f.btnpre.disabled = true;
			f.btnlast.disabled = true;
			f.btnnext.disabled = true;
			f.btnshow.disabled = true;
			if (window.openDatabase) {
				datahandle.db.transaction(function(tx) {
					tx.executeSql("SELECT * FROM peopleinfo where mobile = '"
							+ m + "'", [], function(tx, result) {
						var row = 0;
						f.txtfname.value = result.rows.item(row)["fname"];
						f.txtlname.value = result.rows.item(row)["lname"];
						f.txtaddress.value = result.rows.item(row)["address"];
						f.txtpin.value = result.rows.item(row)["pin"];
						f.txtmobile.value = result.rows.item(row)["mobile"];
						var g = result.rows.item(row)["gender"];
						if (g == "m") {
							var m = document.getElementById("male");
							m.checked = true;
						} else {
							var fe = document.getElementById("female");
							fe.checked = true;
						}
						f.dob.value = result.rows.item(row)["dob"];
						f.email.value = result.rows.item(row)["email"];
						var h1 = result.rows.item(row)["hobby1"];
						var h2 = result.rows.item(row)["hobby2"];
						var image = "#";
						image = result.rows.item(row)["image"];
						f.image.src = image;
						for (i = 0; i < 6; i++) {
							f.selhobbies.options[i].selected = false;
						}
						for (i = 0; i < 6; i++) {
							if (f.selhobbies.options[i].text == h1) {
								f.selhobbies.options[i].selected = true;
							} else if (f.selhobbies.options[i].text == h2) {
								f.selhobbies.options[i].selected = true;
							}
						}
						for (i = 0; i < 4; i++) {
							f.chkbox[i].checked = false;
						}
						if (result.rows.item(row)["cricket"] == "true") {
							f.chkbox[0].checked = true;
						}
						if (result.rows.item(row)["football"] == "true") {
							f.chkbox[1].checked = true;
						}
						if (result.rows.item(row)["basketball"] == "true") {
							f.chkbox[2].checked = true;
						}
						if (result.rows.item(row)["baseball"] == "true") {
							f.chkbox[3].checked = true;
						}

					}, function(tx, error) {
						// error occured
						});
				});
			}
			var sql = "delete from peopleinfo where mobile = '" + m + "'";
			datahandle.executeQuery(sql);
		} catch (e) {
			alert(e);
		}
	},

	executeQuery : function($query, callback) {
		try {
			if (window.openDatabase) {
				datahandle.db.transaction(function(tx) {
					tx.executeSql($query, [], function(tx, result) {
						if (typeof (callback) == "function") {
							callback(result);
						} else {
							if (callback != undefined) {
								eval(callback + "(result)");
							}
						}
					}, function(tx, error) {
					});
				});
				return rslt;
			}
		} catch (e) {
		}
	},

	getrow : function() {
		try {
			if (window.openDatabase) {
				datahandle.db.transaction(function(tx) {
					tx.executeSql("SELECT count(*) FROM peopleinfo", [],
							function(tx, result) {
								mrow = result.rows.item(0)["count(*)"];
								mrow = mrow - 1;
								datahandle.maxrow = mrow;
							}, function(tx, error) {
								// error occured
						});
				});
			}
		} catch (e) {
		}
	},

	deleteit : function(m) {
		try {
			if (window.openDatabase) {
				var shortName = 'mydb';
				var version = '3';
				var displayName = 'user info';
				var maxSize = 65536;
				datahandle.db = openDatabase(shortName, version, displayName,
						maxSize);
				var sql = 'delete from peopleinfo where mobile = "' + m + '"';
				datahandle.executeQuery(sql);
				formclass.resetit();
				datahandle.display1();
			}
		} catch (e) {
			alert(e + " Unable to delete");
		}
	}
}
