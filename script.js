function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0 && income >= expenses) {
    const cost = income - expenses;

    let tax = cost * 0.2;

    return tax;
  } else {
    return 'Invalid Input';
  }
}

// console.log(calculateTax(6000, '1500'));

function sendNotification(email) {
  if (email.includes('@')) {
    const emailSpilt = email.split('@');

    const notification =
      emailSpilt[0] + ' sent you an email from ' + emailSpilt[1];

    return notification;
  } else {
    return 'Invalid Email';
  }
}

// console.log(sendNotification('sadia8icloud.com'));

function checkDigitsInName(name) {
  if (typeof name === 'string') {
    if (name.match(/[0-9]/)) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Invalid Input';
  }
}

// console.log(checkDigitsInName(['Raj']));

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

const input = {
  name: 'Rajib',
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
};

// console.log(calculateFinalScore(input));

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === 'number') {
    const arrayLength = waitingTimes.length;
    const serialLeft = serialNumber - arrayLength - 1;

    let sum = 0;
    for (let time of waitingTimes) {
      sum += time;
    }
    let average = Math.round(sum / arrayLength);

    let waitTime = serialLeft * average;

    return waitTime;
  } else {
    return 'Invalid Input';
  }
}

// const sInput = [7, 8, 3, 4, 5];
// console.log(waitingTime(sInput, 9));
