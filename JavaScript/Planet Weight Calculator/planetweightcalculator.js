function calculateWeight(earthWeight, planet) {
  switch (planet) {
    case 'Mercury':
      planetWeight = earthWeight * 0.378
      break;
    case 'Venus':
      planetWeight = earthWeight * 0.907
      break;
    case 'Mars':
      planetWeight = earthWeight * 0.377
      break;
    case 'Jupiter':
      planetWeight = earthWeight * 2.36
      break;
    case 'Saturn':
      planetWeight = earthWeight * 0.916
      break;
    default: 
      planetWeight = 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
  return planetWeight;
}

console.log(calculateWeight(500, 'ag'))