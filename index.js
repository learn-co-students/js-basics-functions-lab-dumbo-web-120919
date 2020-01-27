// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
  if (pickUp > 42){
  return pickUp - 42;
} else{
  return 42 - pickUp;
  }
}

function distanceFromHqInFeet(num){
 return distanceFromHqInBlocks(num) * 264; 
}

function distanceTravelledInFeet(start, end){
  if (start > end){
    return (start - end) * 264;
  }else{
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, end){
  const distance = distanceTravelledInFeet(start, end);

  if (distance <= 400){
    return 0
  }else if (distance > 400 && distance <= 2000){
    return (distance - 400) * .02
  }else if (distance > 2000 && distance <= 2500){
    return 25
  }else {
    return 'cannot travel that far'
  }
}