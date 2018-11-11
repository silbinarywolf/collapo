import { Collapo } from "collapo/Collapo"
import * as styles from "collapo/Collapo.scss"

//const styles = {
//	"button": "Collapo__button",
//}

interface Template {
	id: string
	buttonClass: string
	containerClass: string
}

function getTemplate(options: Template) {
	const r = `
		<button
			type="button"
			class="${options.buttonClass}" 
			aria-expanded="false"
			aria-controls="${options.id}"
		>
		  Title #1
		</button>
		<div
			id="${options.id}"
			class="${options.containerClass}"
		>
			Content in an accordion here
		</div>
	`
	return r;
}

describe('TypeScript', () => {
  it('works', () => {
  	cy.visit("http://localhost:8080/test")
  	cy.document().then((doc) => {
    	doc.body.innerHTML = getTemplate({
    		id: "collapseExample",
    		buttonClass: styles['button'],
    		containerClass: "Collapo__container",
    	})

    	new Collapo(doc.body.querySelector('.btn'))

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
