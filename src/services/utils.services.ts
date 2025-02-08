export const isValidId = (id: string): boolean => {
  return !isNaN(Number(id))
}
export const isString = (str: any): boolean => {
  return typeof str === 'string' || str instanceof String
  // With "typeof string === 'string'" we can verify strings created like this 'i'm a string'
  // With "object instanceof String" we can verify strings created with the String constructor (new String())
}

export const isEmail = (email: any): boolean => {
  if (!isString(email)) {
    return false
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) // This is a regular expression to validate emails
}

export const isValidUser = (user: any): boolean => {
  console.log(isString(user.name), isEmail(user.email))
  return isString(user.name) && isEmail(user.email)
}
