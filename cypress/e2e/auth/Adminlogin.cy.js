describe('Verify user can login with valid credentials', () => {
  it('Verify the Login with valid details', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
  });
});

describe('Verify invalid login attempt', () => {
  it('Login with incorrect password', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@');

    cy.get('.login-button').click();
  });
});

describe('Validate login with empty fields', () => {
  it('Attempt login with empty mobile and password', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    

    cy.get('.login-button').click();
  });
});


describe('Check mobile number  format validation', () => {
  it('Check mobile number format validation', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('abcd938@');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
  });
});


describe('Verify password visibility toggle', () => {
  it('Check the show/hide password feature', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    
    cy.get('#password').type('maha@123');
    cy.get('.password-toggle-btn').click();
    cy.wait(5000);
    cy.get('.password-toggle-btn').click();
    
  });
});


describe('Verify input fields accept max length characters', () => {
  it('Test max length validation on email and password', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   

    const lnum='2'.repeat(15);
    const lpass='a'.repeat(100);

    cy.get('#mobile').type(lnum);
    cy.get('#password').type(lpass);

    cy.get('.login-button').click();
  });
});

describe('Validate login with empty fields', () => {
  it('Attempt login with empty mobile and password', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   

    cy.get('.login-button').click();
  });
});


describe('Check mobile number  format validation', () => {
  it('Check mobile number format validation', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('abcd938@');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
  });
});

describe('Verify password visibility toggle', () => {
  it('Check the show/hide password feature', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    
    cy.get('#password').type('maha@123');
    cy.get('.password-toggle-btn').click();
    cy.wait(5000);
    cy.get('.password-toggle-btn').click();
    
  });
});

describe('Verify user can login with valid credentials', () => {
  it('Verify the Login with valid details', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
  });
});