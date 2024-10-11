/**
 * Récupère les caractères à utiliser pour la génération du mot de passe
 * Gets the characters to use for password generation
 * @returns {string} - Les caractères à utiliser / The characters to use
 */
function getCharacters() {
  let chars = ''
  if (document.getElementById('uppercase').checked)
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (document.getElementById('lowercase').checked)
    chars += 'abcdefghijklmnopqrstuvwxyz'
  if (document.getElementById('numbers').checked) chars += '0123456789'
  if (document.getElementById('symbols').checked) chars += '!@#$%^&*()_-+=<>?'
  return chars
}

/**
 * Génère un mot de passe aléatoire
 * Generates a random password
 * @param {number} length - La longueur du mot de passe / The password length
 * @param {string} characters - Les caractères à utiliser / The characters to use
 * @returns {string} - Le mot de passe généré / The generated password
 */
function generatePassword(length, characters) {
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }
  return password
}
