
$(document).ready(function () {
  $('.nonloop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: -100,
    dots: true,
    responsive: {
      300: {
        items: 1,
        margin: 50,
      },

      576: {
        items: 1,
        margin: 100,
      },
      600: {
        items: 1,
        margin: 100,
      },
      1200: {
        items: 2,
      }
    }
  });
})
$('.owl-dot').click(function () {
  var owl = $("#testimonials-slider");
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});