$("<div class='test-btn btn-convert-xword' title='Convert this puzzle to a blank puzzle, and print it.'>Convert To Blank Puzzle...</div>").prependTo(document.body).on("click", function()
{
	$("canvas").remove()
	$(".letter").css("display", "none");
	$("a").css("display", "none");
	$(".subst, .subst2, .subst3, .subst4").css("display", "none");//subst classes are showing hints...hide them (went to four just in case...could be more?)
	$(".bigcircle").append("<div class='jah-circle'>");
	//$(".bigshade").removeClass("bigshade");

	//puzzle grid
	var puzTable = $(".PuzTable");
	puzTable.removeClass("PuzSpace").css({flex:"0 0 auto"});
	puzTable.find("td").css({width:22, height:22});
	puzTable.find(".num").css("fontSize", "8px");
	puzTable.find("td[style]").attr("style", "");

	//puzzle info under grid
	var puzTitle = $("#PuzTitle").text();
	var puzSubTitle = $("#CPHContent_SubTitle").text();
	var puzInfo = puzTitle + (puzSubTitle ? (", " + puzSubTitle) : "");
	var puzInfo = $("<div class='puz-info'>" + puzInfo + "</div>");

	//box to hold grid and info
	var puzBox = $("<div class='puz-box'>").append([puzTable, puzInfo]);

	//clues
	var clueBox = $(".cluebox").css({margin:"0px 0px 0px 20px", fontSize:"10px"});
	clueBox.find(".clues").removeClass(".clues").css({fontSize:"10px"})
	$(".numclue > div").each(function(idx, el)
	{
		var text = el.innerText;
		text = text.replace(" :", "");
		el.innerText = text; 
	});

	//add everything back to body
	var body = $("body").css("paddingTop", "10px").html("").append([puzBox, clueBox]);
	body.css({display:"flex", background:"none"});

	//aaaaaaaaaand...print that mother-fucker!
	window.print()
});

//# sourceURL=xword_worker.js

