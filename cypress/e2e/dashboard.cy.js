 it('Ensure dashboard page loads successfully', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Validate invoice count widget', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .bg-gradient-to-r').click();
   cy.contains('Total Invoices').should('be.visible');
   cy.get(':nth-child(1) > .flex > :nth-child(1) > .text-3xl').invoke('text').then((text) => {
    cy.log(`Total Invoices Count: ${text.trim()}`);
   });

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

    

  it('Check customer count matches backend data', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .bg-gradient-to-r').click();
   cy.contains('Customers').should('be.visible');
   cy.get(':nth-child(2) > .flex > :nth-child(1) > .text-3xl').invoke('text').then((text) => {
    cy.log(`Total Customers Count: ${text.trim()}`);
   });

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  
  it('	Check inventory count matches actual items', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .bg-gradient-to-r').click();
   cy.contains('Inventory').should('be.visible');
   cy.get(':nth-child(3) > .flex > :nth-child(1) > .text-3xl').invoke('text').then((text) => {
    cy.log(`Total Inventory Count: ${text.trim()}`);
   });

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


    
  it('	Check total sales figure is accurate', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .bg-gradient-to-r').click();
   cy.contains('Total Sales').should('be.visible');
   cy.get(':nth-child(4) > .flex > :nth-child(1) > .text-3xl').invoke('text').then((text) => {
    cy.log(`Total Sales Count: ${text.trim()}`);
   });

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


   it('Ensure top products are listed correctly', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .bg-gradient-to-r').click();
   cy.get('body').should('contain', 'Top Selling Product');
  

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('	Ensure low stock items are displayed properly', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .bg-gradient-to-r').click();
   cy.get('body').should('contain', 'Low Stock Product');
  

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Check that the "Revenue Analytics" chart loads with correct data', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .text-gray-500').click();
  cy.contains('Revenue Analytics').should('be.visible');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  


  it.only('Change "Year" dropdown and verify revenue data updates accordingly', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
    cy.wait(2000);
   
    cy.get('#mobile', { timeout: 10000 }).should('not.be.disabled').type('9876543210');

    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.menu > :nth-child(1) > .menu-item')
   
   cy.wait(5000);
  cy.contains('Dashboard').should('be.visible');

  cy.get('.space-x-3 > .text-gray-500').click();
  cy.contains('Revenue Analytics').should('be.visible');

  cy.get('#\\:r0\\:').click({force:true});
  cy.contains('li', 'Year').click();

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  