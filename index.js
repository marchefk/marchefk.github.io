let toggleNavi = function() {
    if (!$('.navibar').hasClass('hidden')) {
        $('.navibar').addClass('hidden');
    } else {
        $('.navibar').removeClass('hidden');
    }
}

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

$('#toggle-button').on('click', toggleNavi);

$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

$(window).resize(checkWidth);
checkWidth();
