function distanceFromHqInBlocks(street) {
  let distance, absDistance;

  distance = street - 42;
  absDistance = Math.abs(distance);
  return absDistance;
}

function distanceFromHqInFeet(street) {
  let blocksFromHq, distanceInFeet;

  blocksFromHq = distanceFromHqInBlocks(street);
  distanceInFeet = blocksFromHq * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, end) {
  let distance, absDistance, distanceInFeet;

  distance = end - start;
  absDistance = Math.abs(distance);
  distanceInFeet = absDistance * 264;
  return distanceInFeet;
}

function calculatesFarePrice(start, end) {
  let distance, fare;
  
  distance = distanceTravelledInFeet(start, end);
  
  if (distance < 400) {
    fare = 0;
  } else if (distance >= 400 && distance <= 2000) {
    fare = 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
  return fare 
}
