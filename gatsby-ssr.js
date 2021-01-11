const React = require("react")
const { CartContextProvider } = require("./src/context/CartContext/CartState")

exports.wrapRootElement = ({ element }) => {
  return <CartContextProvider>{element}</CartContextProvider>
}
