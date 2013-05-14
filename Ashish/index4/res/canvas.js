$(document).ready(
		function() {
			var canvas = document.getElementById("mycanvas");
			var ctx = canvas.getContext("2d");
			
			$("#mycanvas").mouseenter(
					function() {
						sessionStorage.res = "false";

						$("#mycanvas").mousemove(
								function(event) {

									if (sessionStorage.res == "true") {
										var rect = canvas
												.getBoundingClientRect();
										ctx.lineTo(event.clientX - rect.left,
												event.clientY - rect.top);
										ctx.stroke();
									} else if (sessionStorage.res == "false") {
										ctx.beginPath();
									}
								});
					});
			$("#mycanvas").mouseleave(function() {
				ctx.beginPath();

			});
			$("#mycolor").change(function(){
				ctx.strokeStyle = this.value;
			});
			
			$("#mycanvas").click(function() {
				if (sessionStorage.res == "true") {
					sessionStorage.res = "false";
				} else if (sessionStorage.res == "false") {
					sessionStorage.res = "true";
				}
			});
		});
