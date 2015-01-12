$(document).ready (function() {
///


$("input[type='text']").on('keyup',function(e) {
  	if(e.keyCode==13) {
  		var newItem = $(this).val(); 
  		 $('.listItems-unchecked').prepend('<li class="li-box-unchecked"><input type="checkbox"/>' + newItem + '</li>');
  		 $(this).val('');	

  }		
  });
///

$('.listItems-unchecked').on('change', "input[type='checkbox']", function() {
		$(this).parent().toggleClass('li-box-checked','li-box-unchecked').prependTo('.listItems-checked');
			
});
//3/

$('.listItems-checked').on('change', "input[type='checkbox']", function() {
		$(this).parent().toggleClass('li-box-checked','li-box-unchecked').appendTo('.listItems-unchecked');
});
//4/
		
	




});//document ready/