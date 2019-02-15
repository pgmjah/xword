
$("<div class='test-btn btn-convert-xword' title='Convert this puzzle to a blank puzzle, and print it.'>Convert To Blank Puzzle...</div>").prependTo(document.body).on("click", function()
{
	$(".letter").css("display", "none");
	$("a").css("display", "none");
	$(".subst").css("display", "none");
	$(".bigcircle").css({"backgroundPosition":"center", "backgroundSize":"90%"});

	var puzTable = $(".PuzTable");
	var clueBox = $(".cluebox").css({margin:"0px 0px 0px 20px", fontSize:"10px"});
	var body = $("body").css("paddingTop", "10px").html("").append([puzTable, clueBox]);

	body.css({display:"flex", background:"none"});
	clueBox.find(".clues").removeClass(".clues").css({fontSize:"10px"})
	puzTable.removeClass("PuzSpace").css({flex:"0 0 auto"});
	puzTable.find("td").css({width:22, height:22});
	puzTable.find(".num").css("fontSize", "8px");

	$(".numclue > div").each(function(idx, el)
	{
		var text = el.innerText;
		text = text.replace(" :", "");
		el.innerText = text; 
	});
	window.print()
});
