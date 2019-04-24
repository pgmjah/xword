$("<div class='test-btn btn-convert-xword' title='Convert this puzzle to a blank puzzle, and print it.'>Convert To Blank Puzzle...</div>").prependTo(document.body).on("click", function()
{
	$("canvas").remove()
	$(".letter").css("display", "none");
	$("a").css("display", "none");
	$(".subst, .subst2, .subst3, .subst4").css("display", "none");//subst classes are showing hints...hide them (went to four just in case...could be more?)
	$(".bigcircle").append("<div class='jah-circle'>");
	//$(".bigshade").removeClass("bigshade");

	var puzTable = $(".PuzTable");
	var clueBox = $(".cluebox").css({margin:"0px 0px 0px 20px", fontSize:"10px"});
	var body = $("body").css("paddingTop", "10px").html("").append([puzTable, clueBox]);

	body.css({display:"flex", background:"none"});
	clueBox.find(".clues").removeClass(".clues").css({fontSize:"10px"})
	puzTable.removeClass("PuzSpace").css({flex:"0 0 auto"});
	puzTable.find("td").css({width:22, height:22});
	puzTable.find(".num").css("fontSize", "8px");
	puzTable.find("td[style]").attr("style", "");

	$(".numclue > div").each(function(idx, el)
	{
		var text = el.innerText;
		text = text.replace(" :", "");
		el.innerText = text; 
	});
	window.print()
});
