// RF01 – Index e Login
// O index.html sempre carrega este arquivo. Ele decide para qual tela o usuário deve ir.
const usuarioLogado = sessionStorage.getItem('usuarioLogado');

if (usuarioLogado) {
  window.location.replace('dashboard/dashboard.html');
} else {
  window.location.replace('login/login.html');
}
