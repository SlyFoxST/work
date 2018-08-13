$(function() {


 $(".toggle_mnu").click(function(){
 	$(this).toggleClass("on");
 });
 $(".btn").click(function(){
 	$(".menu").toggleClass("show");
 });


$('.section_5').waypoint(function(){
$(".ts-item").each(function(index){
	setTimeout(function(){
var svgAnimation = new DrawFillSVG({
	elementId: "svg" + index
});
},100*index);
});
this.destroy();
},{offset: '40%'});


 $('.section_4 h3').waypoint(function(){
   
 	$('.section_4 .card').removeClass('card-on').addClass('card-on');
       },{offset: "5%"});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

$(".owlCarousel").owlCarousel({
	items: 3,
});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
