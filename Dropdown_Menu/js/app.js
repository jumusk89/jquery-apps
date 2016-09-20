//Problem: Menu does not work for small browsers (mobile)
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to menubar
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("menu a").each(function(){
	var $anchor = $(this);
		//Create an option
	var $option = $("<option></option>");
	
	//Deal with selected options depending on currnet pageX
if($anchor.parent().hasclass("selected")){
	$option.prop("selected", true)
};
	
	//Option's value is the href of link
	$option.val($anchor.attr("href"));
	//Option's text is the text of link
	$option.text($anchor.text());
	//Append option to selec
	$select.append($option);
});

		//Create button to click to go to select's location
		//var $button = $("<button>Go</button>");
		//$("#menu").append($button);

//Bind change listener to select	
$select.change(function(){
	//Go to select's location
	window.location = $select.val();
});



//Modify CSS to hide links on small width and show button and select
	//Also hides select and button on larger width and show links
