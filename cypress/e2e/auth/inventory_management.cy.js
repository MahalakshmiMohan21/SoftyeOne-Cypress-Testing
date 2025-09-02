describe('Navigate to Inventory Management', () => {
  it('Verify navigation to Inventory Management page', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();
    cy.url().should('include', '/settings');
    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });
});


 it('Verify user can add a valid product', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').click();

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });

  it('Add product with missing required fields', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    

    cy.get('.py-4 > .text-white').click();
    cy.get('.p-1').click();

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });

   it('Verify user can edit a products details', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();
    cy.wait(5000);
    cy.get('.space-x-2 > .px-3').click();
    cy.get('.grid > :nth-child(9)').clear().type('45');
    cy.get('.bg-indigo-600').click();
    cy.get('.border-t-2 > .px-4').click();

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });

  it('Validate product info is displayed properly', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();
    cy.wait(5000);
    
    cy.get('.border-t-2 > .px-4').click();

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });



  it('Ensure a product can be deleted', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(8) > .text-gray-600').click();
    
    cy.get('.MuiList-root > .MuiButtonBase-root').click();
    
    cy.get('.justify-end > .rounded-md').click();
    cy.wait(5000);

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Only 10 products shown per page', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');
    const pno=12;

    for(let i=0;i<pno;i++){
       cy.get('.css-1yvinop > .MuiBox-root > .flex').click();
    cy.get(':nth-child(1) > .w-full').type(`Test Product ${i}`);
    cy.get(':nth-child(2) > .w-full').type('test catagory');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('40');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');
    cy.get('.py-4 > .text-white').click();
    
    }
    cy.wait(4000);

    cy.get(':nth-child(10) > :nth-child(8) > .text-gray-600').scrollIntoView().should('be.visible');

   

    cy.get('.gap-2 > :nth-child(4)').click();
     cy.wait(7000);
    cy.get(':nth-child(1) > :nth-child(8) > .text-gray-600').scrollIntoView().should('be.visible');
    cy.wait(3000);



     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


