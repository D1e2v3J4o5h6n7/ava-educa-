import { requireAuth, logout } from '../js/auth.js';
import { Aluno } from '../js/Aluno.js';
import { cadastrarAluno } from '../js/alunos.js';

const usuario = requireAuth();
if (!usuario) throw new Error('Usuário não autenticado.');
document.querySelector('#userName').textContent = usuario.nome;
document.querySelector('#logout').addEventListener('click', logout);

const form = document.querySelector('#studentForm');
const feedback = document.querySelector('#formFeedback');
const cepInput = document.querySelector('#cep');

function valor(id) { return document.querySelector(`#${id}`).value.trim(); }
function mostrarFeedback(texto, tipo) { feedback.textContent = texto; feedback.className = `feedback ${tipo}`; feedback.hidden = false; }

cepInput.addEventListener('blur', async () => {
  const cep = cepInput.value.replace(/\D/g, '');
  if (cep.length !== 8) return;
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const endereco = await resposta.json();
    if (endereco.erro) { mostrarFeedback('CEP não encontrado.', 'error'); return; }
    document.querySelector('#cidade').value = endereco.localidade || '';
    document.querySelector('#estado').value = endereco.uf || '';
    document.querySelector('#logradouro').value = endereco.logradouro || '';
    document.querySelector('#bairro').value = endereco.bairro || '';
    feedback.hidden = true;
  } catch { mostrarFeedback('Não foi possível consultar o CEP.', 'error'); }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  feedback.hidden = true;

  const dataNascimento = valor('dataNascimento');
  const dataValida = moment(dataNascimento, 'DD/MM/YYYY', true).isValid();
  const hoje = moment();
  const nascimento = moment(dataNascimento, 'DD/MM/YYYY', true);

  if (valor('nome').length < 4 || valor('nome').length > 80) return mostrarFeedback('O nome deve ter entre 4 e 80 caracteres.', 'error');
  if (!valor('genero')) return mostrarFeedback('Selecione o gênero.', 'error');
  if (!dataValida || !nascimento.isAfter(moment('01/01/1900', 'DD/MM/YYYY', true)) || !nascimento.isBefore(hoje)) return mostrarFeedback('Informe uma data de nascimento válida.', 'error');

  const obrigatorios = ['cpf','telefone','email','cep','cidade','estado','logradouro','numero','bairro'];
  if (obrigatorios.some(id => !valor(id))) return mostrarFeedback('Preencha todos os campos obrigatórios.', 'error');

  const aluno = new Aluno(valor('nome'), valor('genero'), nascimento.format('YYYY-MM-DD'), valor('cpf'), valor('telefone'), valor('email'), valor('cep'), valor('cidade'), valor('estado').toUpperCase(), valor('logradouro'), valor('numero'), valor('complemento'), valor('bairro'));

  try {
    const mensagem = await cadastrarAluno(aluno);
    mostrarFeedback(mensagem, 'success');
    form.reset();
  } catch (erro) { mostrarFeedback(erro, 'error'); }
});
