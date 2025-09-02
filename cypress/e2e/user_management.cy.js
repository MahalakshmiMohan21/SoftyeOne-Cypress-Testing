it('Verify navigation to "Add User" page from User Management dropdown', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();

    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



it('Register user with valid credentials', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('User registered successfully').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Register user with valid credentials', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


   
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
  
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });




  it('Try registering without entering password', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test1');
    cy.get('.um-user-form > .um-btn').click();
    
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Register with mismatched confirm password', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test1');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123457');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('Passwords do not match!').should('be.visible');
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Register with password less than 6 characters', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test1');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('1234');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('1234');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('Password must be at least 6 characters long.').should('be.visible');
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Try registering with an existing username', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('Username already exists.').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Enter same values in both password fields', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');

    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

 it('Use alphanumeric value as username', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test123');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('User registered successfully').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });

  
  it('Use special characters in username', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test@123');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('User registered successfully').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



 
 

  it('Enter very long username', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();

 const longName = 'testtest'.repeat(15);
    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type(longName);
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.get('body').then(($body) => {
  if ($body.text().includes(longName)) {
   
    cy.log(' Long name was saved – validation failed');
  } else {
    cy.log(' Long name rejected or not saved');
  }
});
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Try submitting form without entering any data', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > .um-btn').click();
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Check new user appears in Registered Users', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test3');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.get('body').should('contain','test3');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });




   it('Click reset password for user', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();

    cy.get(':nth-child(1) > .um-actions-cell > .um-btn-reset').click();
    cy.contains('Reset User Password').should('be.visible');
    cy.wait(3000);
    cy.get('.um-btn-secondary').click();    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Click delete next to user and confirm', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();
     cy.get(':nth-child(2) > .um-actions-cell > .um-btn-delete').click();

    cy.wait(3000);
      cy.contains('User deleted successfully!').should('be.visible');
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Add more than 5 users and check pagination', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();
    
    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test4');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(2000);

    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test5');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(2000);

    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test6');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(2000);

     cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test7');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(2000);

     cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test8');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(2000);

     cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test9');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(2000);
 
     cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test10');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(2000);

    cy.get('.gap-2 > :nth-child(4)').click();
    cy.wait(3000);
    cy.get('.flex-col > .gap-2 > :nth-child(2)').click();


    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Press Enter after filling form', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test11');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456{enter}');

    cy.contains('User registered successfully').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Check confirmation after successful registration', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();

    cy.wait(3000);
    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test13');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(3000);
    cy.contains('User registered successfully').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  
     it('Check duplicate name case sensitivity', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();

    cy.wait(3000);
    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('TEST13');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(3000);

     cy.get('body').then(($body) => {
  if ($body.text().includes('Username already exists')) {

    cy.log(' registration failed');
  } else {
    cy.log(' registration successfull and validation failed');
  }
});

    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



   it('Enter an existing username and try to register again', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('Username already exists.').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });




  it('Enter less than 6 characters in password field', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test1');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('1234');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('1234');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('Password must be at least 6 characters long.').should('be.visible');
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Enter less than 6 characters in confirm password field', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test1');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('1234');
    cy.get('.um-user-form > .um-btn').click();
    cy.contains('Password must be at least 6 characters long.').should('be.visible');
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });


  it('Add user with valid username, password, and permissions', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();

    cy.wait(3000);
    cy.get('.um-user-form > :nth-child(1) > .um-form-input').type('test13');
    cy.get('.um-user-form > :nth-child(2) > .um-form-input').type('123456');
    cy.get('.um-user-form > :nth-child(3) > .um-form-input').type('123456');
    cy.get('.um-user-form > .um-btn').click();
    cy.wait(3000);
    cy.contains('User registered successfully').should('be.visible');
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });



  it('Try submitting Add User form without filling required fields', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin');
   
    cy.get('#mobile').type('9876543210');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.wait(5000);
    cy.get(':nth-child(5) > :nth-child(1) > .menu-item').click();
     cy.contains('Add User').click();
     cy.wait(3000);
    cy.get('.toggle-button2 > img').click();


    cy.get('.um-user-form > .um-btn').click();
    
    cy.wait(3000);
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });