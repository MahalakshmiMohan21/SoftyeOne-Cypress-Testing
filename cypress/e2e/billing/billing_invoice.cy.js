
  it('Verify navigation from login to Invoice Report, New Invoice page, and logout functionality', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();


    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  
  it('Verify all customer input fields accept valid data', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get(':nth-child(3) > .relative > .w-full').type('user@example.com');
   cy.get(':nth-child(4) > .w-full').type('erode');

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');

   cy.get('.save-btn').click();
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  it('Enter valid mobile number and email', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get(':nth-child(3) > .relative > .w-full').type('user@example.com');
   cy.get(':nth-child(4) > .w-full').type('erode');

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   
   cy.get('.save-btn').click();
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Check required fields (Mobile No, Customer Name)', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   
   cy.get(':nth-child(3) > .relative > .w-full').type('user@example.com');
   cy.get(':nth-child(4) > .w-full').type('erode');

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   
   cy.get('.save-btn').click();
   cy.contains('Please enter the customer name').should('be.visible');
   cy.contains('Please enter the mobile number').should('be.visible');

   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  it('Auto-load customer details by 3-digit input', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john');
   cy.get(':nth-child(2) > .relative > .w-full').type('824');
   cy.get(':nth-child(3) > .relative > .w-full').type('user@example.com');
   cy.get(':nth-child(4) > .w-full').type('erode');

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   
   cy.get('.save-btn').click();
    cy.contains('Please enter a valid mobile number').should('be.visible');
   
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Verify new row is added when "Add Product" is clicked', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
    cy.get('.toggle-button2 > img').click();
   cy.get('.mt-4').click();
   cy.get('tbody tr').should('have.length.at.least', 2);
    
    cy.get('.toggle-button2 > img').click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Auto-suggest product names on typing', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
    cy.get('.toggle-button2 > img').click();
    cy.get('.relative > .table-input').type('S');
    
    cy.get('.toggle-button2 > img').click()

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  it('Calculate total price based on quantity', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
    cy.get('.toggle-button2 > img').click();
    cy.get('.relative > .table-input').type('S');
    cy.get(':nth-child(5) > .table-input').type('5');
    cy.get(':nth-child(9) > .table-input')
      .invoke('text')
      .then((text) => {
        const total = parseFloat(text.replace(/[^\d.]/g, ''));
        expect(total).to.be.greaterThan(0);
      });
    
    cy.get('.toggle-button2 > img').click()

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


   it('Subtotal updates after product added', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
    cy.get('.toggle-button2 > img').click();
   cy.get('.mt-4').click();
   cy.get('tbody tr').should('have.length.at.least', 2);
    
    cy.get('.toggle-button2 > img').click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Verify price auto-calculates total correctly', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('100');
   cy.get(':nth-child(7) > .table-input').type('10');
   cy.get(':nth-child(8) > .table-input').type('5');
    cy.get('.total > :nth-child(1) > :nth-child(2)')
  .invoke('text')
  .then((text) => {
    const total = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(total).to.be.greaterThan(0);
  });


   
   cy.get('.save-btn').click();
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Check subtotal, discount, tax, and grand total', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('3');
   cy.get(':nth-child(6) > .table-input').type('200');
   cy.get(':nth-child(7) > .table-input').type('10');
   cy.get(':nth-child(8) > .table-input').type('5');

   cy.get('.toggle-button2 > img').click();
   cy.get('.mt-4').click();
   cy.get('tbody tr').last().within(() => {
  cy.get('td').eq(1).find('input').type('shirt2');     
  cy.get('td').eq(4).find('input').type('2');           
  cy.get('td').eq(5).find('input').type('300');         
  cy.get('td').eq(6).find('input').type('5');         
  cy.get('td').eq(7).find('input').type('12');          
   });
    cy.wait(3000); 
    const expectedSubtotal = 1110.00;
  const expectedDiscount = 90.00;
  const expectedTaxAmount = 95.40;
  const expectedGrandTotal = 1205.40;

  cy.wait(5000);
   cy.get('.total > :nth-child(1) > :nth-child(2)').invoke('text').then((text) => {
    const subtotal = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(subtotal).to.eq(expectedSubtotal);
  });


  cy.get('.total > :nth-child(2) > :nth-child(2)').invoke('text').then((text) => {
    const discount = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(discount).to.eq(expectedDiscount);
  });

 
  cy.get('.total > :nth-child(5) > :nth-child(2)').invoke('text').then((text) => {
    const tax = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(tax).to.be.closeTo(expectedTaxAmount, 0.5);
  });

  
  cy.get('.total > :nth-child(6) > :nth-child(2)').invoke('text').then((text) => {
    const total = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(total).to.be.closeTo(expectedGrandTotal, 0.5);
  });

   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


 it('Verify payment and balance', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('3');
   cy.get(':nth-child(6) > .table-input').type('200');
   cy.get(':nth-child(7) > .table-input').type('10');
   cy.get(':nth-child(8) > .table-input').type('5');

   cy.get('.toggle-button2 > img').click();
   cy.get('.mt-4').click();
   cy.get('tbody tr').last().within(() => {
  cy.get('td').eq(1).find('input').type('shirt2');     
  cy.get('td').eq(4).find('input').type('2');           
  cy.get('td').eq(5).find('input').type('300');         
  cy.get('td').eq(6).find('input').type('5');         
  cy.get('td').eq(7).find('input').type('12');          
   });

    cy.wait(5000); 


   cy.wait(3000);
   cy.get('.total > :nth-child(6) > :nth-child(2)').invoke('text').then((text) => {
    const total = parseFloat(text.replace(/[^\d.]/g, ''));

    const paid=500;
    cy.log('Total:', total);
  cy.log('Paid:', paid);
 
    cy.get('.w-24').type('{moveToEnd}{leftArrow}{leftArrow}{leftArrow}{leftArrow}50');
    const expbal=(total-paid);
    cy.log('Expected Balance:', expbal);
    cy.get('.total > :nth-child(8) > :nth-child(2)').invoke('text').then((text) => {
    const bal = parseFloat(text.replace(/[^\d.]/g, ''));
     expect(bal).to.be.closeTo(expbal, 0.01); 
  });

  });


   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Tax split into CGST & SGST', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');

  const cgst=250;
  const sgst=250;
  const tax=500;



  cy.wait(5000);
   cy.get('.total > :nth-child(3) > :nth-child(2)').invoke('text').then((text) => {
    const subtotal = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(subtotal).to.eq(cgst);
  });


  cy.get('.total > :nth-child(4) > :nth-child(2)').invoke('text').then((text) => {
    const discount = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(discount).to.eq(sgst);
  });

 
  cy.get('.total > :nth-child(5) > :nth-child(2)').invoke('text').then((text) => {
    const tax = parseFloat(text.replace(/[^\d.]/g, ''));
    expect(tax).to.eq(tax);
  });

  
  

   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('User selects payment method', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');


   cy.get('.toggle-button2 > img').click();
   cy.get('input[type="radio"][value="cash"]').should('be.checked');

  
 cy.get('input[type="radio"][value="credit_card"]').check();
 cy.get('input[type="radio"][value="bank_transfer"]').check();
 cy.get('input[type="radio"][value="upi"]').check()


  
    cy.get('.save-btn').click();
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('	Verify the page refreshes after saving', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   cy.get('.save-btn').click();
   cy.contains('Please enter ').should('be.visible');

   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');

    cy.get('.save-btn').click();

   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });
  

  
  it('Print invoice using A4 style', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');

   cy.get('.print-btn').click();

  


   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });
  
  

   it('	Try to save invoice with empty Customer Name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');

   cy.get('.save-btn').click();
   cy.contains('Please enter the customer name').should('be.visible');
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('	Try to save invoice with empty mobile number', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(3) > .relative > .w-full').type('user@example.com');
   cy.get(':nth-child(4) > .w-full').type('erode');
   
   
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');

   cy.get('.save-btn').click();
   cy.contains('Please enter the mobile number').should('be.visible');
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  
  it('	Try to save invoice with empty product name', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('john2');
  
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
   
   
  

   
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');

   cy.get('.save-btn').click();
   cy.contains('Please enter the product item name').should('be.visible');
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


   it('	Try to save invoice with empty quantity', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('john2');
  
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
   
   
  

   
   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');

   cy.get('.save-btn').click();
   cy.contains('Please enter a valid quantity for the product.').should('be.visible');
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

     it('Leave Price Per Unit blank', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('john2');
  
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
   
   
  

   
   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
  

   cy.get('.save-btn').click();
  
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


   it('User selects payment method', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');


   cy.get('.toggle-button2 > img').click();
   cy.get('input[type="radio"][value="cash"]').should('be.checked');

  
 cy.get('input[type="radio"][value="credit_card"]').check();
 cy.get('input[type="radio"][value="bank_transfer"]').check();
 cy.get('input[type="radio"][value="upi"]').check()


  
    cy.get('.save-btn').click();
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Open New Invoice page and check top date area', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get('.date > :nth-child(2)').invoke('text')
    .then((displayedText) => {
      const now = new Date();
      const mm = now.getMonth() + 1;
      const dd = now.getDate();      
      const yyyy = now.getFullYear();

      const expectedPrefix = `Date: ${mm}/${dd}/${yyyy}`;
      expect(displayedText.trim()).to.include(expectedPrefix);
    });

  
    cy.get('.save-btn').click();
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

   it('Verify that invalid email formats are not accepted', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('john2');
  
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
   cy.get(':nth-child(3) > .relative > .w-full').clear().type('user@.com');
   
   
   
  

   
   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
  

   cy.get('.save-btn').click();
   cy.contains('Please enter a valid email address').should('be.visible');
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Mobile number must be exactly 10 digits', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('johnn');
  
   cy.get(':nth-child(2) > .relative > .w-full').type('2345');
   
   cy.get(':nth-child(3) > .relative > .w-full').type('user@example.com');
   cy.get(':nth-child(4) > .w-full').type('erode');

   
   
   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
  

   cy.get('.save-btn').click();
   cy.contains('Please enter a valid mobile number').should('be.visible');
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Prevent invoice save without adding any products', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);

   
   cy.get(':nth-child(1) > .w-full').type('john2');
  
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
   
   

   cy.get('.save-btn').click();
   cy.contains('Please enter a product item name').should('be.visible');
  
   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Verify Default Payment Method is "Cash" on New Invoice Page', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(2000);
    cy.get('.toggle-button2 > img').click().click();

   cy.get(':nth-child(2) > .menu-item').click();
   cy.get('.gap-2 > .flex').click();
   cy.wait(5000);
   cy.get(':nth-child(1) > .w-full').type('john2');
   cy.get(':nth-child(2) > .relative > .w-full').type('9876543210');
   cy.get('.absolute > .bg-gray-100').first().click();
  

   cy.get('.relative > .table-input').type('Shirt');
   cy.get(':nth-child(5) > .table-input').type('5');
   cy.get(':nth-child(6) > .table-input').type('200');
  
   cy.get(':nth-child(8) > .table-input').type('50');


   cy.get('.toggle-button2 > img').click();
   cy.get('input[type="radio"][value="cash"]').should('be.checked');

   cy.wait(3000);

    cy.get('.toggle-button2 > img').click().click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });





   