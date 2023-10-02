document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        // direction: "horizontal",
        effect: "fade",
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 7000, // 5 seconds delay between slides
        },

        // If you need pagination
        pagination: {
            el: ".swiper-pagination",
        },

        // Navigation arrows (optional)
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});