$(document)
		.ready(
				function() {
					$(".field").focus(function() {
						$(this).css("background-color", "#cccccc");
					});

					$(".field").blur(function() {
						$(this).css("background-color", "#ffffff");
					});

					$("#btnsubmit")
							.click(
									function() {
										var t = document.frminput;
										var r = 0;
										if ((t.txtfname.value == "")
												|| (t.txtfname.value == null)) {
											r++;
											$("#txtfname")
													.css("background-color",
															"#FFFF00")
													.attr("title",
															"Required Field, cannot be left blank");
										}
										var check = new RegExp("Enter");
										if ((t.txtaddress.value == "")
												|| (t.txtaddress.value == null)
												|| check
														.test(document.frminput.txtaddress.value)) {
											r++;
											$("#txtaddress")
													.css("background-color",
															"#FFFF00")
													.attr("title",
															"Required Field, cannot be left blank");
										}
										if ((t.txtpin.value == "")
												|| (t.txtpin.value == null)) {
											r++;
											$("#txtpin")
													.css("background-color",
															"#FFFF00")
													.attr("title",
															"Required Field, cannot be left blank");
										}
										if ((t.txtmobile.value == "")
												|| (t.txtmobile.value == null)) {
											r++;
											$("#txtmobile")
													.css("background-color",
															"#FFFF00")
													.attr("title",
															"Required Field, cannot be left blank");
										}

										if ((t.dob.value == "")
												|| (t.dob.value == null)) {
											r++;
											$("#dob")
													.css("background-color",
															"#FFFF00")
													.attr("title",
															"Required Field, cannot be left blank");
										}
										if ((t.email.value == "")
												|| (t.email.value == null)) {
											r++;
											$("#email")
													.css("background-color",
															"#FFFF00")
													.attr("title",
															"Required Field, cannot be left blank");
										}
										if ((t.txtcaptcha.value == "")
												|| (t.txtcaptcha.value == null)) {
											r++;
											$("#txtcaptcha")
													.css("background-color",
															"#FFFF00")
													.attr("title",
															"Required Field, cannot be left blank");
										}
										if (r == 0) {
											datahandle.savedata();
										}

									});
					$("#btnreset").click(
							function() {

								$("#txtfname").css("background-color", "")
										.attr("title", "");

								$("#txtaddress").css("background-color", "")
										.attr("title", "");

								$("#txtpin").css("background-color", "").attr(
										"title", "");

								$("#txtmobile").css("background-color", "")
										.attr("title", "");

								$("#dob").css("background-color", "").attr(
										"title", "");

								$("#email").css("background-color", "").attr(
										"title", "");
								
								$("#txtcaptcha").css("background-color", "").attr(
										"title", "");

							});
				});