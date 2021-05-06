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
	}
});

// previous + next UI elements
$$('.nav-button').forEach(function(btn) {
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		if (!Inspire) return;

		if (this.id == 'next-button') {
			Inspire.next();
		}

		if (this.id == 'previous-button') {
			Inspire.previous();
		}
	});
});
