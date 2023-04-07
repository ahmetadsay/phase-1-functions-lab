function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber >= 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber;
    }
  }

  function distanceFromHqInFeet(blockNumber) {
    const blockLength = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(blockNumber); 
  
    return distanceInBlocks * blockLength;
  }
  
  function distanceTravelledInFeet (start, end) {
    const distance = Math.abs(start - end) * 264
    return distance

  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    let farePrice;

    if (distance <= 400) {
        farePrice = 0
    } 
    else if ( distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
    }
    else if (distance >= 2000 && distance < 2500) {
        farePrice = 25;
    }
    else {
        farePrice = 'cannot travel that far'
    }

    return farePrice;
  }