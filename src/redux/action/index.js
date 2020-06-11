// noi dinh nghia action
// pure function
// plain object

import {DECREMENT_NUMBER, INCREMENT_NUMBER} from './constant';

export const incrementNumber = (val) => ({
  type: INCREMENT_NUMBER,
  val
});

export const decrementNumber = (val) => {
  return {
    type: DECREMENT_NUMBER,
    val
  }
}