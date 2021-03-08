const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function handleTextChange(setField, element) {
  const value = element.target.value
  setField({
    content: value,
    isValid: value ? value.toString().trim().length > 0 : false,
  })
}

export function handleEmailChange(setField, element) {
  const value = element.target.value
  setField({
    content: value,
    isValid: value ? emailRegex.test(String(value).toLowerCase()) : false,
  })
}
