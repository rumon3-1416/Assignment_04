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
  if (typeof name !== 'string') {
    return 'Invalid Input';
  } else if (name.match(/[0-9]/)) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkDigitsInName('Raj'));

function calculateFinalScore(obj) {
  if (
    typeof obj === 'object' &&
    obj.testScore <= 50 &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily === 'boolean'
  ) {
    const testScore = obj.testScore;
    const schoolScore = obj.schoolGrade;
    const farmerScore = obj.isFFamily ? 20 : 0;

    let totalScore = testScore + schoolScore + farmerScore;

    return totalScore >= 80 ? true : false;
  } else {
    return 'Invalid Input';
  }
}

// const input = {
//   name: 'Rajib',
//   testScore: 40,
//   schoolGrade: 20,
//   isFFamily: true,
// };
// console.log(calculateFinalScore(input));
