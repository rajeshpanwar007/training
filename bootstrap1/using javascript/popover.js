$(document).ready(function(){
	$("#pop1").popover({
		placement:"right",
		content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
		title:"Popover on right",
		trigger:"hover"});
	$("#pop2").popover({
		placement:"top",
		content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
		title:"Popover on top",
		trigger:"focus"});
	$("#pop3").popover({
		placement:"bottom",
		content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
		title:"Popover on bottom",
		trigger:"manual"});
	$("#pop4").popover({
		placement:"left",
		content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
		title:"Popover on left"});
	$("#btn1").click(function(){
		$(this).button('loading');
		$("#pop3").popover('show');
	});
});
