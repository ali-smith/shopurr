$(document).ready (function() {

// $('input').on('click',function() {
// 	$(this).removeAttr('placeholder');
// });

$("input[type='text']").on('keydown',function(e) {
  	if(e.keyCode==13) {
  		var newItem = $(this).val(); 
  		 $('.listItems').prepend('<li class="li-box"><input type="checkbox"/>' + newItem + '</li>');
  }
  });

$('.listItems').on('click', "input[type='checkbox']", function() {
		$(this).parent().remove();
});		
	




});//document ready