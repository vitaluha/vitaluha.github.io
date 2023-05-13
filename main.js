function sectionClick(sectionName, buttonName) {
    // var div = document.getElementsByClassName(sectionName);
    var div = $('.' + sectionName),
        button = $('#' + buttonName);
    if (div && div[0]) {
        if (div[0].style.display == "none") {
            $('html, body').animate({
                scrollTop: $(button).offset().top
            }, 350);
            $(div).show().fadeIn();
        } else {
            $('html, body').animate({
                scrollTop: $(button).offset().top
            }, 350);
            $(div).hide("slide", 350);
        }
        // div[0].style.display = div[0].style.display == "none" ? "flex" : "none";
    }
}

function projectClick(link) {
    window.open(link, '_blank', 'noreferrer');
}

function displaySuccess(message, count) {
    var elem = $('.provider-toast.' + count);
    elem.html(message);
    elem.stop().fadeIn(450).delay(2000).fadeOut(450);
    // $('.provider-toast').html(message);
    // $('.provider-toast').stop().fadeIn(450).delay(2000).fadeOut(450);
}