chrome.runtime.onInstalled.addListener(function(details)
{
	// chrome.declarativeContent.onPageChanged.removeRules(undefined, function()
	// {
	// 	chrome.declarativeContent.onPageChanged.addRules(
	// 	[
	// 		{
	// 			conditions:
	// 			[
	// 				new chrome.declarativeContent.PageStateMatcher(
	// 				{
	// 					pageUrl: {hostContains:"xwordinfo", schemes:["http", "https"]},
	// 				})
	// 			],
	// 			actions: [new chrome.declarativeContent.ShowPageAction()]
	// 		}
	// 	]);
	// });
});

var dateSelect = document.querySelector(".date-input");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
month = (month <= 9) ? "0" + month : month;
var day = date.getDate();
day = (day <= 9) ? "0" + day : day;
dateSelect.value = year + "-" + month + "-" + day;
//dateSelect.value = "1945-04-01";
var btn = document.querySelector(".btn-convert-xword");
btn.addEventListener("click", function(e)
{
	var arDate = dateSelect.value.split("-");
	var url = "https://www.xwordinfo.com/Crossword?date=" + (arDate[1] + "/" + arDate[2] + "/" + arDate[0]);
	chrome.tabs.update({"url":url});
});

