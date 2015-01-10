$(document).ready (function() {

// $('input').on('click',function() {
// 	$(this).removeAttr('placeholder');
// });

$("input[type='text']").on('keydown',function(e) {
  	if(e.keyCode==13) {
  		var newItem = $(this).val(); 
  		 $('.listItems-unchecked').prepend('<li class="li-box-unchecked"><input type="checkbox"/>' + newItem + '</li>');
  }
  });


$('.listItems-unchecked').on('change', "input[type='checkbox']", function() {
		$(this).parent().toggleClass('li-box-checked','li-box-unchecked').prependTo('.listItems-checked');

			
})

$('.listItems-checked').on('change', "input[type='checkbox']", function() {
		$(this).parent().toggleClass('li-box-checked','li-box-unchecked').appendTo('.listItems-unchecked');

});

// --OR-- maybe it's just a matter of changing classes from unchecked to checked like in ana's fucking code:
// $("li > i").first().on("click", function(){
// 			if($(this).hasClass("fa-square-o")) {
// 				$(this).parent().removeClass("active-item").addClass("completed-item");
// 				$(this).removeClass("fa-square-o").addClass("fa-check-square-o");
// 			} else {
// 				$(this).parent().removeClass("completed-item").addClass("active-item");
// 				$(this).removeClass("fa-check-square-o").addClass("fa-square-o");
// 			}
// 		});		
	




});//document ready