it('Product ID sequencing', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    
    cy.get('tbody > tr > :nth-child(2)').then($cells => {
      const productIds = [...$cells].map(cell => cell.innerText.trim());

     
      expect(productIds.every(id => id !== '')).to.be.true;

     
      const uniqueIds = new Set(productIds);
      expect(uniqueIds.size).to.equal(productIds.length);
    });



     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


 it('Enter product name in search', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');
    cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1szq0qx').type('Test Product 1', { delay: 100 });
    


    cy.wait(5000);

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });

  it('Search by Product ID', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');
    cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1szq0qx').type('PROD003', { delay: 100 });
    


    cy.wait(5000);

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Check product ID sequencing', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    
    cy.wait(5000);

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Verify that the system does not allow saving a product with a negative cost price', () => {
 
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('-3');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('39089010');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    cy.contains('cost Price cannot be negative').should('be.visible');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


   it('Verify that the system does not allow saving a product without a name during', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();
    cy.wait(5000);
    cy.get('.space-x-2 > .px-3').click();

    cy.get('.grid > :nth-child(1)').clear();
   
    cy.get('.space-x-2 > .bg-indigo-600').click();
    cy.contains('Please fill the productname.').should('be.visible');
    cy.get('.border-t-2 > .px-4').click();

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


   it('Ensure cancel button works as expected during product addition', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Cancel Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');

    cy.get('.py-4 > .text-gray-700').click();
    
     cy.get('body').should('not.contain', 'Canceled Product');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


it('Ensure cancel button works as expected during product edit', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();


    cy.get(':nth-child(1) > .w-full').type('Cancel Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');

    cy.get('.py-4 > .text-gray-700').click();
    
     cy.get('body').should('not.contain', 'Canceled Product');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Verify discount field accepts valid numbers', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('20');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').click();

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Verify tax % field accepts valid numbers', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('20');
    cy.get(':nth-child(12) > .w-full').type('32');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').click();

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


   it('Validate basic product operations', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();
    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('20');
    cy.get(':nth-child(12) > .w-full').type('32');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');
    cy.get('.py-4 > .text-white').click();


   cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();
   cy.get('.space-x-2 > .px-3').click();
    cy.get('.pt-4 > .grid > :nth-child(1) > .w-full').clear().type(' Product');
    cy.get('.pt-4 > .grid > :nth-child(2) > .w-full').clear().type('Stationery');
    cy.get('.pt-4 > .grid > :nth-child(9) > .w-full').clear().type('3');
    cy.get('.space-x-2 > .bg-indigo-600').click();
    cy.get('.border-t-2 > .px-4').click();



cy.get(':nth-child(1) > :nth-child(8) > .text-gray-600').click();
    cy.get('.MuiList-root > .MuiButtonBase-root').click();
    cy.get('.justify-end > .rounded-md').click();
    cy.wait(5000);



     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Validate partial name search', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');
    cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1szq0qx').type('Test', { delay: 100 });
    cy.get('body').should('contain', 'Test');
    


    cy.wait(5000);

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Validate special characters in search', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');
    cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1szq0qx').type('@', { delay: 100 });
    
    


    cy.wait(5000);

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Edit product stock quantity', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();
    cy.wait(5000);
    cy.get('.space-x-2 > .px-3').click();

    cy.get(':nth-child(14) > .w-full').clear().type('200');
   
    cy.get('.space-x-2 > .bg-indigo-600').click();
    
    cy.get('.border-t-2 > .px-4').click();
    cy.contains('Product details updated successfully').should('be.visible');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Validate product deletion and ID unavailability', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').then(($cell)=>{
      const pname=$cell.text().trim();

      cy.get(':nth-child(1) > :nth-child(8) > .text-gray-600').click();
    
    cy.get('.MuiList-root > .MuiButtonBase-root').click();
    
    cy.get('.justify-end > .rounded-md').click();
    cy.wait(5000);
    cy.get('tbody').should('not.contain.text', pname);

    })

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Add product with empty Product Name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    cy.wait(2000);
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Add product with empty Category', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('test product');
    
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    cy.wait(2000);
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


    it('Add product with empty Selling Price', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('test product');
     cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    cy.wait(2000);
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Add product with negative Cost Price', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('-3');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('39089010');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    cy.contains('cost Price cannot be negative').should('be.visible');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Add product with non-numeric Selling Price', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('43');
    cy.get(':nth-child(10) > .w-full').type('abc');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('39089010');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
   

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Add product with 1000% discount', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('43');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('1000');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('39089010');
    cy.get(':nth-child(14) > .w-full').type('100');

    
    cy.contains('discount cannot exceed 100%').should('be.visible');
    cy.get('.py-4 > .text-white').click()
    cy.get('.py-4 > .text-gray-700').click();
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Add product with special characters in name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('@#$$%');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('43');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('10');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('39089010');
    cy.get(':nth-child(14) > .w-full').type('100');

    
    
    cy.get('.py-4 > .text-white').click()
    cy.get('.py-4 > .text-gray-700').click();
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


   it('Add product with negative stock quantity', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('Test Product');
    cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('45');
    cy.get(':nth-child(10) > .w-full').type('50');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('18');
    cy.get(':nth-child(13) > .w-full').type('39089010');
    cy.get(':nth-child(14) > .w-full').type('-9');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    cy.contains('stock Quantity cannot be negative').should('be.visible');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


   it('Edit product and clear required fields', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();
    cy.wait(5000);
    cy.get('.space-x-2 > .px-3').click();

    cy.get(':nth-child(10) > .w-full').clear();
   
    cy.get('.space-x-2 > .bg-indigo-600').click();
    
    cy.get('.border-t-2 > .px-4').click();
    cy.contains('Please fill the sellingprice').should('be.visible');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


   it('Edit product with invalid values', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > .relative > .text-blue-400 > [data-testid="VisibilityIcon"] > path').click();
    cy.wait(5000);
    cy.get('.space-x-2 > .px-3').click();

    cy.get(':nth-child(9) > .w-full').clear().type('abcd');
   
    cy.get('.space-x-2 > .bg-indigo-600').click();
    
    cy.get('.border-t-2 > .px-4').click();
    cy.contains('Please fill the costprice').should('be.visible');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Submit form with only stock filled', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    
    cy.get(':nth-child(14) > .w-full').type('300');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it('Search product with random special characters', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');
    cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1szq0qx').type('@', { delay: 100 });
    
    


    cy.wait(5000);

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();


  });


  it('Add product with empty Tax %', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('test product');
     cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('45');
    cy.get(':nth-child(11) > .w-full').type('5');
    
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').should('be.disabled');
    cy.get('.py-4 > .text-gray-700').click();
    cy.wait(2000);
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });

    it('Add product with 150% tax', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    cy.get(':nth-child(1) > .w-full').type('test product');
     cy.get(':nth-child(2) > .w-full').type('Stationery');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('45');
    cy.get(':nth-child(11) > .w-full').type('5');
    cy.get(':nth-child(12) > .w-full').type('150');
    cy.get(':nth-child(13) > .w-full').type('12345678');
    cy.get(':nth-child(14) > .w-full').type('100');

    cy.get('.py-4 > .text-white').click();
    cy.get('.py-4 > .text-gray-700').click();
    cy.wait(2000);
    cy.get('body').should('not.contain','test product');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


   it('Add product with all fields empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();


    

    cy.get('.py-4 > .text-white').click();
    cy.get('.p-1').click();

    cy.contains('Merchant ID and product fields are required').should('be.visible');

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });



  it('Add product with all fields empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();

    const productName = 'Refresh Test Product';
    cy.get(':nth-child(1) > .w-full').type(productName);
    cy.get(':nth-child(2) > .w-full').type('Test Category'); 
    cy.get(':nth-child(9) > .w-full').type('35'); 
    cy.get(':nth-child(10) > .w-full').type('40');
    cy.get(':nth-child(11) > .w-full').type('5');  
    cy.get(':nth-child(12) > .w-full').type('18'); 
    cy.get(':nth-child(13) > .w-full').type('12345678'); 
    cy.get(':nth-child(14) > .w-full').type('100'); 
    cy.reload();

     cy.get('.css-1yvinop > .MuiBox-root > .flex').click(); 
    cy.get(':nth-child(1) > .w-full').should('have.value', '');
    cy.get('.p-1').click();

    cy.get('body').should('not.contain', productName);
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });


  it.only('Add product with all fields empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(4) > .menu-item').click();
    
    cy.get('.text-3xl',{ timeout:10000 }).should('be.visible');

    cy.get('.css-1yvinop > .MuiBox-root > .flex').click();

    const longProductName = 'P'.repeat(150); 
    cy.get(':nth-child(1) > .w-full').type(longProductName);

   
    cy.get(':nth-child(2) > .w-full').type('Test Category');
    cy.get(':nth-child(9) > .w-full').type('35');
    cy.get(':nth-child(10) > .w-full').type('40'); 
    cy.get(':nth-child(11) > .w-full').type('5');  
    cy.get(':nth-child(12) > .w-full').type('18'); 
    cy.get(':nth-child(13) > .w-full').type('12345678'); 
    cy.get(':nth-child(14) > .w-full').type('100'); 

   
    cy.get('.py-4 > .text-white').click({ force: true });
     cy.get('.p-1').click();
    
    cy.wait(3000);

   
    cy.get('body').then($body => {
      if ($body.text().includes('maximum length')) {
        cy.log('Validation message appeared for max length');
      } else {
       
        cy.get(':nth-child(4) > .menu-item').click();
        cy.wait(2000);
        cy.get('body').should('not.contain', longProductName);
      }
    });
    

     cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();

  });