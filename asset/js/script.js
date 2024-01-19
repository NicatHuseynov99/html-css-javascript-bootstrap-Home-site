let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    992: {
      items: 3,
      nav: false,
    },
    1024: {
      items: 4,
      nav: false,
    },
    1194: {
      items: 5,
      nav: true,
      loop: true,
    },
  },
});

function clickmenu() {
  var menu = document.getElementById("categories-menu");
  var icon = document.getElementById("icon-menu");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    menu.classList.add("active");
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
}

function clickmenu2() {
  var menu = document.getElementById("categories-menu2");
  var icon = document.getElementById("icon-menu2");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    menu.classList.add("active");
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
}


function openSidebar(){
var openSidebar=document.getElementById("sidebar")
openSidebar.classList.add("active");
}
function closeSidebar(){
  var openSidebar=document.getElementById("sidebar")
  openSidebar.classList.remove("active");
  }