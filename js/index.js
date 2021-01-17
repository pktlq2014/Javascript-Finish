/*
=============
Navigation
đóng, mở thanh menu
=============
 */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});

/*
=============
PopUp
đóng form xuất hiện đầu tên trên màn hình
=============
 */
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
// nếu có class này
if (popup) {
  closePopup.addEventListener("click", () => {
    // thì thêm class .hide__popup vào chung với .popup để xử lý trong css
    popup.classList.add("hide__popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide__popup");
    }, 500);
  });
}

/*
=============
Fixed Navigation
scroll lên đầu trang khi kéo xuống tói cuối cùng
=============
 */

const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");

// Smooth Scroll
Array.from(scrollLink).map(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navContainer.style.left = "-30rem";
    document.body.classList.remove("active");
  });
});

// Fix NavBar
// scroll lên đầu trang khi kéo xuống tói cuối cùng

window.addEventListener("scroll", e => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }
  // nút scroll lên đầu trang ẩn rồi, đo khoảng cách vs menu xa menu thì hiện ra nút scroll
  if (scrollHeight > 300) {
    gotoTop.classList.add("show-top");
  } else {
    gotoTop.classList.remove("show-top");
  }
});
// insert 1
// animation class="animate-left"
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
// insert 4 + 5
const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  560: {
      items: 2
  },
  960: {
      items: 3
  }
}
$(document).ready(function () {

  // $nav = $('.nav');
  // $toggleCollapse = $('.toggle-collapse');

  // /** click event on toggle menu */
  // $toggleCollapse.click(function () {
  //     $nav.toggleClass('collapse');
  // })

  // owl-crousel for blog
  $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3000,
      dots: false,
      nav: true,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
      responsive: responsive
  });


  // click to scroll top
  $('.move-up span').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
  })

  // AOS Instance
  AOS.init();

});