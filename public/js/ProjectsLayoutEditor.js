const minCanvasHeight = 400;
const minCanvasWidth = 600;
const heightPercentage = 80;

function AdjustCanvasSize()
{
	var canvas = document.getElementById("image-bumber-bubbles-widget");
	
	// Set Width
	if(window.innerWidth > canvas.width)
	{
		canvas.width = window.innerWidth;
	}
	
	// Set Height
	if (window.innerHeight * (heightPercentage/100.0) > canvas.height)
	{
		canvas.height = window.innerHeight * (heightPercentage/100.0);
	}
}

function LayoutResize()
{
	AdjustCanvasSize();
}

(function InitializeProjectsLayout()
{
	// Initialize Canvas Size
	var canvas = document.getElementById("image-bumber-bubbles-widget");
	if(window.innerWidth > minCanvasWidth)
	{
		canvas.width = window.innerWidth;
	}
	else
	{
		canvas.width = minCanvasWidth;
	}
	if(window.innerHeight * (heightPercentage/100.0) > minCanvasHeight)
	{
		canvas.height = window.innerHeight * (heightPercentage/100.0);
	}
	else
	{
		canvas.height = minCanvasHeight;
	}
	
	// Add window event listener to listen for resize event.
	window.addEventListener('resize', function(event){
		LayoutResize();
	});
}())