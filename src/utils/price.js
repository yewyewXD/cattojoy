export function handleRoundPrice(price) {
  if (price % 1 !== 0) {
    // if price has decimals
    const decimalCount = price.toString().split(".")[1].length
    if (decimalCount > 2) {
      return (Math.round(price * 100) / 100).toFixed(2)
    } else if (decimalCount === 1) {
      return price + "0"
    } else {
      return price
    }
  } else {
    // if price does not have decimals
    return price + ".00"
  }
}
