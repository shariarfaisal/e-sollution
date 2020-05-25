const validator = require('validator');


const loginValidator = ({ email, password }) => {
  const error = {}
  if(!email) error.email = "Email required!"
  if(!password) error.password = "Password required!"

  return { error, isValid: Object.keys(error).length === 0}
}

const signupValidator = ({ name, email, password, confirmPassword }) => {
  const error = {}

  if(!name) error.name = "Name required!"
  else if(name.length > 55) error.name = "Name must be in 55 characters!"

  if(!email) error.email = "Email required!"
  else if(!validator.isEmail(email)) error.email = "Email isn't valid!"

  if(!password) error.password = "Password required!"
  else if(password.length < 6) error.password = "Password must be at least 6 characters!"

  if(!confirmPassword) error.confirmPassword = "Confirm password required!"
  else if(password !== confirmPassword) error.confirmPassword = "Confirm password doesn't match!"

  return { error, isValid: Object.keys(error).length === 0}
}

module.exports = {
  loginValidator,
  signupValidator
}
