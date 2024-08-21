document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generate-btn')
  const passwordField = document.getElementById('password')
  const lengthSlider = document.getElementById('password-length')
  const lengthValue = document.getElementById('length-value')
  const uppercaseCheck = document.getElementById('uppercase')
  const lowercaseCheck = document.getElementById('lowercase')
  const numbersCheck = document.getElementById('numbers')
  const symbolsCheck = document.getElementById('symbols')
  const copyBtn = document.getElementById('copy-btn')

  lengthSlider.addEventListener('input', function () {
    lengthValue.textContent = this.value
  })

  function getCharacters() {
    let chars = ''
    if (uppercaseCheck.checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lowercaseCheck.checked) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (numbersCheck.checked) chars += '0123456789'
    if (symbolsCheck.checked) chars += '!@#$%^&*()_-+=<>?'
    return chars
  }

  function generatePassword(length, characters) {
    let password = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      password += characters[randomIndex]
    }
    return password
  }

  generateBtn.addEventListener('click', function () {
    const length = parseInt(lengthSlider.value)
    const characters = getCharacters()
    if (characters.length === 0) {
      alert('Veuillez sélectionner au moins un type de caractère.')
      return
    }
    const newPassword = generatePassword(length, characters)
    passwordField.value = newPassword
    updatePasswordStrength(newPassword)
  })

  copyBtn.addEventListener('click', function () {
    passwordField.select()
    document.execCommand('copy')
    alert('Mot de passe copié dans le presse-papiers !')
  })

  function updatePasswordStrength(password) {
    const strengthMeter = document.getElementById('password-strength')
    const strength = calculatePasswordStrength(password)

    strengthMeter.className = 'password-strength ' + strength
  }

  function calculatePasswordStrength(password) {
    if (password.length < 8) return 'weak'
    if (password.length < 12) return 'medium'
    return 'strong'
  }
})
