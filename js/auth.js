import { usuarios } from '../dados/listagem-usuarios.js';

export function login(usuario, senha) {
  return new Promise((resolve, reject) => {
    const usuarioEncontrado = usuarios.find(
      item => item.email.toLowerCase() === usuario.toLowerCase() && item.senha === senha
    );

    if (usuarioEncontrado) {
      const { senha: _, ...dadosUsuario } = usuarioEncontrado;
      resolve(dadosUsuario);
    } else {
      reject('Dados incorretos. Favor verificar e tentar novamente');
    }
  });
}

export function requireAuth() {
  const dados = sessionStorage.getItem('usuarioLogado');
  if (!dados) {
    window.location.replace('../login/login.html');
    return null;
  }
  return JSON.parse(dados);
}

export function logout() {
  sessionStorage.removeItem('usuarioLogado');
  window.location.replace('../login/login.html');
}
