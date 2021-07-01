document.addEventListener('keyup', function (e) {
	// WASD keyboard nav support
	if (!Inspire) return;
	if (e.key) {
		// next
		if (e.key === 'd' || e.key === 's') {
			Inspire.next();
		}

		// previous
		if (e.key === 'a' || e.key === 'w') {
			Inspire.previous();
		}

		// sound support
		const all = ['d', 's', 'w', 'a', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (all.includes(e.key)) {
			if (Inspire.currentSlide.dataset.introSound) {
				new Audio(Inspire.currentSlide.dataset.introSound).play();
			}
		}
	}
});

// previous + next UI elements
$$('.nav-button').forEach(function(btn) {
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		if (!Inspire) return;

		if (this.id == 'next-button') {
			Inspire.next();

			// sound support
			if (Inspire.currentSlide.dataset.introSound) {
				new Audio(Inspire.currentSlide.dataset.introSound).play();
			}
		}

		if (this.id == 'previous-button') {
			Inspire.previous();

			// sound support
			if (Inspire.currentSlide.dataset.introSound) {
				new Audio(Inspire.currentSlide.dataset.introSound).play();
			}
		}
	});
});
