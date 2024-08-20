/**
 * Общий скрипт который нужен для каждой страницы
 */

$(document).ready(function () {
    /**
     * Мобильное меню
     */
    $('#open_mob_menu').on('click', function () {
        if ($(this).hasClass('burger_menu--active')) {
            $(this).removeClass('burger_menu--active');
            $('.header__navigation').removeClass('header__navigation--active');
            addSroll();
            return;
        }

        $(this).addClass('burger_menu--active');
        $('.header__navigation').addClass('header__navigation--active');
        noSroll();
    });

    /**
     * Удаление скролла
     */
    function noSroll() {
        $('html').addClass('no-scroll');
        $('body').addClass('no-scroll');
    }
    /**
     * Добавление скролла
     */
    function addSroll() {
        $('html').removeClass('no-scroll');
        $('body').removeClass('no-scroll');
    }
});
