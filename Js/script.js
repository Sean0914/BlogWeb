
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".blog-section, .footer", {
      opacity: 0,
      y: 100, // Slide up effect
      duration: 1,
      ease: "power3.out",
      stagger: 0.2, // Delay between elements
    });

    gsap.to(".blog-section, .footer", {
      scale: 1.05,
      duration: 0.3,
      delay: 1,
      ease: "elastic.out(1, 0.3)",
    });
  });
function goToPage(){
    window.location.href = "https://sean0914.github.io/My-Portfolio/"
}
function nextPage(){
    window.location.href = "html/blog1.html"
}
function nexttPage(){
    window.location.href= "html/todo.html"
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true, 
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
        dots: false,
        autoplay: false , 
        autoplayTimeout: 4000,
        responsive: {
            0: { items: 1 }, 
            600: { items: 2 }, 
            1000: { items: 3 } 
        }
    });
});
