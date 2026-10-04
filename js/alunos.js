import { alunos } from '../dados/listagem-alunos.js';

export function cadastrarAluno(aluno) {
  return new Promise((resolve, reject) => {
    try {
      const novoId = alunos.length ? Math.max(...alunos.map(item => item.id)) + 1 : 1;
      alunos.push({ ...aluno, id: novoId });
      resolve('Aluno cadastrado com sucesso!');
    } catch (erro) {
      reject('Erro ao cadastrar o aluno');
    }
  });
}
