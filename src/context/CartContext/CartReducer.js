const CartReducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREASE_PRODUCT_COUNT":
      if (state.products.some(product => product.id === payload.product.id)) {
        // if product already exist
        const newProducts = state.products.map(product => {
          // matched product count will be increased
          if (product.id === payload.product.id) {
            product.count += 1
          }
          return product
        })

        return {
          ...state,
          products: newProducts,
          productCount: state.productCount + 1,
        }
      } else {
        // if product does not exist, initiate a new product
        const newProduct = payload.product
        newProduct.count = 1

        return {
          ...state,
          products: [...state.products, newProduct],
          productCount: state.productCount + 1,
        }
      }

    case "DECREASE_PRODUCT_COUNT":
      if (
        state.products.filter(product => product.id === payload.product.id)[0]
          .count > 1
      ) {
        // if product count > 1
        const newProducts = state.products.map(product => {
          // matched product count will be decreased
          if (product.id === payload.product.id) {
            product.count -= 1
          }
          return product
        })

        return {
          ...state,
          products: newProducts,
          productCount: state.productCount - 1,
        }
      } else {
        // if product count === 1, product will be filtered away
        const newProducts = state.products.filter(
          product => product.id !== payload.product.id
        )

        return {
          ...state,
          products: newProducts,
          productCount: state.productCount - 1,
        }
      }

    default:
      return state
  }
}

export default CartReducer
