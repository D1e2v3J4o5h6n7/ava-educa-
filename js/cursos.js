import { cursos } from '../dados/listagem-cursos.js';

export function listarCursos(usuario) {
  return new Promise((resolve, reject) => {
    const email = typeof usuario === 'string' ? usuario : usuario?.email;
    const cursosUsuario = cursos.filter(curso => curso.emailProfessor === email);

    if (cursosUsuario.length) resolve(cursosUsuario);
    else reject('Não há cursos cadastrados para esse usuário');
  });
}
