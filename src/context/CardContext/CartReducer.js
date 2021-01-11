const CartReducer = (state, action) => {
  switch (action.type) {
    case "Hello":
      return {
        ...state,
        hi: 10,
      }

    default:
      return state
  }
}

export default CartReducer
