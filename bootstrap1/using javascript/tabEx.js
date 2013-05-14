$(document).ready(function(){
	$("#mybtn4").click(function(){
		$('#mytab a:last').tab('show');
	});
	$("#mybtn1").click(function(){
		$("#mytab a:first").tab('show');
	});
	$("#mybtn2").click(function(){
		$("#mytab a:eq(1)").tab('show');
	});
});
