// валідація шляху до файлу
export function validateFilePath(path) {
  const PATH_FORMAT = /^(?:[\w]:|\/)(\/[a-z_\-\s0-9.]+)+\.(js)$/gi
  return PATH_FORMAT.test(path)
}
// валідація електронної скриньки
export function validateEmail(email) {
  const EMAIL_FORMAT = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return EMAIL_FORMAT.test(email)
}
// валідація дати
export function getDateValidation(date) {
  const DATE_FORMAT = /^(0[1-9]|1[0-2])\/(\d{2})$/g
  return DATE_FORMAT.test(date)
}
