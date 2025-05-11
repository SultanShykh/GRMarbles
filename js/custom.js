(function () {
	'use strict';

	var tinyslider = function () {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();




	var sitePlusMinus = function () {

		var value,
			quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
			var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
			var increase = quantityContainer.getElementsByClassName('increase')[0];
			var decrease = quantityContainer.getElementsByClassName('decrease')[0];
			increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
			decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
		}

		function init() {
			for (var i = 0; i < quantity.length; i++) {
				createBindings(quantity[i]);
			}
		};

		function increaseValue(event, quantityAmount) {
			value = parseInt(quantityAmount.value, 10);

			console.log(quantityAmount, quantityAmount.value);

			value = isNaN(value) ? 0 : value;
			value++;
			quantityAmount.value = value;
		}

		function decreaseValue(event, quantityAmount) {
			value = parseInt(quantityAmount.value, 10);

			value = isNaN(value) ? 0 : value;
			if (value > 0) value--;

			quantityAmount.value = value;
		}

		init();

	};
	sitePlusMinus();

	// Make sure dropdowns work properly
	// Make sure dropdowns work properly
	document.addEventListener('DOMContentLoaded', function () {
		// Hover-only dropdown toggle
		const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

		dropdownToggles.forEach(toggle => {
			const parent = toggle.parentNode;
			const menu = parent.querySelector('.dropdown-menu');

			// Style dropdown items
			if (menu) {
				const dropdownItems = menu.querySelectorAll('.dropdown-item');
				dropdownItems.forEach(item => {
					item.style.color = '#000000';
					item.style.fontWeight = '800';
				});
			}

			// Show dropdown on hover
			parent.addEventListener('mouseenter', function () {
				menu.style.display = 'block';
			});

			// Hide dropdown on mouse leave
			parent.addEventListener('mouseleave', function () {
				menu.style.display = 'none';
			});

			// ✅ Remove click override to allow redirection
			// toggle.removeEventListener('click', ...);  <-- Not needed anymore
		});
	});


})()