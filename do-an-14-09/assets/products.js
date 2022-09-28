$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".four-columns").on("click", function () {
  alert("4 cột");
});
$(".two-columns").on("click", function () {
  alert("2 cột");
});
