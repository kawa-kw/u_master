export default function runLogoAnimation(){

    $('.js-header, .js-logo-full').show().removeClass('hidden')

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    var tl = new TimelineLite();

    //---------------
    // LOGO ANIMATION
    //---------------
    // logo vars
    var $introHeader = $('.js-header')
    var $uDream = $('.js-intro-h11')
    var $uPlan = $('.js-intro-h12')
    var $uMaster = $('.js-intro-h13')
    var $comingSoon = $('.js-intro-h2')
    var $logoFull = $('.js-logo-full')
    var $logoPart = $('.js-logo-full > *')
    var $wheelPart1 = $('.js-wheel-part-1')
    var $wheelPart2 = $('.js-wheel-part-2')
    var $wheelPart3 = $('.js-wheel-part-3')
    var $wheelPart4 = $('.js-wheel-part-4')
    var $wheelPart5 = $('.js-wheel-part-5')
    var $logoName = $('.js-logo-text')

    tl.to($introHeader, 0, {opacity: 0})
        .to($logoFull, 0, {opacity: 0})
        .to($logoPart, 0, {opacity: 0})
        .to($comingSoon, 0, {opacity: 0})
        .to($uDream, 0, {x:'-=20'}, '+=.5')
        .to($uPlan, 0, {x:'-=20'})
        .to($uMaster, 0, {x:'-=20'})
        .to($uDream, 1, {opacity: 1, x:'0', ease: Linear.easeOut})
        .to($uPlan, 1, {opacity: 1, x:'0', ease: Linear.easeOut})
        .to($uMaster, 1, {opacity: 1, x:'0', ease: Linear.easeOut})
        .to($logoFull, 0, {opacity: 1})
        .to($wheelPart1, .2, {opacity: 1, ease: Back.easeOut.config(1.4)}, '+=.1')
        .to($wheelPart2, .2, {opacity: 1, ease: Back.easeOut.config(1.4)}, '-=.1')
        .to($wheelPart3, .2, {opacity: 1, ease: Back.easeOut.config(1.4)}, '-=.1')
        .to($wheelPart4, .2, {opacity: 1, ease: Back.easeOut.config(1.4)}, '-=.1')
        .to($wheelPart5, .2, {opacity: 1, ease: Back.easeOut.config(1.4)}, '-=.1')
        .to($logoName, 2, {opacity: 1, ease: Linear.easeOut}, '+=.2')
        .to($comingSoon, 1, {opacity: 1, ease: Linear.easeOut})

        //.to($('#bcg-3-float-3'), 100, {x:'+=1000', y:'+=500'}, '-=.2')
};
