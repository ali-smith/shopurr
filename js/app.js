$(document).ready (function() {

//adds new list name dynamically
$("input[id='newListInput']").on('keyup',function(e) {
	event.preventDefault();
	if(e.keyCode==13) {
	var listName = $.trim($(this).val());
	if (listName.length > 0){
		// $.trim($(this).val());
		$(this).val('').blur();
		$('#newListInput').hide();
		$('.scratchList').fadeIn();
		$('.listName').html(listName);
		$('.listNameWrapper').fadeIn();
		$('.listWrapper').fadeIn();
		
	}
else {
      //do nothing
    }
  }
});

//adds new list item (with one or more character) on 'enter'
$("input[id='newItem']").on('keyup',function(e) {
	event.preventDefault();
  if(e.keyCode==13) {
      var newItem = $.trim($(this).val());
      if (newItem.length > 0){
      $('.scratchItems').fadeIn();
       $('.listItems').prepend('<li><i class="fa fa-square-o"></i><i class="hidden fa fa-check-square-o"></i><p>' + newItem + '</p><i class="fa fa-times"></i></li>').fadeIn('normal');
       $(this).val('');
      }
    else {
      //do nothing
    }
  }
});

// checked items move to bottom of list
$('.listItems').on('click', '.fa-square-o', function(event) {
	event.preventDefault();
	$(this).hide();
	$(this).siblings('.fa-check-square-o').show();
	$(this).parent().addClass('gray');
	$(this).parent().hide().appendTo('.listItems').fadeIn('slow');
});

//unchecked items move to top of list
$('.listItems').on('click', '.fa-check-square-o', function(event) {
	event.preventDefault();
	$(this).hide();
	$(this).siblings('.fa-square-o').show();
	$(this).parent().removeClass('gray');
	$(this).parent().hide().prependTo('.listItems').fadeIn('slow');
});

//removes item from list
$('.listItems').on('click', '.fa-times', function(event) {
	event.preventDefault();
	$(this).parent().fadeOut();
});

//removes entire list
$('.scratchList').on('click', function(event) {
	event.preventDefault();
	$(this).parent().fadeOut();
	$('.listWrapper').fadeOut();
	$('.listItems').empty();
	$('#newListInput').delay(500).fadeIn();
});

//logo click starts over
$('.shopurr').on('click', function(event) {
	event.preventDefault();
	$('.listNameWrapper').fadeOut();
	$('.listWrapper').fadeOut();
	$('.listItems').empty();
	$('#newListInput').delay(500).fadeIn();
});

//removes all list items
$('.listWrapper').on('click', '.scratchItems', function(event) {
	event.preventDefault();
	$('.listItems').empty();
	$(this).fadeOut(500);
	$('#newItem').focus();
});

});//document ready



