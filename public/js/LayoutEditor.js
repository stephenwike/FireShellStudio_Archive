/*----------------------------
* FIELDS
*---------------------------*/
var WindowWidth;
var WindowHeight;
var MainContentHeight;
var LeftPanelTop;
var LeftPanelWidth;
var RightPanelHeight;
var RightPanelWidth;
const RightPanelMinWidth = 350;

/*----------------------------
* PROPERTIES
*---------------------------*/

function GetHeader()
{
	return document.getElementById("Header");
}
function GetMainContent()
{
	return document.getElementById("MainContent");
}
function GetLeftMainContentPanel()
{
	return document.getElementById("LeftMainContentPanel");
}

function GetRightMainContentPanel()
{
	return document.getElementById("RightMainContentPanel");
}

/*----------------------------
* METHODS
*---------------------------*/

function LayoutResize()
{
	// Get Main Content and Panels
	var MainContent = GetMainContent();
	var RightMainContentPanel = GetRightMainContentPanel();
	var LeftMainContentPanel = GetLeftMainContentPanel();
	
	// Get Main Content and Window Height
	MainContentHeight = MainContent.clientHeight;
	WindowWidth = window.innerWidth;
		
	// Determine Panel Dimensions
	var AcceptedWidth = WindowWidth - RightPanelMinWidth;
	if(AcceptedWidth >= MainContentHeight)
	{
		RightPanelHeight = MainContentHeight;
		RightPanelWidth = MainContentHeight;
		LeftPanelWidth = WindowWidth - MainContentHeight;
		LeftPanelTop = 0;
	}
	else
	{
		RightPanelHeight = WindowWidth / 2;
		RightPanelWidth = WindowWidth;
		LeftPanelWidth = WindowWidth;
		LeftPanelTop = RightPanelHeight;
	}
	
	// Set Right Panel Dimensions
	RightMainContentPanel.style.width = RightPanelWidth + "px";
	RightMainContentPanel.style.height = RightPanelHeight + "px";
	
	// Set Left Panel Dimensions
	LeftMainContentPanel.style.width = LeftPanelWidth + "px";
	LeftMainContentPanel.style.top = LeftPanelTop + "px";
}

function DropMenu() {
    var x = document.getElementById("NavigationBar");
	alert(x.className);
    if (x.className === "NavBar") {
        x.className += " responsive";
    } else {
        x.className = "NavBar";
    }
}

/*----------------------------
* EVENTS
*---------------------------*/
window.onload = LayoutResize();
window.onresize = LayoutResize();
