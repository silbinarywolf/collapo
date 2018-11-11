import { Collapo } from "collapo/Collapo"
//import { styles } from "collapo/CollapoStyles"
import styles from "collapo/Collapo.scss"

console.warn('spec', styles);
//const styles = {
//	"button": "Collapo__button",
//}

interface Props {
	id: string
	buttonClass: string
	containerClass: string
}

function getTemplate(props: Props) {
	const r = `
		<button
			type="button"
			class="${props.buttonClass}" 
			aria-expanded="false"
			aria-controls="${props.id}"
		>
		  Title #1
		</button>
		<div
			id="${props.id}"
			class="${props.containerClass}"
		>
			Content in an accordion here
		</div>
	`
	return r;
}

// NOTE: Jake: 2018-11-11
// Hoist stylesheets from this document into the
// working/testing area document.
const stylesheets: string[] = [];
if (document.head) {
	document.head.querySelectorAll('link').forEach(function(stylesheet) {
		if (stylesheet.href) {
			stylesheets.push(stylesheet.href);
		}
	})
}
function setupStylesheets(head: HTMLHeadElement | null) {
	if (head) {
		for (let stylesheet of stylesheets) {
			const link = document.createElement("link");
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = stylesheet;
			head.appendChild(link);
		}
	}
}

describe('TypeScript', () => {
	it('works', () => {
		cy.document().then((doc) => {
			setupStylesheets(doc.head)

			// Setup template
			doc.body.innerHTML = getTemplate({
				id: "collapseExample",
				buttonClass: styles['button'],
				containerClass: "Collapo__container",
			})
			new Collapo(doc.body.querySelector('button'))

			// note TypeScript definition
			let x: number = 42
			if (x) {
				expect(x).to.equal(42)
			}
		})
	})

  /*it('checks shape of an object', () => {
    const object = {
      age: 21,
      name: 'Joe',
    }
    expect(object).to.have.all.keys('name', 'age')
  })

  it('uses cy commands', () => {
    cy.wrap({}).should('deep.eq', {})
  })

  it('tests our example site', () => {
    cy.visit('https://example.cypress.io/')
    cy.get('.home-list')
      .contains('Querying')
      .click()
    cy.get('#query-btn').should('contain', 'Button')
  })

  // enable once we release updated TypeScript definitions
  it('has Cypress object type definition', () => {
    expect(Cypress.version).to.be.a('string')
  })

  // wrong code on purpose to type check our definitions
  // it('can visit website', () => {
  //   cy.boo()
  // })

  it('adds numbers', () => {
    expect(add(2, 3)).to.equal(5)
  })

  it('uses custom command cy.foo()', () => {
    cy.foo().should('be.equal', 'foo')
  })*/
})
