const nameInput = document.getElementById('form-name')
const emailInput = document.getElementById('form-email')
const messageInput = document.getElementById('form-message')
const success = document.getElementById('form-success')

const showError = (element, message) => {
  element.textContent = message
  element.classList.add('is-active')
}

const hideError = (element) => {
  element.textContent = ''
  element.classList.remove('is-active')
}

const showSuccess = () => success.classList.add('is-active')
const hideSuccess = () => success.classList.remove('is-active')

const clearInputs = () => {
  nameInput.value = ''
  emailInput.value = ''
  messageInput.value = ''
}

const checkName = () => {
  const error = document.getElementById('form-name-error')
  let success = true

  if (nameInput.validity.valid) {
    hideError(error)
  } else {
    showError(error, 'Enter your name')
    success = false
  }

  return success
}

const checkEmail = () => {
  const error = document.getElementById('form-email-error')
  let success = true

  if (emailInput.validity.valid) {
    hideError(error)
  } else {
    let message
    if (emailInput.validity.typeMismatch) message = 'Invalid email address'
    else message = 'Enter your email address'
    showError(error, message)
    success = false
  }

  return success
}

const checkMessage = () => {
  const error = document.getElementById('form-message-error')
  let success = true

  if (messageInput.validity.valid) {
    hideError(error)
  } else {
    showError(error, 'Enter a message')
    success = false
  }

  return success
}

nameInput.addEventListener('input', checkName)
emailInput.addEventListener('input', checkEmail)
messageInput.addEventListener('input', checkMessage)

const handleSubmit = event => {
  event.preventDefault()
  hideSuccess()

  if (
    checkName() &&
    checkEmail() &&
    checkMessage()
  ) {
    clearInputs()
    showSuccess()
  }
}