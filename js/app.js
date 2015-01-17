$(document).ready (function() {

/*adds new item to list dynamically*/
$("input[name='newList']").on('keyup',function(e) {
	if(e.keyCode==13) {
	var newListh1 = $.trim($(this).val());
	if (newListh1.length > 0){
		$('.newListName').empty();
		$('.newListName').prepend(newListh1);
		$(this).val('').blur();
	}
else {
      //do nothing
    }
  }
});

/*shows saved lists on hover*/
$('.listNames').on('mouseenter', function () {
	$('.savedLists').fadeIn('normal');
});

/*hides saved lists on mouseleave*/
$('.listNames').on ('mouseleave', function() {
					$('.savedLists').fadeOut('normal');
});

/*adds new list item (with one or more character) on 'enter'*/
$("input[name='addItem']").on('keyup',function(e) {
  if(e.keyCode==13) {
      var newItem = $.trim($(this).val());
      if (newItem.length > 0){
       $('.listItems-unchecked').hide().prepend('<li class="li-box-unchecked"><img src="images/box.png" id="box">' + newItem + '<img src="images/ex.png" id="ex"></li>').fadeIn('normal');
       $(this).val('');
      }
    else {
      //do nothing
    }
  }
});

/*changes empty checkbox to checkmark and changes color*/
$('.listItems-unchecked').on('click', 'img', function() {
		$(this).parent().toggleClass('li-box-checked','li-box-unchecked').hide().prependTo('.listItems-checked').fadeIn('normal');

		 if($(this).attr('src','images/box.png')) {
		 	$(this).attr('src', 'images/check.png');
		 } 			
});

/*changes checkmark to checkbox and changes color back*/
$('.listItems-checked').on('click', 'img', function() {
		$(this).parent().toggleClass('li-box-checked','li-box-unchecked').hide().appendTo('.listItems-unchecked').fadeIn('normal');
		
		if($(this).attr('src','images/check.png')) {
		 	$(this).attr('src', 'images/box.png');
		 }
});

/*deletes item from list*/
$(document).on('click', '#ex', function() {
				$(this).closest('li').remove();			
});

/*deletes all items from list*/
$(document).on('click', '.scratchIt', function(){
    $('.listItems-unchecked').empty();
    $('.listItems-checked').empty();
});


});//document ready/



