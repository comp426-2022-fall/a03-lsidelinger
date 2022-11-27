#!/usr/bin/env node

function roll(numsides,numdice,numrolls) {

    res = [];
    
    for (let i=0; i<numrolls; i++) {
        min = 1; 
        max = numsides + 1; 
        sum = 0; 
        for (let n = 0; n<numdice; n++) {
            num = Math.floor(Math.random * (max - min) + min);
            sum = sum + num; 
        }
    res.push(sum); 
  }

    return {
        sides: numsides,
        dice: numdice,
        rolls: numrolls,
        results: [2,5,10,4,7,3,3,3,9,12]
      }
}

export {roll};