describe('Meu primeiro conjunto de testes', () => {
    // conjunto de testes

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    })
    it('verifica se 2 é igual a 2',() => {
        expect(2).to.equal(2)
    });

    it ('verifica se o overlay tem o tamanho da imagem-base',() => {
        cy.get('#imagemBase').should('have.prop', 'clientHeight').then(clientHeight => {
            cy.get('[data-test="overlay"]').invoke('height').should('equal', clientHeight)

        });
    })
        
    it ('verifica se o overlay esta oculto',() => {
        cy.get('[data-test="overlay"]').should('have.class', 'oculto').and('not.be.visible');
    });
 
it ('verifica se os cards estão ocultos',() => {  
    cy.get('.data').each(card => {
        cy.wrap(card).should('not.be.visible');

    })  
it('verifica se as imagens de destaque estão ocultas',() => {
    cy.get('[data-test-"imgParabrisa"]').should('have.class', 'oculto').and('not.be.visible');
    cy.get('[data-test-"imgRetrovisor"]').should('have.class', 'oculto').and('not.be.visible');
    cy.get('[data-test-"imgEspelhoRetrovisor"]').should('have.class', 'oculto').and('not.be.visible');

    
})


it('verifica se a cor do overlay esta correta'),() => {    
    cy.get('[data-test="overlay"]').should('have.css', 'blackground-color','rgba(0,0,0,0.533)');
    
}

    })


});

    
  
        
    


