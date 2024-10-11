document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generate-btn')
  const passwordField = document.getElementById('password')
  const lengthSlider = document.getElementById('password-length')
  const lengthValue = document.getElementById('length-value')
  const copyBtn = document.getElementById('copy-btn')

  // Met à jour l'affichage de la longueur du mot de passe
  // Updates the password length display
  lengthSlider.addEventListener('input', function () {
    lengthValue.textContent = this.value
  })

  // Génère un nouveau mot de passe
  // Generates a new password
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

  // Copie le mot de passe dans le presse-papiers
  // Copies the password to the clipboard
  copyBtn.addEventListener('click', function () {
    passwordField.select()
    document.execCommand('copy')
    alert('Mot de passe copié dans le presse-papiers !')
  })
})
