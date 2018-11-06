$(document).ready(function(e) {
    
	$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
	});
	
	
	
});