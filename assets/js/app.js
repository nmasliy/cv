document.addEventListener('DOMContentLoaded', () => {

    const $html = document.querySelector('html');
    const $header = document.querySelector('.header');
    const $headerBtn = document.querySelector('.header__btn');
    const $navigationItems = document.querySelectorAll('.navigation__list>li>a');
    const MOBILE_BREAKPOINT = 768;
    let isMenuInit = false;

    const toggleMenu = () => {
        $headerBtn.classList.remove('active');
        $header.classList.toggle('active');
        $html.classList.toggle('block-scroll');
    }

    // Work only in mobile devices which width <= 768
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
        $headerBtn.addEventListener('click', toggleMenu);
        $navigationItems.forEach(item => item.addEventListener('click', toggleMenu));
        isMenuInit = true;
    } else {
        window.addEventListener('resize', function() {
            if (window.innerWidth <= MOBILE_BREAKPOINT && !isMenuInit) {
                $headerBtn.addEventListener('click', toggleMenu);
                $navigationItems.forEach(item => item.addEventListener('click', toggleMenu));
                isMenuInit = true;
            }
        })
    }

})