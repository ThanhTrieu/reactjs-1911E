// day la noi cap nhat va thay doi states
import { DECREMENT_NUMBER, INCREMENT_NUMBER} from '../action/constant';
// khai bao state mac dinh

const stateDefault = {
  count: 0
}

// pure reducer
const countReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DECREMENT_NUMBER:
      return {
        ...state,
        count: action.val - 1
      }
    case INCREMENT_NUMBER:
      return {
        ...state,
        count: action.val + 1
      }
    default:
      return state;
  }
}

export default countReducer;
// const ctsas = countReducer.state.count;