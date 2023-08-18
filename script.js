document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generate-btn')
  const passwordField = document.getElementById('password')

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?'

  function generatePassword(length) {
    let password = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      password += characters[randomIndex]
    }
    return password
  }

  generateBtn.addEventListener('click', function () {
    const newPassword = generatePassword(12) // Change the length as needed
    passwordField.value = newPassword
  })
})
