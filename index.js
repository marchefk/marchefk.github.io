let toggleNavi = function() {
    if ($('.navibar').hasClass('hidden')) {
        $('.navibar').removeClass('hidden');
    } else {
        $('.navibar').addClass('hidden');
    }
}

$('#toggle-button').on('click', toggleNavi);

let checkWidth = function() {
    if ($(window).width() >= 700) {
        $('.navibar').removeClass('hidden');
        let homebottom = 1 / 2 * ($('#home').offset().top + $('#home').height());
        $(window).on('scroll', function() {
            // we round here to reduce a little workload
            let stop = Math.round($(window).scrollTop());
            if (stop > homebottom) {
                if (!$('.navibar').hasClass('navi-scroll')) {
                    $('.navibar').addClass('navi-scroll');
                }
            } else {
                $('.navibar').removeClass('navi-scroll');
            }
        });
    }
    if ($(window).width() < 700) {
        $('.navi-elem').on('click', toggleNavi);
    }
}

$(window).resize(checkWidth);
checkWidth();
