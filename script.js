function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return 'Invalid Input';
  } else {
    const cost = income - expenses;

    let tax = cost * 0.2;

    return tax;
  }
}

// console.log(calculateTax(6000, 1500));

function sendNotification(email) {
  if (email.includes('@')) {
    const emailSlice = email.split('@');

    const notification =
      emailSlice[0] + ' sent you an email from ' + emailSlice[1];

    return notification;
  } else {
    return 'Invalid Email';
  }
}

// console.log(sendNotification('sadia8icloud@gmail.com'));

function checkDigitsInName(name) {
  if (typeof name === 'string') {
    console.log('string');
  }

  return 'hello';
}
console.log(checkDigitsInName('Raj123'));
