it('Verify GST Reports Page Loads Successfully for Admin', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');


    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Verify GST report generates correctly for a specific date', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');
     cy.get('.report-select').select(1);
     cy.get('.report-datepicker').click();
     cy.get('.react-datepicker__navigation--previous').click();
     cy.get('.react-datepicker__day--024').click();
     cy.get('.report-button').click();
     cy.wait(3000);


    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Verify system shows message when no data for selected date', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');
     cy.get('.report-select').select(1);
     cy.get('.report-datepicker').click();
     cy.get('.react-datepicker__day--024').click();
     cy.get('.report-button').click();
     cy.wait(3000);
    cy.get('body').should('contain','No invoices found.');

    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Verify error is shown if future date is selected', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');
     cy.get('.report-select').select(1);
     cy.get('.report-datepicker').click();
     cy.get('.react-datepicker__day--024').click();
     cy.get('.report-button').click();
     cy.wait(3000);
    cy.get('body').should('contain','No invoices found.');

    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


   it('Verify clicking "Download PDF" downloads correct file', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');
    cy.get('.report-select').select(1);
     cy.get('.report-datepicker').click();
     cy.get('.react-datepicker__navigation--previous').click();
     cy.get('.react-datepicker__day--024').click();
     cy.get('.report-button').click();
     cy.wait(3000);

     cy.get('.bg-red-600').click();


    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });




   it('Verify clicking "Download Excel" downloads correct file', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');
     cy.get('.report-select').select(1);
     cy.get('.report-datepicker').click();
     cy.get('.react-datepicker__navigation--previous').click();
     cy.get('.react-datepicker__day--024').click();
     cy.get('.report-button').click();
     cy.wait(3000);

     cy.get('.bg-green-600').click();


    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });




    it.only('Verify all records show in billing breakdown table', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');
     cy.get('.report-select').select(1);
     cy.get('.report-datepicker').click();
     cy.get('.react-datepicker__navigation--previous').click();
     cy.get('.react-datepicker__day--024').click();
     cy.get('.report-button').click();
     cy.wait(3000);

     cy.get('table').should('be.visible');
  cy.get('thead').within(() => {
   
    cy.contains('Date');
    cy.contains('Customer');
    cy.contains('Amount');
    cy.contains('GST Amount');
  });


   cy.get('tbody tr').each(($row) => {
    cy.wrap($row).within(() => {
      cy.get('td').eq(1).should('contain', '24/06/2025');
    });
  });



    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });





   it('Verify clicking "Download PDF" downloads correct file', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(6) > .menu-item').click();
    
     cy.wait(3000);

     cy.get('body').should('contain', 'GST Reports');
    cy.get('.report-select').select(1);
     cy.get('.report-datepicker').click();
     cy.get('.react-datepicker__day--024').click();
     cy.get('.report-button').click();
     cy.wait(3000);

     cy.get('.bg-red-600').click();
     cy.get('body').should('contain', 'Failed to download report. Please try again.');

    cy.get('.toggle-button2 > img').click();
 
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

