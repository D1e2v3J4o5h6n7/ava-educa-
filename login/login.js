import { login } from '../js/auth.js';

const form = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const feedback = document.querySelector('#loginFeedback');
const resetPassword = document.querySelector('#resetPassword');

function mostrarFeedback(mensagem, tipo = 'error') {
  feedback.textContent = mensagem;
  feedback.className = `feedback ${tipo}`;
  feedback.hidden = false;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  feedback.hidden = true;

  const email = emailInput.value.trim();
  const senha = senhaInput.value;

  if (!email || !senha) {
    mostrarFeedback('Preencha o e-mail e a senha.');
    return;
  }

  try {
    const usuario = await login(email, senha);
    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    window.location.href = '../dashboard/dashboard.html';
  } catch (erro) {
    mostrarFeedback(erro);
  }
});

resetPassword.addEventListener('click', () => {
  window.alert('A funcionalidade de recuperação de senha está em construção.');
});
