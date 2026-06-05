import Inspire from "@inspirejs/core";
import { registry } from "@inspirejs/core/src/plugins.js";
import selectors from "@inspirejs/plugins/plugin-autoload.js";

const pluginBase = new URL("https://cdn.jsdelivr.net/npm/@inspirejs/plugins@3.0.0/");

for (const [id, test] of Object.entries(selectors)) {
	registry[id] = {
		test,
		base: pluginBase
	};
}

globalThis.Inspire = Inspire;

await Inspire.setup();

// start editing here. code above by ChatGPT, sadly

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
document.querySelectorAll('.nav-button').forEach(function(btn) {
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
