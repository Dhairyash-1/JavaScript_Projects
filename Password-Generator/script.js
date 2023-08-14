const passwordInput = document.getElementById('password')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const number = document.getElementById('number')
const symbols = document.getElementById('symbols')
const passwordLengthRange = document.getElementById('length')
const passwordLengthIndicator = document.getElementById('lengthValue')
const coppybtn = document.getElementById('copybtn')
const passwordGenerateBtn = document.getElementById('button')

passwordLengthRange.addEventListener('input', syncCharacterLength)
passwordLengthIndicator.addEventListener('input', syncCharacterLength)

// Generate password onclick
passwordGenerateBtn.addEventListener('click', e => {
  e.preventDefault()
  const Password = generatePassword(
    lowercase.checked,
    uppercase.checked,
    number.checked,
    symbols.checked,
    passwordLengthRange.value
  )
  passwordInput.value = Password
})
// Copy password
coppybtn.addEventListener('click', copyPassword)

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numericChars = '0123456789'
const specialChars = '!@#$%^&*()-_+=?<>'

function generatePassword(lowercase, uppercase, number, symbol, length) {
  let chars = ''
  if (lowercase) chars += lowercaseChars
  if (uppercase) chars += uppercaseChars
  if (number) chars += numericChars
  if (symbol) chars += specialChars

  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    password += chars[randomIndex]
  }
  return password
}
function copyPassword() {
  passwordInput.select()
  passwordInput.setSelectionRange(0, 99999) // for mobile
  navigator.clipboard.writeText(passwordInput.value)
  coppybtn.classList.add('fa-solid')
  setTimeout(() => coppybtn.classList.remove('fa-solid'), 1500)
}

function syncCharacterLength(e) {
  const value = e.target.value
  passwordLengthRange.value = value
  passwordLengthIndicator.value = value
}
