
var wdw = $(window);
var doc = $(document);

doc.ready(function(){
var blockTitle = $(".blockTitle");
var blockTeam = $(".blockTeam");

    $(".tbBlock")
    .find("button")
    .click(function(){
    	var titleHeight = blockTitle.height();
         $("html").animate({
         	scrollTop: titleHeight
         });
    });

    $(".tdbBlock")
    .find("button")
    .click(function(){
    	var teamHeight = blockTitle.height()
    	 + blockTeam.height();
         $("html").animate({
         	scrollTop: teamHeight
         });
    });
});


