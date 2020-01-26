// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42) {
        return blockNumber - 42;
        } else {
        return 42 - blockNumber;
        }
}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
    let dis = distanceTravelledInFeet(start, end);
    if(dis < 400){
        return 0;
    }
    else if(dis > 400 && dis < 2000){
        return (dis - 400) * 0.02;
    }
    else if (dis > 2000 && dis < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}