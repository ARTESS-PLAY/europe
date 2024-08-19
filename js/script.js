new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    simulateTouch: false,
    loop: true,
    slidesPerView: 8,
    spaceBetween: -50,
});

new Swiper('.swiper-articles', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    simulateTouch: false,
    loop: true,
    slidesPerView: 4
});