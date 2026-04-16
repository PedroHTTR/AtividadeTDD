function validarSenha(senha) {
  if (typeof senha !== 'string') return false;
  if (/\s/.test(senha)) return false;
  if (senha.length < 8) return false;
  if (!/[A-Z]/.test(senha)) return false;
  if (!/[a-z]/.test(senha)) return false;
  if (!/[0-9]/.test(senha)) return false;
  if (!/[!@#$%^&*(),.?"\":{}|<>\[\]\\/\'`~_+=;:\-]/.test(senha)) return false;
  return true;
}

module.exports = validarSenha;
