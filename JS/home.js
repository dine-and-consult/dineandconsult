$(window).scroll(function () {
    winHeight = $(window).height();
    if ($(window).scrollTop() > winHeight) {
        $(".navbar").css("display","block");
        $(".navbar").css("background-color","red");
        $("#section2").css("top","-6.35%"); 
    }
});

$(".fact-buble").hover(
	function(){
		$(this).css("height","250px");
		$(this).css("width","250px");
		$(this).css("background-color","black");
		$(this).css("color","white");
		$(this).css("font-size","1.3em");
		$(this).css("padding-top","2.5%");

	},
	function(){
		$(this).css("height","200px");
		$(this).css("width","200px");
		$(this).css("background-color","transparent");
		$(this).css("color","black");
		$(this).css("font-size","1em");
		$(this).css("padding-top","1.5%");
	}
)
