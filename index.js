// Code your solution in this file!
function distanceFromHqInBlocks(n) {
    let distance = (n - 42);
    if (distance >= 0) {
        return distance;
    } else {
        return -distance;
    }
}

function distanceFromHqInFeet(n) {
    let numBlocks = distanceFromHqInBlocks(n); 

    return numBlocks * 264;
}

function distanceTravelledInFeet(start, finish) {
    if (finish > start) {
        return (finish - start) * 264;
    } else {
        return (start - finish) * 264;
    }
}

function calculatesFarePrice(start, finish) {
    const distance = distanceTravelledInFeet(start, finish);

    // WHY IS THIS SWITCH STATEMENT NOT WORKING?
    // ANS: the switch evaluation should be true
    // referece: https://love2dev.com/blog/javascript-switch-statement/
    switch (true) {
        case distance <= 400:
            return 0;
            // break;
        case distance > 400 && distance <= 2000:
            return (distance - 400) * 0.02;
            // break;
        case distance > 2000 && distance < 2500:
            return 25;
            // break;
        default:
            return 'cannot travel that far';
            // break;
    }

    // if (distance <= 400) {
    //     return 0;
    // } else if (distance > 400 && distance <= 2000) {
    //     return (distance - 400) * 0.02;
    // } else if (distance > 2000 && distance < 2500) {
    //     return 25;
    // } else {
    //     return 'cannot travel that far';
    // }

}