// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    let blocks = 0;
    blocks = 42 - pickup;
    if (blocks < 0) {
        blocks = blocks * -1
    };
    return blocks;
}

function distanceFromHqInFeet(distance) {
    return 264 * distanceFromHqInBlocks(distance);
}

function distanceTravelledInFeet(start, finish) {
    let blocks = 0;
    blocks = start - finish;
    if (blocks < 0) {
        blocks = blocks * -1
    };
    return 264 * blocks
}

function calculatesFarePrice (start, finish) {
    const distance = distanceTravelledInFeet(start, finish);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  