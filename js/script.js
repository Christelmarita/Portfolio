const hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
    hamburger.classList.toggle("active");
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
    navMenu.classList.toggle("slide-in");
    document.querySelector(".dark-underlay").classList.toggle("show-underlay");
  };

// SCROLL EFFECT ON ABOUT IMAGE

function scrollFadeIn() {
    var breakElement = document.querySelector('.abt-content img');
    var breakElementOffset = breakElement.offsetTop;
    var windowHeight = window.innerHeight;

    function useScroll() {
        var scrollTop = window.scrollY;

        if (scrollTop + (windowHeight * 0.9) > breakElementOffset) {
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
        modal.style.display = "block";
        img.src = this.src;
        img.alt = this.alt;
      });
    });
  
    var closeBtn = document.getElementsByClassName("close")[0];
    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target === closeBtn) {
        modal.style.display = "none";
      }
    });
});

// SCROLL TO SECTIONS

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const button = document.querySelector("button");
    const hamburger = document.querySelector(".hamburger"); // Add this line
    const navMenu = document.querySelector(".nav-menu"); // Add this line
  
    function scrollToTarget(target) {
      const offset = document.querySelector(".navbar").offsetHeight;
      const targetPosition = document.querySelector(target).offsetTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
  
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.querySelector(".dark-underlay").classList.remove("show-underlay");
    }
  
    for (const link of navLinks) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = this.getAttribute("href");
        scrollToTarget(target);
      });
    }
  
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const target = this.getAttribute("data-target");
      scrollToTarget(target);
    });
  
    window.addEventListener("scroll", function() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.querySelector(".dark-underlay").classList.remove("show-underlay");
    });
  });
  
  