// hide and unhide input box
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});

// input box
$("input[type='text']").on("keypress", function(event2) {
	if (event2.which === 13) { // when enter is pressed after writing something in input box
		var inputText = $(this).val(); // value in input box
		$(this).val(""); // empties the input text after enter is pressed
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputText + "</li>"); // creates a new li and adds to ul
	}
});

// specific toDo is crossed off when clicked on it
$("ul").on("click", "li", function(){ // when a li (existing or added by user) is clicked inside ul
	$(this).toggleClass("cancel"); 
});

// click on X to remove a toDo
$("ul").on("click", "span", function(event1){
	$(this).parent().fadeOut(500, function(){ // fades out the specific li 
		$(this).remove(); // completely removes the li
	});
	event1.stopPropagation(); // stops the event from bubbling up to other elements i.e. it wont continue to any other eventListeners
});



