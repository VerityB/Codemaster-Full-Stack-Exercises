function finalGrade(a, b, c) {
  var average = (a + b + c) / 3;
  if (average < 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >=80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  } else if ((a || b || c) < 0 || (a || b || c) > 100) {
    return 'You have entered an invalid grade';
  }
    
}