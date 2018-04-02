function GetWheelSlideshowMousePosition(event)
{
	var canvas = document.getElementById("image-bumber-bubbles-widget");
	canvas.dispatchEvent(new CustomEvent( 'position', { 'detail': e } ) );
}

function button_click()
{
	var evt = new Event('reload');
	var canvas = document.getElementById("slideshow-wheel-widget-container");
	var obj = {
		"CenterX": 400, 
		"CenterY": -200, 
		"WheelRadius": 550, 
		"WheelStartTheta": 3.14, 
		"WheelEndTheta": 6.28,
		"IsRounded": true, 
		"GridMode": true, 
		"SubDivisions": 7, 
		"CenterPaddingRadius": 300, 
		"HasLabels": true
	}
	canvas.setAttribute('value', JSON.stringify(obj));
	canvas.dispatchEvent(evt);
}

function loadFullScreen()
{
	var evt = new Event('reload');
	var canvas = document.getElementById("slideshow-wheel-widget-container");
	var height = canvas.height;
	var width = canvas.width;
	myAlert(height + " : " + width);
	var obj = {
		"CenterX": width, 
		"CenterY": height, 
		"WheelRadius": width, 
		"WheelStartTheta": 0, 
		"WheelEndTheta": 3.14 / 2,
		"IsRounded": true, 
		"GridMode": true, 
		"SubDivisions": 7, 
		"CenterPaddingRadius": 500, 
		"HasLabels": true
	}
	canvas.setAttribute('value', JSON.stringify(obj));
	canvas.dispatchEvent(evt);
}