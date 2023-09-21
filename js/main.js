(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);


// slider
var swiper = new Swiper(".product-slider", {
	spaceBetween: 30,
	effect: "fade",
	// initialSlide: 2,
	loop: false,
	navigation: {
	  nextEl: ".next",
	  prevEl: ".prev"
	},
	// mousewheel: {
	//     // invert: false
	// },
	on: {
	  init: function () {
		var index = this.activeIndex;
  
		var target = $(".product-slider__item").eq(index).data("target");
  
		console.log(target);
  
		$(".product-img__item").removeClass("active");
		$(".product-img__item#" + target).addClass("active");
	  }
	}
  });
  
  swiper.on("slideChange", function () {
	var index = this.activeIndex;
  
	var target = $(".product-slider__item").eq(index).data("target");
  
	console.log(target);
  
	$(".product-img__item").removeClass("active");
	$(".product-img__item#" + target).addClass("active");
  
	if (swiper.isEnd) {
	  $(".prev").removeClass("disabled");
	  $(".next").addClass("disabled");
	} else {
	  $(".next").removeClass("disabled");
	}
  
	if (swiper.isBeginning) {
	  $(".prev").addClass("disabled");
	} else {
	  $(".prev").removeClass("disabled");
	}
  });
  
  $(".js-fav").on("click", function () {
	$(this).find(".heart").toggleClass("is-active");
  });
  