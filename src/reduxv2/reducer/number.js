import {CHECK_NUMBER} from '../action/constant';

const stateDefault = {
  checking: null
}

const kiemTraSoNguyenTo = (number) => {
  if(number <= 1){
    return false;
  } else if(number === 2) {
    return true;
  } else {
    for(let i = 2; i<= Math.sqrt(number); i++) {
      if(number % i === 0){
        return false;
      }
    }
    return true;
  }
}

export const checkNumberReducer = (state = stateDefault, action) => {
  switch(action.type) {
    case CHECK_NUMBER:
      let chk = kiemTraSoNguyenTo(action.number);
      return {
        ...state,
        checking: chk
      }
    default:
      return state;
  }
}