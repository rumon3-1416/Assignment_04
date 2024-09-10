function calculateTax(income, expense) {
  if (income < 0 || expense < 0 || expense > income) {
    return 'Invalid Input';
  } else {
    const cost = income - expense;

    let tax = cost * 0.2;

    return tax;
  }
}

// console.log(calculateTax(6000, 1500));

function sendNotification(email) {
  // const

  console.log(email);
}

sendNotification('zihad.ph@gmail.com');
