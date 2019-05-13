function howOld (age, year) {
 var currentYear = 2019;
  if (year  > currentYear) {
    return 'You will be ' + ((year - currentYear) + age) + ' in the year ' + year;
  } else if (year < (currentYear - age)) { 
    return 'The year ' + year + ' was ' + ((currentYear - age) - year) + ' years before you were born'
  } else if (year > (currentYear - age)) {
    return 'You were ' + (age - (currentYear - year))+ ' in the year ' + year;
             }
}
console.log(howOld(25, 1998));