(function ( $ ) {
	'use strict';

	$('.ng-scroll').scrollbar();

	function toggle_2() {
		var button = $('.topbar-toggle');

		button.on( "click", function() {
		  $(this).toggleClass('open-toggle');
		});

	}
	toggle_2();

	function toggle_3() {
		var button = $('.switch-currency .active-currency');

		button.on( "click", function() {
		  $(this).parent().toggleClass('open-currency');
		});
		
	}
	toggle_3();

	function searcHolder() {
		var openCtrl = $('.site-search').find('.search-toggle'),
			closeCtrl = $('.site-search-holder').find('.search-close'),
			searchContainer = document.querySelector('.site-search-holder'),
			inputSearch = searchContainer.querySelector('.search_input');

		function init() {
			initEvents();	
		}

		function initEvents() {
			for (var i = 0; i < openCtrl.length; i++) {
				openCtrl[i].addEventListener('click', openSearch);
			}
			for (var i = 0; i < closeCtrl.length; i++) {
				closeCtrl[i].addEventListener('click', closeSearch);
			}
			document.addEventListener('keyup', function(ev) {
				// escape key.
				if( ev.keyCode == 27 ) {
					closeSearch();
				}
			});
		}

		function openSearch() {
			searchContainer.classList.add('site-search-open');
			setTimeout(function() {
				inputSearch.focus();
			}, 500);
		}

		function closeSearch() {
			searchContainer.classList.remove('site-search-open');
			inputSearch.blur();
			inputSearch.value = '';
		}

		init();
	}
	searcHolder();

	function mobile_menu() {
		$('.mobile-nav > ul').find('li.menu-item-has-children > a').after('<span class="sub-toggle"><i class="im im-angle-down"></i></span>');

		var wm_mobile_menu_holder = $('.site-overlay-menu'),
			wm_mobile_toggle = $('.site-mobile-toggle'),
			wm_mobile_close = $('.overlay-close'),
			wm_mMenu = $('.mobile-nav > ul'),
			wm_sub_menu = $('.mobile-nav .sub-menu'),
			wm_sub_link = $('.mobile-nav li.menu-item-has-children .sub-toggle'),
			wm_mobile_width = $(window).width();

		wm_mobile_toggle.on('click', function() {
			$('html').addClass("site-mobile-active");
			wm_mobile_menu_holder.addClass("site-mobile-open");
		});

		wm_mobile_close.on('click', function() {
			$('html').removeClass("site-mobile-active");
			wm_mobile_menu_holder.removeClass("site-mobile-open");
		});

		wm_sub_link.click(function() {
			var link = $(this);
			var closest_ul = link.closest("ul");
			var parallel_active_links = closest_ul.find(".active")
			var closest_li = link.closest("li");
			var link_status = closest_li.hasClass("active");
			var count = 0;

			closest_ul.find("ul").slideUp('normal', function() {
				if (++count == closest_ul.find("ul").length)
					parallel_active_links.removeClass("active");
			});

			if (!link_status) {
				closest_li.children("ul").slideDown('normal');
				closest_li.addClass("active");
			}
		});
	}
	mobile_menu();

	function site_slider() {
		$('.site-slider').each( function() {
			var slick = $(this),
				autoplay = $(this).data('autoplay'),
				autospeed = $(this).data('autospeed'),
				arrows = $(this).data('arrows'),
				stfade = $(this).data('stfade'),
				centeritem = $(this).data('centeritem'),
				centerpad = $(this).data('centerpad')+'px',
				dots = $(this).data('dots'),
				item =  $(this).data('item'),
				slidetoitem = $(this).data('slidetoitem'),
				speed = $(this).data('speed'),
				vertical = $(this).data('vertical'),
				stfornav = $(this).data('stfornav'),
				stselect = $(this).data('stselect'),
				csseffect = $(this).data('csseffect'),
				rtl = $(this).data('rtl');


			slick.slick({
				autoplay: autoplay,
				autoplaySpeed: autospeed,
				arrows: arrows,
				dots: dots,
				fade: stfade,
				centerMode: centeritem,
				centerPadding: centerpad,
				slidesToShow: item,
				slidesToScroll: slidetoitem,
				speed: speed,
				asNavFor: stfornav,
				focusOnSelect: stselect,
				cssEase: csseffect,
				vertical: vertical,
				rtl: rtl,
				responsive: [
			    {
					breakpoint: 1280,
			    	settings: {
			        slidesToShow: item < 6 ? item: 5,
			        centerPadding: centerpad > '80px' ? centerpad: '40px'
			      }
			    },
			    {
					breakpoint: 1198,
			    	settings: {
			        slidesToShow: item < 5 ? item: 4,
			        centerPadding: centerpad > '40px' ? centerpad: '20px'
			      }
			    },
			    {
					breakpoint: 991,
			    	settings: {
			        slidesToShow: item < 4 ? item: 3,
			        centerPadding: '0'
			      }
			    },
			    {
			    	breakpoint: 767,
			    	settings: {
			        slidesToShow: item < 3 ? item: 2,
			        centerPadding: '0'
			      }
			    },
			    {
			    	breakpoint: 320,
			    	settings: {
			        slidesToShow: item < 2 ? item: 1,
			        centerPadding: '0'
			      }
			    }
			  ]
			});
		});
	}
	site_slider();

	function site_countdown() {
		$('.product-timer').each( function() {
			var time = $(this);
				//count_time = $(this).data('countdown');

				var $this = $(this), finalDate = $(this).data('countdown');
				$this.countdown(finalDate, function(event) {
				    $this.html(event.strftime(''
					    + '<div class="timer-wrapper"><div class="time">%D</div> <span class="text">day%!d</span></div> '
					    + '<div class="timer-wrapper"><div class="time">%H</div> <span class="text">hours</span></div> '
					    + '<div class="timer-wrapper"><div class="time">%M</div> <span class="text">mins</span></div> '
					    + '<div class="timer-wrapper"><div class="time">%S</div> <span class="text">sec</span></div>'));
				});
		});
	}
	site_countdown();

	function footer_accordion() {
		var clone_accordion = $(".site-accordion .widget").clone();

		$(".footer-sidebar-accordion").append(clone_accordion);

		$('.mobile-accordion > .widget:eq(0) .widget-title').addClass('active').next().slideDown();

	    $('.mobile-accordion .widget-title').click(function(j) {
	        var dropDown = $(this).closest('.widget').find('.widget-wrap');

	        $(this).closest('.mobile-accordion').find('.widget-wrap').not(dropDown).slideUp();

	        if ($(this).hasClass('active')) {
	            $(this).removeClass('active');
	        } else {
	            $(this).closest('.mobile-accordion').find('.widget-title.active').removeClass('active');
	            $(this).addClass('active');
	        }

	        dropDown.stop(false, true).slideToggle();

	        j.preventDefault();
	    });
	}
	footer_accordion();

	function price_filter() {
		$('#price-range-wrap').each( function() {
			var range = $(this),
				minVal = $(this).data('min'),
				maxVal = $(this).data('max'),
				currency = $(this).data('currency'),
				rangeSlider = range.find('#slider-range');

			rangeSlider.slider({
				range: true,
			    min: minVal,
			    max: maxVal,
			    step: 1,
			    isRTL: true,
			    values: [minVal, maxVal],
			    slide: function( event, ui ) {
			        $( "#range-min-value" ).html( "<span class='slider-currency'>" + currency + "</span>" + ui.values[ 0 ] );
			        $( "#range-max-value" ).html( "<span class='slider-currency'>" + currency + "</span>" + ui.values[ 1 ] );
			    }
			});
			$( "#range-min-value" ).html( "<span class='slider-currency'>" + currency + "</span>" + $( "#slider-range" ).slider( "values", 0 ));
	    	$( "#range-max-value" ).html( "<span class='slider-currency'>" + currency + "</span>" + $( "#slider-range" ).slider( "values", 1 ));
    	});
	}
	price_filter();

	function quantity_button() {
		$(document).on('click', '.cart-quantity .input-number-increment', function(e) {
	        let $input = $(this).siblings('.input-item'),
	            val = parseInt($input.val()),
	            max = parseInt($input.attr('max')),
	            step = parseInt($input.attr('step'));

	        let temp = val + step;
	        $input.val(temp <= max ? temp : max);
	        console.log(temp);
	    });
	    $(document).on('click', '.cart-quantity .input-number-decrement', function(e) {
	        let $input = $(this).siblings('.input-item'),
	            val = parseInt($input.val()),
	            min = parseInt($input.attr('min')),
	            step = parseInt($input.attr('step'));

	        let temp = val - step;
	        $input.val(temp >= min ? temp : min);
	      
	        console.log(temp);
	    });
	}
	quantity_button();

	function single_product_zoom() {
		$('.zoom-product').each(function(){
		    var originalImagePath = $(this).find('img').data('original-image');
		    $(this).zoom({
		      url: originalImagePath,
		      magnify: 1,
		      touch:false
		    });
	  	});
	}
	single_product_zoom();

	function tab_form() {
		$('.tab-header a').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.tab-header a').removeClass('active');
			$('.tab-content').removeClass('active');

			$(this).addClass('active');
			$("#"+tab_id).addClass('active');
		})
	}
	tab_form();

	function add_cart_lightbox() {
		var add_cart_button = $('.product-cart-button a'),
			carbox_close = $('.cart-lightbox-close'),
			carbox_close2 = $('.lightbox-continue'),
			cart_lightbox = $('.cart-lightbox');

		add_cart_button.unbind('click');

		add_cart_button.on('click', function(e) {
			e.preventDefault();
			$('html').addClass("cart-lightbox-active");
			cart_lightbox.addClass("lightbox-open");
		});

		carbox_close.on('click', function() {
			$('html').removeClass("cart-lightbox-active");
			cart_lightbox.removeClass("lightbox-open");
		});

		carbox_close2.on('click', function(e) {
			e.preventDefault();
			$('html').removeClass("cart-lightbox-active");
			cart_lightbox.removeClass("lightbox-open");
		});
	}
	add_cart_lightbox();

	var countryData = $.fn.intlTelInput.getCountryData();
$.each(countryData, function(i, country) {
  country.name = country.name.replace(/.+\((.+)\)/,"$1");
});

	$("#mobile-number").intlTelInput({
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      geoIpLookup: function(callback) {
         $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
           var countryCode = (resp && resp.country) ? resp.country : "";
           callback(countryCode);
        });
      },
      // hiddenInput: "full_number",
      initialCountry: "auto",
      // nationalMode: false,
       onlyCountries: ['bh', 'kw', 'ae', 'sa', 'qa', 'tr'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      separateDialCode: true,
      utilsScript: /*'assets/js/utils.js'*/"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
    });

}(jQuery));
