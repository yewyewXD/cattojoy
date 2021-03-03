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

export function handleFixPriceToTwoDecimals(price) {
  const decimalCount = handleCountDecimal(price)
  if (decimalCount === 0) {
    return price + ".00"
  } else if (decimalCount === 1) {
    return price + "0"
  } else {
    return price
  }
}

export function handleCountDecimal(number) {
  if (Math.floor(number) === number) return 0
  return number.toString().split(".")[1].length || 0
}
