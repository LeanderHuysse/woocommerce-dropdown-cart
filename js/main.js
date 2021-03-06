jQuery(function($) {
    $("body").on("click", ".dropdown-cart-button .dropdown-total", function($e) {
        var $button = $(this).parent();
        var $popup = $(".dropdown", $button);
        if (!$popup.is(":visible")) {
            $popup.removeClass("drop-left").removeClass("drop-bottom");
            $popup.show();
            var $width = $popup.width();
            var $height = $popup.height();
            var $button_offset = $button.get(0).getBoundingClientRect();
            $popup.hide();
            var $left = $button_offset.right - $width;
            var $right = $(window).width() - ($button_offset.left + $width);
            var $top = $button_offset.bottom - $height;
            var $bottom = $(window).height() - ($button_offset.bottom + $height);
            if ($left < 10 && $right > 0) {
                $popup.addClass("drop-left")
            }
            if ($bottom < 10 && $top > 0) {
                $popup.addClass("drop-bottom")
            }
            $popup.slideDown()
        } else {
            $popup.slideUp()
        }
        return false
    });
    $("body").on("added_to_cart", function(ev, response, hash) {
        var counter = $("body").find(".dropdown-total").find("span");
        var counterNumber = counter.text();
        var newCount = Number(counterNumber) + 1;
        $("body").find(".dropdown-total").find("span").text(newCount)
    });
    $("body").on("click", ".dropdown-cart-button", function($e) {
        $e.stopPropagation()
    });
    $(document).on("click", function() {
        $(".dropdown-cart-button .dropdown").hide()
    })
});