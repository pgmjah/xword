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

var btn = document.querySelector(".btn-convert-xword");
btn.addEventListener("click", function(e)
{
	var date = new Date();
	var url = "https://www.xwordinfo.com/Crossword?date=" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
	chrome.tabs.update({"url":url});
});