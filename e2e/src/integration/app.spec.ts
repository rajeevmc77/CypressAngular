import { getGreeting } from '../support/app.po';

describe('Load Test App', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to Myp');
  });
});
