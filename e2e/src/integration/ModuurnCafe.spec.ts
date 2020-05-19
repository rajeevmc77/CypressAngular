// import { getGreeting , checkIfEleExists } from '../support/app.po';
import { checkIfEleExists } from '../support/app.po';
// describe('Load Test App', () => {
//   beforeEach(() => cy.visit('/'));

//   it('should display welcome message', () => {
//     getGreeting().contains('Welcome to Myp');
//   });
// });


// tslint:disable-next-line: only-arrow-functions
describe('Check Samagra Site', function () {

  // tslint:disable-next-line: only-arrow-functions
  it('Open Samagra App', function () {
    cy.visit('https://moduurncafe.moduurn.ca/confirm', { failOnStatusCode: false });
    // const cyObj = cy.get('.cards > .row > .col-sm-12 > div > .btn-wide');
    // cy.get('body').then($body => {
    //   const cypressObj = Cypress.$('.cards > .row > .col-sm-12 > div > .btn-wide');
    //   debugger;
    //   if ($body.find('.cards > .row > .col-sm-12 > div > .btn-wide').length > 0) {
    //     cy.get('.cards > .row > .col-sm-12 > div > .btn-wide')
    //       .click();
    //   }
    // });
    // cy.get('.cards > .row > .col-sm-12 > div > .btn-wide').click();
    // checkIfEleExists('.cards > .row > .col-sm-12 > div > .btn-wide')
    // .then(resp => {
    //   cy.get('.cards > .row > .col-sm-12 > div > .btn-wide').click();
    //   checkIfEleExists('.btn-wide')
    //   .then(resp => { cy.get('.btn-wide')
    //   .click(); })
    //   .catch(err => { console.log(' Failed to Find body > modal-container > div > div > landing-page > div > div.modal-body > div > div > div > div > div.landing-footer.col-sm-12 > button'); });

    // })
    // .catch(err => { console.log(' Failed to Find .cards > .row > .col-sm-12 > div > .btn-wide'); });

    checkIfEleExists('.cards > .row > .col-sm-12 > div > .btn-wide')
    .then(r => {
      cy.get('.cards > .row > .col-sm-12 > div > .btn-wide').click();
    });

    checkIfEleExists('modal-container > div > div > landing-page > div > div.modal-body > div > div > div > div > div.landing-footer.col-sm-12 > button')
    .then( r => {
      cy.get('modal-container > div > div > landing-page > div > div.modal-body > div > div > div > div > div.landing-footer.col-sm-12 > button').click();
    });

    // cy.get('.modal-content > landing-page > .landing-page > .modal-header > .fa').click();
    // cy.get('.container > #navbarSupportedContent > #navBarContent > .nav-item > .btn-theme').click();
    // cy.get('.modal-body > .col-md-12 > .ng-untouched > .row:nth-child(1) > .form-control').click();
    // cy.get('.modal-body > .col-md-12 > .ng-untouched > .row:nth-child(1) > .form-control').type('rajeevmc77@gmail.com');
    // cy.get('.modal-body > .col-md-12 > .ng-dirty > .row:nth-child(2) > .form-control').type('Manooja1');
    // cy.get('.col-md-12 > .ng-dirty > div > .coloumn-group > .btn-theme:nth-child(1)').click();

  });
});
