const TOKEN = 'token'
const USER_ID = 'user_id'
const EMAIL = 'email'
const NAME = 'name'
// const EXP = 'exp'

export function jwtDecode (data) {
  let base64Url = data.token.split('.')[1]
  let base64 = base64Url.replace('-', '+').replace('_', '/')
  let dataUser = JSON.parse(window.atob(base64))
  return dataUser
}

export function setTokenData (data) {
  let jsonData = jwtDecode(data)
  setToken(data.token)
  setUserId(jsonData.user_id)
  setEmail(jsonData.email)
  setName(data.user.first_name)
  // setExpire(jsonData.exp)
}

export function setToken (token) {
  localStorage.setItem(TOKEN, token)
}

export function setUserId (userId) {
  localStorage.setItem(USER_ID, userId)
}

export function setEmail (email) {
  localStorage.setItem(EMAIL, email)
}

export function setName (name) {
  localStorage.setItem(NAME, name)
}

export function getToken () {
  return localStorage.getItem(TOKEN)
}

export function getUserId () {
  return localStorage.getItem(USER_ID)
}

export function getEmail () {
  return localStorage.getItem(EMAIL)
}

export function getName () {
  return localStorage.getItem(NAME)
}

export function removeToken () {
  return localStorage.removeItem(TOKEN)
}

export function removeUserId () {
  return localStorage.removeItem(USER_ID)
}

export function removeEmail () {
  return localStorage.removeItem(EMAIL)
}
// function setExpire (expire) {
//   if (!expire) { return null; }
//   const date = new Date(0)
//   date.setUTCSeconds(token.exp)
//   return date;
// }

export function isAuthenticated () {
  const idToken = getToken()
  return !!idToken
}

export function authLogout () {
  removeToken()
  removeUserId()
  removeEmail()
}
