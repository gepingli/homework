const findA = (str) => {
  for (const char of str) {
    if (char === 'a') return true;
  }
  return false;
}

const findAB = (str) => {
  let isFoundA = false;
  for(const char of str) {
    if(char === 'a') {
      isFoundA = true;
    } else if ( isFoundA && char === 'b') {
      return true;
    } else {
      isFoundA = false;
    }
  }
  return false;
}

const findABCDEF = (str) => {
  let isFoundA = false;
  let isFoundB = false;
  let isFoundC = false;
  let isFoundD = false;
  let isFoundE = false;
  for(const char of str) {
    if(char === 'a') {
      isFoundA = true;
    } else if ( isFoundA && char === 'b') {
      isFoundB = true;
    } else if ( isFoundB && char === 'c') {
      isFoundC = true;
    } else if ( isFoundC && char === 'd') {
      isFoundD = true;
    } else if ( isFoundD && char === 'e') {
      isFoundE = true;
    } else if ( isFoundE && char === 'f') {
      return true;
    } else {
      isFoundA = false;
      isFoundB = false;
      isFoundC = false;
      isFoundD = false;
      isFoundE = false;
    }
  }
  return false;
}