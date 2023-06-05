const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked!");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.querySelector(".dark-underlay").classList.toggle("show-underlay");
  });

// SCROLL EFFECT ON ABOUT IMAGE

function scrollFadeIn() {
    var breakElement = document.querySelector('.abt-content img');
    var breakElementOffset = breakElement.offsetTop;
    var windowHeight = window.innerHeight;

    function useScroll() {
        var scrollTop = window.scrollY;

        if (scrollTop + (windowHeight * 0.8) > breakElementOffset) {
            breakElement.classList.add('visible');
        } else {
            breakElement.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', useScroll);
}

scrollFadeIn();

// IMAGE MODAL

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("modalImg");
  
    var images = document.querySelectorAll(".card img");
  
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        if (window.innerWidth > 700) {
          modal.style.display = "block";
          img.src = this.src;
        }
      });
    });
  
    var closeBtn = document.getElementsByClassName("close")[0];
    modal.addEventListener("click", function (event) {
      if (
        event.target === modal ||
        event.target === closeBtn ||
        window.innerWidth <= 700
      ) {
        modal.style.display = "none";
      }
    });
  });
  
