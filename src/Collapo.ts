interface Styles {
	[className: string]: string
}

export class Collapo {
	constructor(buttonEl: Element | null, styles?: Styles) {
		if (!buttonEl) {
			throw new Error('null is invalid');
		}
		if (styles) {
			console.warn('styles', styles);
			buttonEl.classList.add(styles.button)
		}
		buttonEl.innerHTML = "~~~~~~~~~~~~~test~~~~~~~~~~~~~~~"
	}	
}
