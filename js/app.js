$(document).ready (function() {

$('input').keydown(function(e) {
  	if(e.keyCode==13) {
  		var newItem = $(this).val(); 
  		 $('.uncheckedList').prepend('<li class="li-box"><input type="checkbox'/>' + newItem '</li>');
  }
  });

$('input').click(function() {
	$(this).removeAttr('placeholder');
});


});//document ready