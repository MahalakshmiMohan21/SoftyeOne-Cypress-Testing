 it('Navigate to invoice reports', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Validate search with partial customer name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');

  cy.get('.rounded-xl > :nth-child(1) > .flex-col > .gap-2 > .bg-white').click();
  cy.get('.w-full').type('john2');
  cy.get('body').should('contain.text', 'john2');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });





   it('Search using valid Invoice ID', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');

  cy.get('.rounded-xl > :nth-child(1) > .flex-col > .gap-2 > .bg-white').click();
  cy.get('.w-full').type('INV020');
  cy.get('tbody').should('contain.text', 'INV020');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Search using lowercase/uppercase mix', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');

  cy.get('.rounded-xl > :nth-child(1) > .flex-col > .gap-2 > .bg-white').click();
  cy.get('.w-full').type('JOHN2');
  cy.get('tbody').should('contain.text', 'john2');

  cy.get('.w-full').clear().type('john2');
  cy.get('tbody').should('contain.text', 'john2');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Search invalid name/ID', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');

  cy.get('.rounded-xl > :nth-child(1) > .flex-col > .gap-2 > .bg-white').click();
  cy.get('.w-full').type('abc');
  cy.get('tbody').should('contain.text', 'No invoices found');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Delete invoice and confirm', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');
cy.get(':nth-child(1) > .text-right > .relative').click();
cy.get('.MuiList-root > :nth-child(3)').click();
cy.get('.bg-red-600').click();
cy.contains('Invoice deleted successfully').should('be.visible');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Cancel delete confirmation', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');
cy.get(':nth-child(1) > .text-right > .relative').click();
cy.get('.MuiList-root > :nth-child(3)').click();
cy.get('.bg-gray-200').click();
cy.contains('Invoice deleted successfully').should('not.exist');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Check if invoices sorted by descending ID', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.get('tbody tr td:nth-child(3)')  
    .then(($cells) => {
      const ids = [...$cells].map(cell => cell.innerText.trim());

      const numericIds = ids.map(id => parseInt(id.replace(/\D/g, '')));

      const sorted = [...numericIds].sort((a, b) => b - a);

      expect(numericIds).to.deep.equal(sorted);
    });



    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


   it('Navigate back', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.get('.gap-1 > :nth-child(6)').click();

  cy.get('tbody tr').should('have.length.at.most', 10); 

  
  cy.get('.gap-1 > :nth-child(2)').click();

  cy.get('tbody tr').should('have.length.at.most', 10);



    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  it('Search invalid name/ID', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');

  cy.get('.rounded-xl > :nth-child(1) > .flex-col > .gap-2 > .bg-white').click();
  cy.get('.w-full').type('@#$%');
  cy.get('tbody').should('contain.text', 'No invoices found');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('	Delete invoice → Try search again', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');
cy.get(':nth-child(1) > .text-right > .relative').click();
cy.get('.MuiList-root > :nth-child(3)').click();
cy.get('.bg-red-600').click();
cy.contains('Invoice deleted successfully').should('be.visible');
cy.get('.rounded-xl > :nth-child(1) > .flex-col > .gap-2 > .bg-white').click();
 cy.get('.w-full').type('INV020');
  cy.get('tbody').should('contain.text', 'No invoices found');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });




   it('Delete invoice → Try search again', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('All Invoices').should('be.visible');
cy.get(':nth-child(1) > .text-right > .relative').click();
cy.get('.MuiList-root > :nth-child(1)').click();



    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

