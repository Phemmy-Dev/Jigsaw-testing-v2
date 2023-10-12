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




    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
}

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
}


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
