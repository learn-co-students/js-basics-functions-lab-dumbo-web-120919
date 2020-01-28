// Code your solution in this file!

// blocks = 264 ft

function distanceFromHqInBlocks(blocks) {
    if(blocks > 42){
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}


function distanceTravelledInFeet(start, end) {
    // return (end - start) * 264
    if (start < end) {
        return (end - start) * 264;
    } else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice(start, destination){
    let freeRide = 0
    // let begin = 264 * start
    // let end = 264 * destination  
    const distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400) {
        return freeRide
    } else if (distance >= 401 && distance <= 2000){
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
   
}
