! function (e) {
	"use strict";
	e(window).on("load", (function () {
		e(".preloader").fadeOut()
	})), e(".preloader").length > 0 && e(".preloaderCls").each((function () {
		e(this).on("click", (function (t) {
			t.preventDefault(), e(".preloader").css("display", "none")
		}))
	})), e.fn.vsmobilemenu = function (t) {
		var n = e.extend({
			menuToggleBtn: ".vs-menu-toggle",
			bodyToggleClass: "vs-body-visible",
			subMenuClass: "vs-submenu",
			subMenuParent: "vs-item-has-children",
			subMenuParentToggle: "vs-active",
			meanExpandClass: "vs-mean-expand",
			subMenuToggleClass: "vs-open",
			toggleSpeed: 400
		}, t);
		return this.each((function () {
			var t = e(this);

			function a() {
				t.toggleClass(n.bodyToggleClass);
				var a = "." + n.subMenuClass;
				e(a).each((function () {
					e(this).hasClass(n.subMenuToggleClass) && (e(this).removeClass(n.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(n.subMenuParentToggle))
				}))
			}
			t.find("li").each((function () {
				var t = e(this).find("ul");
				t.addClass(n.subMenuClass), t.css("display", "none"), t.parent().addClass(n.subMenuParent), t.prev("a").addClass(n.meanExpandClass), t.next("a").addClass(n.meanExpandClass)
			}));
			var i = "." + n.meanExpandClass;
			e(i).each((function () {
				e(this).on("click", (function (t) {
					var a;
					t.preventDefault(), e(a = this).next("ul").length > 0 ? (e(a).parent().toggleClass(n.subMenuParentToggle), e(a).next("ul").slideToggle(n.toggleSpeed), e(a).next("ul").toggleClass(n.subMenuToggleClass)) : e(a).prev("ul").length > 0 && (e(a).parent().toggleClass(n.subMenuParentToggle), e(a).prev("ul").slideToggle(n.toggleSpeed), e(a).prev("ul").toggleClass(n.subMenuToggleClass))
				}))
			})), e(n.menuToggleBtn).each((function () {
				e(this).on("click", (function () {
					a()
				}))
			})), t.on("click", (function (e) {
				e.stopPropagation(), a()
			})), t.find("div").on("click", (function (e) {
				e.stopPropagation()
			}))
		}))
	}, e(".vs-menu-wrapper").vsmobilemenu();
	var t, n, a, i = "";

	function s(e) {
		return parseInt(e, 10)
	}
	e(window).on("scroll", (function () {
			var t, n, a, s, o;
			t = e(".sticky-active"), n = "active", a = "will-sticky", s = e(window).scrollTop(), o = t.css("height"), t.parent().css("min-height", o), e(window).scrollTop() > 800 ? (t.parent().addClass(a), s > i ? t.removeClass(n) : t.addClass(n)) : (t.parent().css("min-height", "").removeClass(a), t.removeClass(n)), i = s, e(this).scrollTop() > 500 ? e(".scrollToTop").addClass("show") : e(".scrollToTop").removeClass("show")
		})), e(".scrollToTop").each((function () {
			e(this).on("click", (function (t) {
				return t.preventDefault(), e("html, body").animate({
					scrollTop: 0
				}, i / 3), !1
			}))
		})), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function () {
			var t = e(this).attr("data-bg-src");
			e(this).css("background-image", "url(" + t + ")")
		})), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function () {
			var t = e(this).attr("data-bg-color");
			e(this).css("background-color", t)
		})), t = ".sidemenu-wrapper", n = ".sideMenuCls", a = "show", e(".sideMenuToggler").on("click", (function (n) {
			n.preventDefault(), e(t).addClass(a)
		})), e(t).on("click", (function (n) {
			n.stopPropagation(), e(t).removeClass(a)
		})), e(t + " > div").on("click", (function (n) {
			n.stopPropagation(), e(t).addClass(a)
		})), e(n).on("click", (function (n) {
			n.preventDefault(), n.stopPropagation(), e(t).removeClass(a)
		})),
		function (t, n, a, i) {
			e(n).on("click", (function (n) {
				n.preventDefault(), e(t).addClass(i)
			})), e(t).on("click", (function (n) {
				n.stopPropagation(), e(t).removeClass(i)
			})), e(t).find("form").on("click", (function (n) {
				n.stopPropagation(), e(t).addClass(i)
			})), e(a).on("click", (function (n) {
				n.preventDefault(), n.stopPropagation(), e(t).removeClass(i)
			}))
		}(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"), e(".vs-hero-carousel").each((function () {
			var t = e(this);

			function n(e) {
				return t.data(e)
			}
			t.on("sliderWillLoad", (function (e, t) {
				var n = jQuery(this).find(".ls-responsive"),
					a = jQuery(window).width();
				n.each((function () {
					var e = jQuery(this);

					function t(t) {
						return "" === e.data(t) ? e.data(null) : e.data(t)
					}
					var n = t(a < 768 ? "ls-mobile" : a < 993 ? "ls-tablet" : a < 1025 ? "ls-laptop" : "ls-desktop"),
						i = void 0 !== e.attr("style") ? e.attr("style") : " ";
					e.attr("style", i + n)
				}))
			})), t.find("[data-ls-go]").each((function () {
				e(this).on("click", (function (n) {
					n.preventDefault();
					var a = e(this).data("ls-go");
					t.layerSlider(a)
				}))
			})), t.layerSlider({
				allowRestartOnResize: !0,
				maxRatio: n("maxratio") ? n("maxratio") : 1,
				type: n("slidertype") ? n("slidertype") : "responsive",
				pauseOnHover: !!n("pauseonhover"),
				navPrevNext: !!n("navprevnext"),
				hoverPrevNext: !!n("hoverprevnext"),
				hoverBottomNav: !!n("hoverbottomnav"),
				navStartStop: !!n("navstartstop"),
				navButtons: !!n("navbuttons"),
				loop: !1 !== n("loop"),
				autostart: !!n("autostart"),
				height: n("height") ? n("height") : 1080,
				responsiveUnder: n("responsiveunder") ? n("responsiveunder") : 1220,
				layersContainer: n("container") ? n("container") : 1220,
				showCircleTimer: !!n("showcircletimer"),
				skinsPath: "layerslider/skins/",
				thumbnailNavigation: !1 !== n("thumbnailnavigation")
			})
		})), e(".popup-image").magnificPopup({
			type: "image",
			gallery: {
				enabled: !0
			}
		}), e(".popup-video").magnificPopup({
			type: "iframe"
		}), e.fn.countdown = function () {
			e(this).each((function () {
				var t = e(this),
					n = new Date(t.data("offer-date")).getTime();

				function a(e) {
					return t.find(e)
				}
				var i = setInterval((function () {
					var e = (new Date).getTime(),
						s = n - e,
						o = Math.floor(s / 864e5),
						l = Math.floor(s % 864e5 / 36e5),
						r = Math.floor(s % 36e5 / 6e4);
					Math.floor(s % 6e4 / 1e3);
					s < 0 ? (clearInterval(i), t.addClass("expired"), t.find(".message").css("display", "block")) : (a(".day").html(o + " "), a(".hour").html(l + " "), a(".minute").html(r + " "))
				}), 1e3)
			}))
		}, e(".offer-counter").length && e(".offer-counter").countdown(), e.fn.sectionPosition = function (t, n) {
			e(this).each((function () {
				var a, i, o, l, r, c = e(this);
				a = Math.floor(c.height() / 2), i = c.attr(t), o = c.attr(n), l = s(e(o).css("padding-top")), r = s(e(o).css("padding-bottom")), "top-half" === i ? (e(o).css("padding-bottom", r + a + "px"), c.css("margin-top", "-" + a + "px")) : "bottom-half" === i && (e(o).css("padding-top", l + a + "px"), c.css("margin-bottom", "-" + a + "px"))
			}))
		}, e("[data-sec-pos]").length && e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for"), e(".member-angle-links .middle-icon").each((function () {
			e(this).on("click", (function (t) {
				t.preventDefault(), e(this).toggleClass("active"), e(this).parent().toggleClass("show")
			}))
		})), e.fn.indicator = function () {
			var t = e(this),
				n = t.find("a"),
				a = t.find("button");
			t.append('<span class="indicator"></span>');
			var i = t.find(".indicator");
			if (n.length) var s = n;
			else if (a.length) s = a;

			function o() {
				var e = t.find(".active"),
					n = e.css("height"),
					a = e.css("width"),
					s = e.position().top + "px",
					o = e.position().left + "px";
				i.css({
					top: s,
					left: o,
					width: a,
					height: n
				})
			}
			s.on("click", (function (t) {
				t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), o()
			})), o()
		}, e(".product-tab").length && e(".product-tab").indicator(), e(".quantity-plus").each((function () {
			e(this).on("click", (function (t) {
				t.preventDefault();
				var n = e(this).siblings(".qty-input"),
					a = s(n.val());
				isNaN(a) || n.val(a + 1)
			}))
		})), e(".quantity-minus").each((function () {
			e(this).on("click", (function (t) {
				t.preventDefault();
				var n = e(this).siblings(".qty-input"),
					a = s(n.val());
				!isNaN(a) && a > 0 && n.val(a - 1)
			}))
		})), e(".rating-select .stars a").each((function () {
			e(this).on("click", (function (t) {
				t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
			}))
		})), e(".product-thumb").length && e(".product-thumb").each((function () {
			e(this).on("click", (function () {
				var t = e(this).find("img").data("big-img");
				e(".img-fullsize img").attr("src", t), e(".img-fullsize .popup-image").attr("href", t)
			}))
		})), e(".filter-active").imagesLoaded((function () {
			if (e(".filter-active").length > 0) {
				var t = e(".filter-active").isotope({
					itemSelector: ".filter-item",
					filter: "*",
					masonry: {
						columnWidth: ".filter-item"
					}
				});
				e(".filter-menu-active").on("click", "button", (function () {
					var n = e(this).attr("data-filter");
					t.isotope({
						filter: n
					})
				})), e(".filter-menu-active").on("click", "button", (function (t) {
					t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
				}))
			}
		})), e(".dateTime-pick").datetimepicker({
			timepicker: !0,
			datepicker: !0,
			format: "y-m-d H:i",
			hours12: !1,
			step: 30
		}), e(".date-pick").datetimepicker({
			timepicker: !1,
			datepicker: !0,
			format: "m-d-y",
			step: 10
		}), e(".time-pick").datetimepicker({
			datepicker: !1,
			timepicker: !0,
			format: "H:i",
			hours12: !1,
			step: 10
		}), (new universalParallax).init(), new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			resetAnimation: !1
		}).init(), e("#ship-to-different-address-checkbox").on("change", (function () {
			e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
		})), e(".woocommerce-form-login-toggle a").on("click", (function (t) {
			t.preventDefault(), e(".woocommerce-form-login").slideToggle()
		})), e(".woocommerce-form-coupon-toggle a").on("click", (function (t) {
			t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
		})), e(".shipping-calculator-button").on("click", (function (t) {
			t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
		})), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function () {
			e(this).on("change", (function () {
				e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
			}))
		})), e(".rating-select .stars a").each((function () {
			e(this).on("click", (function (t) {
				t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
			}))
		}))
}(jQuery);
$('.formulario-contacto').on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    var $responseSuccess = $form.find('.formulario-contacto-success');
    var $responseError = $form.find('.formulario-contacto-error');
    $.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: $form.serialize(),
        success: function(response) {
            response = JSON.parse(response);
            if (response.type && response.type === 'success') {
                $responseError.hide();
                $responseSuccess.html(response.response).show();
                $form[0].reset();
            } else {
                $responseSuccess.hide();
                $responseError.html(response.response).show();
            }
        },
        error: function(response) {
            $responseSuccess.hide();
            $responseError.html(response.responseText).show();
        }
    });
});