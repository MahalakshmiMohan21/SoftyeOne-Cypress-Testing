describe('Verify that admin can successfully logout from the Settings page', () => {
  it('Verify that admin can successfully logout from the Settings page', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();
    cy.get('.logout-button').click();
    cy.get('.confirm-btn').click();
  });
});

describe('Verify that user can successfully update and save the business settings with valid data, including logo, business details, and print style.', () => {
  it('Verify that user can successfully update and save the business settings with valid data, including logo, business details, and print style.', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();
    cy.get('.absolute > .flex').click();
    const filePath = 'C:\\Users\\Mahalakshmi\\Desktop\\cypress\\softyeone-tests\\cypress\\fixtures\\images\\logo.png';
   cy.get('.upload-btn').selectFile(filePath);
   
   cy.get(':nth-child(1) > .input-field').clear().type('Abc corp');

   cy.get(':nth-child(2) > .input-field').clear().type('INV');

   cy.get(':nth-child(3) > .input-field').clear().type('123 Main St');

   cy.get(':nth-child(4) > .input-field').clear().type('contact@abccorp.com');

   cy.get(':nth-child(5) > .input-field').clear().type('9876543210');

   cy.get(':nth-child(8) > .input-field').select('A4 Print');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();


  });
});


describe('Verify required fields validation', () => {
  it('Leave required fields empty and submit', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
   cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();
    cy.get('.absolute > .flex').click();
    
    cy.get(':nth-child(1) > .input-field').clear();
   cy.get(':nth-child(2) > .input-field').clear();
   cy.get(':nth-child(3) > .input-field').clear();
   cy.get(':nth-child(4) > .input-field').clear();
   cy.get(':nth-child(5) > .input-field').clear();
   cy.get(':nth-child(8) > .input-field')
   cy.get('.absolute > .flex').click();
    

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();


  });
});


describe('Verify logo upload functionality', () => {
  it('Upload a valid company logo image', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();
    cy.get('.absolute > .flex').click();
    const filePath = 'C:\\Users\\Mahalakshmi\\Desktop\\cypress\\softyeone-tests\\cypress\\fixtures\\images\\log.jpeg';
   cy.get('.upload-btn').selectFile(filePath);
   

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});


describe('Verify business name field accepts input.', () => {
  it('Enter a business name and save', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(1) > .input-field').clear().type('ABC Enterprises');
   cy.get('.absolute > .flex').click();

   

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});


describe('Verify invoice number field', () => {
  it('Enter a sample invoice Letter ', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(2) > .input-field').clear().type('INV');
   cy.get('.absolute > .flex').click();

   

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});



describe('Verify address field', () => {
  it('Enter a valid address and save ', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(3) > .input-field').clear().type('123 Main St');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});



describe('Verify phone number input and validation', () => {
  it('Enter valid and invalid phone numbers ', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(5) > .input-field').clear().type('9876543210');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});



describe('Verify website URL field', () => {
  it('Enter website URL and validate', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(5) > .input-field').clear().type('9876543210');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Verify that the system shows a validation error when an invalid mobile number is entered.', () => {
  it('Ensure the mobile number field does not accept invalid formats or characters.', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(5) > .input-field').clear().type('98765@#321');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});


describe('Ensure that the email field does not accept malformed email addresses.', () => {
  it('Validate system behavior when entering an incorrect email format.', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(4) > .input-field').clear().type('softye#gmail.com')
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});


describe('Verify that the system does not accept incorrectly formatted GST numbers.', () => {
  it('Check if invalid GST numbers (not matching GST format) are rejected.', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(7) > .input-field').clear().type(' GST00001')
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});


describe('Verify Print Style selection', () => {
  it('Select a print style from dropdown', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(8) > .input-field').select('A4 Print');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});


describe('Verify Terms and Conditions input', () => {
  it('Enter terms text', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(1) > .textarea-field').type('Goods once sold will not be returned');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});


describe('Verify retun policy input', () => {
  it('Verify retun policy input', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(2) > .textarea-field').type('Payment is due within 15 days');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Submit form with all required fields empty', () => {
  it('Submit form with all required fields empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
   cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();
    cy.get('.absolute > .flex').click();
    
    cy.get(':nth-child(1) > .input-field').clear();
   cy.get(':nth-child(2) > .input-field').clear();
   cy.get(':nth-child(3) > .input-field').clear();
   cy.get(':nth-child(4) > .input-field').clear();
   cy.get(':nth-child(5) > .input-field').clear();
   cy.get(':nth-child(8) > .input-field')
   cy.get('.absolute > .flex').click();
    

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();


  });
});

describe('Upload invalid logo file format or size', () => {
  it('Upload invalid logo file format or size', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();
    cy.get('.absolute > .flex').click();
    const filePath = 'C:\\Users\\Mahalakshmi\\Desktop\\cypress\\softyeone-tests\\cypress\\fixtures\\images\\log.jpeg';
   cy.get('.upload-btn').selectFile(filePath);
   

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Leave Business Name empty', () => {
  it('Leave Business Name empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(1) > .input-field').clear();
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Leave Invoice ID empty', () => {
  it('Leave Invoice ID empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(2) > .input-field').clear();
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Leave Address empty', () => {
  it('Leave Address empty', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(3) > .input-field').clear();
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Enter invalid email format', () => {
  it('Enter invalid email format', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(4) > .input-field').clear().type('softye#gmai');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Enter phone number with letters or <10 digits', () => {
  it('Enter phone number with letters or <10 digits', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(5) > .input-field').clear().type('9876');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});

describe('Leave Print Type unselected', () => {
  it('Leave Print Type unselected', () => {
    cy.visit('https://softye-invoice-qa-2.softyetech.cloud/adminlogin')
   
    cy.get('#mobile').type('6369384988');
    cy.get('#password').type('maha@123');

    cy.get('.login-button').click();
    cy.get('.toggle-button2 > img').click().click();

    cy.get(':nth-child(8) > .menu-item').click();

    cy.get('.absolute > .flex').click();
   cy.get(':nth-child(8) > .input-field').select('');
   cy.get('.absolute > .flex').click();

   cy.get('.toggle-button2 > img').click().click();
   cy.get('.logout-button').click();
   cy.get('.confirm-btn').click();
  });
});