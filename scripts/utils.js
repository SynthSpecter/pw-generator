/**
 * Met à jour l'affichage de la force du mot de passe
 * Updates the password strength display
 * @param {string} password - Le mot de passe à évaluer / The password to evaluate
 */
function updatePasswordStrength(password) {
  const strengthMeter = document.getElementById('password-strength')
  const strength = calculatePasswordStrength(password)
  strengthMeter.className = 'password-strength ' + strength
}

/**
 * Calcule la force du mot de passe
 * Calculates the password strength
 * @param {string} password - Le mot de passe à évaluer / The password to evaluate
 * @returns {string} - La force du mot de passe (weak, medium, strong) / The password strength (weak, medium, strong)
 */
function calculatePasswordStrength(password) {
  if (password.length < 8) return 'weak'
  if (password.length < 12) return 'medium'
  return 'strong'
}
