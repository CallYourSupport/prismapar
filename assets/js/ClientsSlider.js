$(document).ready(function () {
  if ($(".brands_slider").length) {
    var brandsSlider = $(".brands_slider");

    brandsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: false,
      dots: false,
      items: 6,
      margin: 2,
      responsive: {
        0: { items: 1 },
        412: { items: 2 },
        768: { items: 3 },
        991: { items: 4 },
        1199: { items: 6 },
      },
    });

    if ($("brandsSlider").width() < 768) {
      brandsSlider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: false,
        items: 2,
        margin: 2,
      });
    }

    if ($(".brands_prev").length) {
      var prev = $(".brands_prev");
      prev.on("click", function () {
        brandsSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".brands_next").length) {
      var next = $(".brands_next");
      next.on("click", function () {
        brandsSlider.trigger("next.owl.carousel");
      });
    }
  }
});
