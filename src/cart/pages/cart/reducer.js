import {
  START_ADD_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL
} from './action';

const initialState = {
  startAddCart: false,
  itemAdded: [],
  totalPrice: 0,
  error: null
}

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case START_ADD_CART:
      return {
        ...state,
        startAddCart: action.start
      }
    case ADD_CART_SUCCESS:
      const infoProduct = action.data; // thong tin chiet tiet san pham
      if(!state.itemAdded){
        // chua co bat ky san pham nao trong gio hang
        infoProduct.qty = 1; // them 1 truong qty vao - mac dinh mua 1san pham
        // cap nhat lai state cart
        return {
          ...state,
          itemAdded: [...state.itemAdded, infoProduct],
          startAddCart: false,
          totalPrice: parseInt(state.totalPrice) + parseInt(infoProduct.price),
        }
      } else {
        // da ton tai it nhat 1 san pham trong gio hang
        // kiem tra san pham them vao da co trong gio hang chua ?
        // neu co chi cap nhat lai so luong
        // neu chua co them moi nhu ban dau
        const checkExist = state.itemAdded.filter( data => data.id === infoProduct.id)[0];
        if(checkExist){
          checkExist.qty += 1; // cap nhat lai so luong
          return {
            ...state,
            startAddCart:false,
            totalPrice: parseInt(state.totalPrice) + parseInt(infoProduct.price)
          }
        } else {
          infoProduct.qty = 1;
          return {
            ...state,
            itemAdded: [...state.itemAdded, infoProduct],
            startAddCart: false,
            totalPrice: parseInt(state.totalPrice) + parseInt(infoProduct.price)
          }
        }
      }
    case ADD_CART_FAIL:
      return {
        ...state,
        startAddCart: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default cartReducer;