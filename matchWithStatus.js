class matchABCDE {
  match = (str) => {
    let state =start;
    for(const char of str) {
      state = state(char);
    }
    return state == end;
  }
  
  start = (char) => {
    if(char == 'a') {
      return findB;
    }
    return start(char);
  }
  
  findB = (char) => {
    if(char == 'b') {
      return findC;
    }
    return start(char);
  }
  
  findC = (char) => {
    if(char == 'c') {
      return findD;
    }
    return start(char);
  }
  
  findD = (char) => {
    if(char == 'd') {
      return findE;
    }
    return start(char);
  }
  
  findE = (char) => {
    if(char == 'e') {
      return end;
    }
    return start(char);
  }
  
  end = () => {
    return end;
  }
}

class matchABABX {
  match = (str) => {
    let state =start;
    for(const char of str) {
      state = state(char);
    }
    return state == end;
  }
  
  start = (char) => {
    if(char == 'a') {
      return findB;
    }
    return start(char);
  }
  
  findB = (char) => {
    if(char == 'b') {
      return findA2;
    }
    return start(char);
  }
  
  findA2 = (char) => {
    if(char == 'a') {
      return findB2;
    }
    return start(char);
  }
  
  findB2 = (char) => {
    if(char == 'b') {
      return findX;
    }
    return start(char);
  }
  
  findX = (char) => {
    if(char == 'x') {
      return end;
    }
    return findA2(char);
  }
  
  end = () => {
    return end;
  }
}