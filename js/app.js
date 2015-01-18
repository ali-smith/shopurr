$(document).ready (function() {

/*adds new list name dynamically*/
$("input[name='newList']").on('keyup',function(e) {
	if(e.keyCode==13) {
	var newListh1 = $.trim($(this).val());
	if (newListh1.length > 0){
		$('.newListName').empty();
		$('.listItems-unchecked').empty();
    	$('.listItems-checked').empty();
		$('.newListName').prepend(newListh1 + '<span class="scratchList">scratch list</span');
		$('.newListHidden').fadeIn('normal');
		$(this).val('').blur();
	}
else {
      //do nothing
    }
  }
});

/*deletes new list including new list name*/
$('.newListName').on('mouseenter', function() {
	$(this).children().show();
});

$('.newListName').on('mouseenter', function() {
	$(this).children().show();
});

$('.newListName').on('click', '.scratchList', function () {
	$(this).remove();
	$('.listItems-unchecked').empty();
    $('.listItems-checked').empty();
    $('.newListHidden').hide();

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
       $('.listItems-unchecked').hide().prepend('<li class="li-box-unchecked"><span class="box"></span>' + newItem + '<span class="ex"></span></li>').fadeIn('normal');
       $(this).val('');
      }
    else {
      //do nothing
    }
  }
});

/*changes empty checkbox to checkmark and changes color*/
$('.listItems-unchecked').on('click', '.box', function() {
		$(this).parent().removeClass('li-box-unchecked').addClass('li-box-checked').hide().prependTo('.listItems-checked').fadeIn('normal');
		$(this).removeClass('box').addClass('check');		 
});

/*changes checkmark to checkbox and changes color back*/
$('.listItems-checked').on('click', '.check', function() {
		$(this).parent().removeClass('li-box-checked').addClass('li-box-unchecked').hide().appendTo('.listItems-unchecked').fadeIn('normal');
		$(this).removeClass('check').addClass('box');
});

/*deletes item from list*/
$(document).on('click', '.ex', function() {
				$(this).closest('li').remove();			
});

/*deletes all items from list*/
$(document).on('click', '.scratchItems', function(){
    $('.listItems-unchecked').empty();
    $('.listItems-checked').empty();
});


});//document ready/



