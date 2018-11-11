
// todo: Jake: 2018-11-11
// Figure out how to generate this type info from the SCSS
interface Styles {
	'button': string
	'container': string
	'container--is-active': string
}

// todo: Jake: 2018-11-11
// With the error checking, should investigate a way to optimize it away
// production, at least to shorten the strings.
export class Collapo {
	constructor(buttonEl: Element | null, styles?: Styles) {
		if (!buttonEl) {
			throw new Error('Collapo: buttonEl cannot be null');
		}
		const ariaControls = buttonEl.getAttribute('aria-controls')
		if (!ariaControls) {
			throw new Error('Collapo: aria-controls missing on button element given.');
		}
		// NOTE: Jake: 2018-11-11
		// I'm doing this so that I'm using the correct document context when running
		// cypress... this is another compelling reason to stop doing everything in Cypress as
		// they suggest!
		const document = buttonEl.ownerDocument;
		if (!document) {
			throw new Error('Collapo: ownerDocument missing on button.');
		}
		const containerEl = document.getElementById(ariaControls)
		if (!containerEl) {
			throw new Error('Collapo: Cannot get element by id: '+'#'+ariaControls+'. Are you missing aria-controls on the button element?');
		}
		if (!styles) {
			throw new Error('Missing styles param. TODO: Make this optional')
		}
		buttonEl.innerHTML = "~~~~~~~~~~~~~collapo initializing~~~~~~~~~~~~~~~"
		console.warn(styles);
		buttonEl.addEventListener('click', function(e) {
			containerEl.classList.add(styles['container--is-active'])
		})
		console.warn('Collapo', styles);
	}	
}
