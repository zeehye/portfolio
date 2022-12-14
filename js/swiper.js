var swiper = new Swiper(".mySwiper", {
    // 한 화면에 보이는 슬라이드의 갯수
    slidesPerView: "auto",
    // 슬라이드 간 좌우 간격
    spaceBetween: 200,
    // 반복
    loop: true,
    speed : 800,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});