$(document).ready(function() {
	$('.carousel').carousel({
		//interval : 1000
	});
	$("#myCarousel").slide(function(){
		alert("slide event has been occured");
	})
});

function myFunction(){
	alert("slide event has been occured");
}
