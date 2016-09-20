//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

	// An image
	$overlay.append($image);
		// A caption
	$overlay.append($caption);
// Add overlay
$("body").append($overlay);
	
//1 Capture the click event on a link to an image$
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var link = $(this).attr("href");
	//1.2 Update overlay with the image linked in the link
	$image.attr("src", link)
	
	//1.1 Show the overlay.
		$overlay.show();

	//1.3 Get child alt attribute and set as caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

//3 When overaly is clicked 
$overlay.click(function(){
	$overlay.hide();
});
	//3.1 Hide overlay
