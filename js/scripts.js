$(document).ready(function(){
	console.log('DOM loaded - you can have fun');
});

//var span = $("span");
//span.each(function(index, element) {
//
//	if(index % 2 == 0) {
//		$(element).css('color', 'red');
//	};
//});

$("span:even").css('color', 'red');



