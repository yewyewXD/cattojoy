const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function handleTextChange(setField, element) {
  setField({
    content: element.target.value,
    isValid: element.target.value
      ? element.target.value.toString().trim().length > 0
      : false,
  })
}

export function handleEmailChange(setField, element) {
  setField({
    content: element.target.value,
    isValid: element.target.value
      ? emailRegex.test(String(element.target.value).toLowerCase())
      : false,
  })
}
