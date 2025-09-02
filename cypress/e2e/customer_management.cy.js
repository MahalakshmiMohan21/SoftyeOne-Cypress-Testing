 it('Search using a valid customer name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Search using a valid mobile number', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.p-2\\.5').click({ force: true });
  cy.get('.w-full').type('1234567890');

cy.get('tbody').should('contain','1234567890');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

 
  it('Enter wrong mobile number format (e.g., 000)', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.p-2\\.5').click({ force: true });
  cy.get('.w-full').type('000');

cy.get('tbody').should('not.contain','000');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Add a new customer with name and mobile', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('john3');
  cy.get('#email').type('abcd@gmail.com');
  cy.get('#mobile').type('1234509876');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.wait(3000);
  cy.get('tbody').should('contain','john3');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

   it('Leave name and mobile empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
 
  cy.get('#email').type('abcd@gmail.com');
  
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.get('.justify-end > .text-red-500').click();
  cy.wait(3000);
  cy.get('body').should('contain','Please correct the form errors');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  it('Add full details for customer', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('john4');
  cy.get('#email').type('abccd@gmail.com');
  cy.get('#mobile').type('1234567891');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.wait(3000);
  cy.get('tbody').should('contain','john4');


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  it('Update customer info using same form', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get(':nth-child(1) > :nth-child(6) > .text-blue-400').click();
  cy.get('.relative > .flex > .px-4').click();
  cy.get('#address').clear().type('456 Elm St');
  cy.get('.relative > .flex > .text-white').click();


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Clear all fields and click save', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get(':nth-child(1) > :nth-child(6) > .text-blue-400').click();
  cy.get('.relative > .flex > .px-4').click();
  cy.get('#customername').clear();
  cy.get('#email').clear();
  cy.get('#mobile').clear();
  cy.get('#address').clear();
  cy.get('.relative > .flex > .text-white').should('be.disabled');
  cy.get('.flex > .text-gray-700').click();
  cy.get('.flex > .p-2').click();

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


it('Delete a customer', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get(':nth-child(3) > :nth-child(7) > .text-gray-600').click();
  cy.get('.hover\\:bg-red-100').click({ force: true });
   cy.get('.justify-end > .px-6').click();
   cy.get('body').should('not.contain','john3');
    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Try adding customer with an already existing mobile', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('john3');
  cy.get('#email').type('abcd@gmail.com');
  cy.get('#mobile').type('1234567890');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.wait(3000);
  cy.get('body').should('contain','Mobile number is already in use');
  cy.get('.justify-end > .text-red-500').click();

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  

  it('Enter wrong email format during add', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('john3');
  cy.get('#email').type('abcd@.com');
  cy.get('#mobile').type('1234519876');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.wait(3000);
  cy.get('body').should('contain','Invalid email format.');
  cy.get('.justify-end > .text-red-500').click();

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  

   it('Enter name with 100+ characters', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();

   const longName = 'JohnDoe'.repeat(15);
  cy.get('#customername').type(longName);
  cy.get('#email').type('abcd@ehg.com');
  cy.get('#mobile').type('1234599876');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.wait(3000);
  cy.get('body').then(($body) => {
  if ($body.text().includes(longName)) {
   
    cy.log(' Long name was saved – validation failed');
  } else {
    cy.log(' Long name rejected or not saved');
  }
});
  

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  


   it('Change existing mobile number', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get(':nth-child(1) > :nth-child(6) > .text-blue-400').click();
  cy.get('.relative > .flex > .px-4').click();
  

  cy.get('#mobile').clear().type('6369384987');
  
  cy.get('.relative > .flex > .text-white').click();
  cy.get('tbody').should('contain','6369384987');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  
   it('Change existing email', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get(':nth-child(1) > :nth-child(6) > .text-blue-400').click();
  cy.get('.relative > .flex > .px-4').click();
  

  cy.get('#email').clear().type('xyz@abc.com');

  cy.get('.relative > .flex > .text-white').click();
  cy.get('tbody').should('contain','xyz@abc.com');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Enter name in uppercase and search', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.p-2\\.5').click({ force: true });
  cy.get('.w-full').type('JOHN');
  cy.get('tbody').should('contain','john');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Enter partial name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.p-2\\.5').click({ force: true });
  cy.get('.w-full').type('jo');
  cy.get('tbody').should('contain','john');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Enter special characters in name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();

  cy.get('#customername').type('jo@#$');
  cy.get('#email').type('abcd@ehj.com');
  cy.get('#mobile').type('1234554321');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.wait(3000);
  cy.get('body').then(($body) => {
  if ($body.text().includes('jo@#$')) {
   
    cy.log('  name was saved – validation failed');
  } else {
    cy.log('  name rejected or not saved');
  }
});
  

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  
  it('Enter partial name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
   cy.get(':nth-child(1) > :nth-child(7) > .text-gray-600').click();
   cy.get('.MuiList-root > .text-gray-700').click();
   
   cy.get('#\\:r9\\:').click({ force: true });
   cy.wait(3000);
   cy.get('body').should('contain','Invoices');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });




    it('Add and delete customer', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('john5');
  cy.get('#email').type('abxy@gmail.com');
  cy.get('#mobile').type('0987667890');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click();
  cy.wait(3000);

  
  cy.get(':nth-child(3) > :nth-child(7) > .text-gray-600').click();
  cy.get('.hover\\:bg-red-100').click({ force: true });
   cy.get('.justify-end > .px-6').click();

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


    it('Add number with less than 10 digits', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('john6');
  cy.get('#email').type('abxyz@gmail.com');
  cy.get('#mobile').type('09876');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click({force : true});
  cy.get('.justify-end > .text-red-500').click();
  cy.wait(3000);
  cy.get('body').should('contain','Mobile number must be between 10 and 15 digits.');

  

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Enter numeric values in name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('1234');
  cy.get('#email').type('abxz@gmail.com');
  cy.get('#mobile').type('0987667891');
  cy.get('#address').type('123 Main St');
  cy.get('.justify-end > .px-6').click({force : true});
  cy.get('.justify-end > .text-red-500').click();
  cy.wait(3000);

  

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Leave address empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);

   cy.get(':nth-child(3) > .menu-item').click();
   
   cy.wait(5000);
  cy.contains('Customers Management').should('be.visible');
  cy.get('.space-x-3 > .flex').click();
  cy.get('#customername').type('john7');
  cy.get('#email').type('abxbz@gmail.com');
  cy.get('#mobile').type('0987567891');
  cy.get('.justify-end > .px-6').click();
  cy.get('.justify-end > .text-red-500').click();
  cy.wait(3000);
  

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });