# Tiny Rick

## Easily add a Tiny Rick to your website


### Instructions:

In your HTML file, include both the jQuery library and the tiny_rick.js file.


```html
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
	<script src="Tiny_Rick_Plugin/tiny_rick.js" type="text/javascript"></script>
```

In your local script, run ``` includeTinyRick(); ``` as soon
as the page loads. Optionally, pass in 'bubble' as an argument to
display Tiny Rick with a speech bubble. Wherever you want to implement the popup, run ``` tinyRickPopup(); ```.


```html
	<script>
	$(document).ready(function() {
		// For speech-bubble Rick:
		// includeTinyRick('bubble');
		includeTinyRick();
		// Set up your event listener to run tinyRickPopup();
		$("#tinyrick-button").on("click", function() {
			tinyRickPopup();
		});
		// Provided event listener that pops up Tiny Rick
		// when a button is clicked if it has the 'tinyrick-button' ID.
	});
	</script>
```

Tiny Rick that is rendered by ```javascript includeTinyRick(); ```
<img src="tiny_rick.gif" width="200px" height="180px" />





