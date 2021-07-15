//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader



// start hamburger menu

class Hambeger {
    hambergerMethod(data) {
        $(data.navigationEle).slideUp(data.speed);
        $(data.hamberBtn).on(data.eventName, () => {
            $(data.circle).toggleClass(data.toggleClsName);
            $(data.navigationEle).slideToggle(data.speed);
        });
    }
}

// start smooth scroll
class SmoothScroll {
    scrolllMethod(scrlData) {
        $(scrlData.a).on(scrlData.eventName, (e) => {
            e.preventDefault();
            const sectionId = $(e.target).attr('href');
            $("html,body").animate({
                scrollTop: $(sectionId).offset().top
            }, 600);
        });
    }
}
// end smooth scroll


// dom content is loaded
$(() => {
    // hambeger menu
    const hambegerCls = new Hambeger;
    hambegerCls.hambergerMethod({
        navigationEle: '.navigationComp nav',
        hamberBtn: '.hamburger',
        circle: '.circle',
        toggleClsName: 'close',
        speed: 800,
        eventName: 'click'
    });
    // end hamburger menu


    // smooth scroll
    const scrollCls = new SmoothScroll;
    scrollCls.scrolllMethod({
        a: 'nav a',
        sections: 'section',
        eventName: 'click'
    });
});