import { requireAuth, logout } from '../js/auth.js';
import { listarCursos } from '../js/cursos.js';

const usuario = requireAuth();
if (!usuario) throw new Error('Usuário não autenticado.');

document.querySelector('#userName').textContent = usuario.nome;
document.querySelector('#logout').addEventListener('click', logout);

const courseList = document.querySelector('#courseList');
const feedback = document.querySelector('#dashboardFeedback');

function formatarData(data) {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(`${data}T00:00:00Z`));
}

listarCursos(usuario)
  .then(lista => {
    courseList.innerHTML = lista.map(curso => `
      <article class="course-card">
        <h3>${curso.nomeCurso}</h3>
        <div class="course-dates">
          <span><strong>Início:</strong> ${formatarData(curso.dataInicio)}</span>
          <span><strong>Fim:</strong> ${formatarData(curso.dataFim)}</span>
        </div>
      </article>
    `).join('');
  })
  .catch(mensagem => {
    feedback.textContent = mensagem;
    feedback.className = 'feedback error';
    feedback.hidden = false;
  });
