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

