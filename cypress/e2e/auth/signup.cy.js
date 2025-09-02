describe('validate user sign-up functionality', () => {
  it('verify user can successfully signup with valid data', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();
    cy.wait(5000);
    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('6369384988');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@softyetech.com');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('maha@123');
    cy.get(':nth-child(8) > .input-field').type('maha@123');

    cy.get('.signup-button').click();
  });
});

describe('validate required field validations',()=>{
  it('verify required fields show error when empty',()=>{
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();

    cy.get('.signup-button').click();

    cy.get('form').within(() => {
      cy.get(':nth-child(1) > .input-field')
        .should('have.prop', 'validationMessage')
        .and('include', 'Please fill out this field'); 
    });

  });
});

describe('validate email format',()=>{
  it('verify error shown for invalid email format',()=>{
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();

    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('6369384988');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('maha@123');
    cy.get(':nth-child(8) > .input-field').type('maha@123');

    cy.get('.signup-button').click();
  });
});

describe('validate mobile number field',()=>{
  it('verify mobile number allows only 10 digits',()=>{
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();

    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('63693jfgbfd5');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@softyetech.com');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('maha@123');
    cy.get(':nth-child(8) > .input-field').type('maha@123');

    cy.get('.signup-button').click();

    

  });
});


describe('Validate password confirmation', () => {
  it('Verify password and confirm password must match', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();
    
    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('6369384988');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@softyetech.com');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('maha@123');
    cy.get(':nth-child(8) > .input-field').type('m@123');

    cy.get('.signup-button').click();
  });
});

describe('Verify weak passwords are rejected', () => {
  it('Validate password strength', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();
    
    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('6369384988');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@softyetech.com');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('123');
    cy.get(':nth-child(8) > .input-field').type('123');

    cy.get('.signup-button').click();
  });
});

describe('Verify system blocks duplicate email', () => {
  it('Verify system blocks duplicate email', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();
    
    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('6369384988');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@softyetech.com');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('maha@123');
    cy.get(':nth-child(8) > .input-field').type('maha@123');

    cy.get('.signup-button').click();
  });
});

describe('Validate category and subcategory dropdown', () => {
  it('Verify category selection auto-filters subcategory', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();
    
   
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').should('not.be.disabled');
    

    cy.get('.signup-button').click();
  });
});

describe('Validate form reset functionality',()=>{
  it('Verify user can clear/reset the form',()=>{
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();

    cy.get('.signup-button').click();

    

  });
});


describe('Verify validation for invalid email format during sign-up',()=>{
  it('Verify validation for invalid email format during sign-up',()=>{
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();

    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('6369384988');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('maha@123');
    cy.get(':nth-child(8) > .input-field').type('maha@123');

    cy.get('.signup-button').click();
  });
});


describe('	Validate user sign-up functionality', () => {
  it('Verify user can successfully sign up with valid data', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
    cy.get(':nth-child(2) > .signup-link').click();
    
    cy.get(':nth-child(1) > .input-field').type('Softye tech');
    cy.get(':nth-child(2) > .input-field').type('Mahalakshmi M');
    cy.get(':nth-child(3) > .input-field').type('6369384988');
    cy.get(':nth-child(4) > .input-field').type('mahalakshmi@softyetech.com');
    cy.get(':nth-child(5) > .input-field').select('Services');
    cy.get(':nth-child(6) > .input-field').select('IT Support');
    cy.get(':nth-child(7) > .input-field').type('maha@123');
    cy.get(':nth-child(8) > .input-field').type('maha@123');

    cy.get('.signup-button').click();
  });
});


