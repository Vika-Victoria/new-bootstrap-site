$(function() {

	function initSize() {
        $(".box-menu .panel-heading").each(function () {
            var ph = $(this).height() + 3;
            var pdb = $(this).find(".dropdown-toggle");
            pdb.height(ph);
        });

        $(".till-item .tc").each(function () {
            var parh = $(this).parent().height();
            $(this).height(parh);
        });
    }
    initSize();

	$(window).resize(function () {
		initSize();
    });


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}

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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
