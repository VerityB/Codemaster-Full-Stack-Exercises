function getSleepHours (day) {
  switch (day) {
    case ('Monday'):
      return 8;
      break;
    case ('Tuesday'):
      return 6;
      break;
    case ('Wednesday'):
      return 5;
      break;
    case ('Thursday'):
      return 4;
      break;
    case ('Friday'):
      return 9;
      break;
    case ('Saturday'):
      return 11;
      break
    case ('Sunday'):
      return 10;;
      break;
  }
}

/*TEST console.log(getSleepHours('Sunday')); */

function getActualSleepHours () {
  var totalSleepHours =
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
  
  return totalSleepHours;
}

/*TEST console.log(getActualSleepHours()); */

function getIdealSleepHours() {
  idealHours = 8;
  return idealHours * 7;
}
/* TEST
console.log(getActualSleepHours());
console.log(getIdealSleepHours()); */

function calculateSleepDebt () {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  var msg = msg + "";
  if (actualSleepHours === idealSleepHours) {
    return msg = 'You got the perfect amount of sleep! You slept ' + actualSleepHours + ' hours.' 
    } else if (actualSleepHours > idealSleepHours) {
      return msg = 'You got too much sleep! You slept for ' + (actualSleepHours - idealSleepHours) + ' more hours than ideal.'
    } else {
      return msg = 'You didn\'t get enough sleep this week! You slept for ' + (idealSleepHours - actualSleepHours) + ' less hours than ideal.'
    }
}

console.log(calculateSleepDebt());