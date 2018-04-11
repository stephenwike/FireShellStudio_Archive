/*----------------------------
* FIELDS
*---------------------------*/
var WindowWidth;
var WindowHeight;
var MainContentHeight;
var LeftPanelTop;
var LeftPanelWidth;
var RightPanelHeight;
const LeftPanelMinWidth = 340;
const NormalRightContentWidth = 600;

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
	// Get Reference To Panels
	var MainContent = GetMainContent();
	var LeftContent = GetLeftMainContentPanel();
	var RightContent = GetRightMainContentPanel();
	
	// Get Width of Main Content and Right Content
	var MainContentWidth = MainContent.offsetWidth;
	var RightContentWidth = RightContent.offsetWidth;
	
	// Find if Main Content is less than Left Content Min plus Normal Right Content
	if(MainContentWidth < LeftPanelMinWidth + NormalRightContentWidth)
	{
		RightContent.style.width = MainContentWidth + "px";
		RightContent.style.height = MainContentWidth/2 + "px";
		RightContent.className = "";
		RightPanelChangeToFullWidth();
		
		LeftContent.style.width = MainContentWidth + "px";
	}
	else
	{
		RightContent.style.width = NormalRightContentWidth + "px";
		RightContent.style.height = NormalRightContentWidth + "px";
		RightContent.className = "fixedBtm";
		RightPanelChangeToNormalWidth();
		
		var diff = MainContentWidth - NormalRightContentWidth;
		myAlert("Here" + diff);
		LeftContent.style.width = diff + "px";
		myAlert(LeftContent.style.width);
	}
	
	//// Get Main Content and Panels
	//var MainContent = GetMainContent();
	//var RightMainContentPanel = GetRightMainContentPanel();
	//var LeftMainContentPanel = GetLeftMainContentPanel();
	//
	//// Get Main Content and Window Height
	//MainContentHeight = MainContent.clientHeight;
	//WindowWidth = window.innerWidth;
	//
	//// Determine Panel Dimensions
	//var AcceptedWidth = WindowWidth - RightPanelMinWidth;
	//if(AcceptedWidth >= MainContentHeight)
	//{
	//	RightPanelHeight = MainContentHeight;
	//	RightPanelWidth = MainContentHeight;
	//	LeftPanelWidth = WindowWidth - MainContentHeight;
	//	LeftPanelTop = 0;
	//	loadFullScreen();
	//}
	//else
	//{
	//	RightPanelHeight = WindowWidth / 2;
	//	RightPanelWidth = WindowWidth;
	//	LeftPanelWidth = WindowWidth;
	//	LeftPanelTop = RightPanelHeight;
	//}
	//
	//// Set Right Panel Dimensions
	//RightMainContentPanel.style.width = RightPanelWidth + "px";
	//RightMainContentPanel.style.height = RightPanelHeight + "px";
	//
	//// Set Left Panel Dimensions
	//LeftMainContentPanel.style.width = LeftPanelWidth + "px";
	//LeftMainContentPanel.style.top = LeftPanelTop + "px";
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
window.onload = function(event) { LayoutResize() };
window.onresize = function(event) { LayoutResize() };
