var menu = document.querySelector('.menu-drop');
var navbar = document.querySelector('.navbar');
var login = document.querySelector('#login-btn');

//  Drop Down Menu Open and close
menu.addEventListener("click", function() {
    if (menu.innerHTML === "X") {
            
            menu.innerHTML = "&#9776";
            menu.classList.remove('animate');
            navbar.classList.remove('open-menu');
            navbar.classList.remove('active');
      }
    else {
            menu.innerHTML = "X";
            menu.classList.add('animate');
            navbar.classList.toggle('open-menu');
            navbar.classList.toggle('active');
      } 
})

login.onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

// Page Scroll to add shadow 3d effect
window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.Header').classList.add('active');
    }
    else {
        document.querySelector('.Header').classList.remove('active');
    }

    menu.innerHTML = "&#9776";
    navbar.classList.remove('open-menu');
}

// on load it will keep the page teh same but if the user scrolls it will close the drop down menu.
window.onload = () =>{
    if (window.scrollY > 0) {
        document.querySelector('.Header').classList.add('active');
    }
    else {
        document.querySelector('.Header').classList.remove('active');
    }

    menu.innerHTML = "&#9776";
    navbar.classList.remove('open-menu');
}
 
//Home Page
/* 
document.querySelector('.home').onmousemove = (Event) => {
    document.querySelectorALL('.home-parallax').forEach(elm => {

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - Event.pageX * speed)/90;
        let y = (window.innerHeight - Event.pageY * speed)/90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
}
*/

var swiper = new Swiper(".vehicle-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,

      },
      760: {
        slidesPerView: 2,

      },
      1040: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
