// Mixitup

var mixer = mixitup(".portfolio-container");

// Hamburger Menu

function openMenu() {
  document.getElementById("navbar").style.height = "100%";
}
function closeMenu() {
  document.getElementById("navbar").style.height = "0%";
}

// Smooth Scroll

$(function () {
  $(".menu-item a, .scroll-down a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      2000
    );
    return false;
  });
});
