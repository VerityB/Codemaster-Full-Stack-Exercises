function tipCalculator(quality, totalCost) { 
  if (quality === 'bad') {
    var tip = totalCost * 0.05;
    return tip;
  } else if (quality === 'ok') {
    var tip = totalCost * 0.15;
    return tip;
  } else if (quality === 'good') {
    var tip = totalCost * 0.2;
    return tip;
  } else if (quality === 'excellent') {
    var tip = totalCost * 0.3;
    return tip;
  } else {
    var tip = totalCost * 0.18;
    return tip;
  }

}