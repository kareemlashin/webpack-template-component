"use strict";

require("./scss/main.scss");

require("./scripts/main");

require("../node_modules/owl.carousel/dist/owl.carousel.min");

// JavaScript
// Styles
require('bootstrap');

require('owl.carousel');

$(document).ready(function () {
  $(".loading").hide();
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    item: 3,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});
//# sourceMappingURL=index.dev.js.map
