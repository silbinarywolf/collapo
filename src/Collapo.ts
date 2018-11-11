interface Styles {
	[className: string]: string
}

export class Collapo {
	constructor(buttonEl: Element | null, styles?: Styles) {
		if (!buttonEl) {
			throw new Error('Collapo: buttonEl cannot be null');
		}
		buttonEl.innerHTML = "~~~~~~~~~~~~~collapo initializing~~~~~~~~~~~~~~~"
		console.warn('Collapo', styles);
	}	
}
