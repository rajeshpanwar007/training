$(document).ready(function() {
	$("#myModal").on("show",function(){
		alert("show event occurred");
	});
	$("#launch").click(function(){
		$("#myModal").modal('toggle');
	});
	
});

