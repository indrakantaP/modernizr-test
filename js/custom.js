$(window).on('resize',function() {
    var headerH = $('.header').outerHeight();
    $('.banner').css('padding-top', headerH + 'px');
}).trigger('resize');
