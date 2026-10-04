# AVA-EDUCA+

Aplicação web acadêmica desenvolvida para o projeto avaliativo do Módulo 01. O AVA-EDUCA+ simula um ambiente virtual de apoio educacional, permitindo autenticação de usuários, visualização de cursos e cadastro de alunos.

## Funcionalidades

- `index.html` como primeira tela do sistema, com redirecionamento para o Login realizado pelo `js/app.js`.
- Login com validação por `Promise` e armazenamento do usuário autenticado em `sessionStorage`.
- Dashboard com identificação do usuário e listagem dos cursos vinculados ao usuário logado.
- Cadastro de aluno com dados pessoais e de endereço.
- Classe `Aluno` e função `cadastrarAluno()` organizadas em módulos JavaScript.
- Validação da data de nascimento utilizando Moment.js.
- Consulta automática de endereço pelo CEP utilizando a API ViaCEP.
- Uso de `export` e `import` nos módulos JavaScript.
- Layout responsivo para telas mobile e desktop.

## Tecnologias

- HTML5
- CSS3
- JavaScript ES Modules
- DOM e eventos
- Promises
- SessionStorage
- Fetch API
- Moment.js
- ViaCEP

## Como executar

O projeto utiliza módulos JavaScript (`import`/`export`) e deve ser executado por um servidor HTTP local.

### Live Server no VS Code

1. Abra a pasta `ava-educa+` no Visual Studio Code.
2. Abra o arquivo `index.html`.
3. Clique com o botão direito no arquivo.
4. Selecione **Open with Live Server**.
5. O navegador abrirá o sistema por um endereço semelhante a `http://127.0.0.1:5500/`.

### Servidor HTTP com Python

Abra o terminal dentro da pasta do projeto e execute:

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

## Usuários disponíveis para teste

Os usuários abaixo fazem parte dos dados de teste da aplicação e estão armazenados em `dados/listagem-usuarios.js`:

| E-mail | Senha |

| ana.silva@edutech.com     | 123456  |
| carlos.santos@edutech.com | 654321  |
| mariana.costa@edutech.com | edu2026 |

## Estrutura do projeto

ava-educa/
│
├── login/
│   ├── login.html
│   ├── login.js
│   └── login.css
│
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.js
│   └── dashboard.css
│
├── cadastro-aluno/
│   ├── cadastro-aluno.html
│   ├── cadastro-aluno.js
│   └── cadastro-aluno.css
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── cursos.js
│   ├── Aluno.js
│   └── alunos.js
│
├── dados/
│   ├── listagem-usuarios.js
│   ├── listagem-cursos.js
│   └── listagem-alunos.js
│
├── assets/
│   ├── images/
│   └── icons/
│       └── favicon.svg
│
├── index.html
├── README.md
└── package.json

## Fluxo da aplicação

index.html
    ↓
js/app.js
    ↓
login/login.html
    ↓
login/login.js
    ↓
js/auth.js
    ↓
sessionStorage
    ↓
dashboard/dashboard.html

O cadastro de aluno é acessado pelo Dashboard e utiliza os módulos `Aluno.js` e `alunos.js`, além da validação de data com Moment.js e consulta de endereço pela API ViaCEP.

## Organização do CSS

Os estilos foram separados conforme a organização das telas:

- `css/style.css` — estilos globais e componentes compartilhados.
- `login/login.css` — estilos específicos da tela de Login.
- `dashboard/dashboard.css` — estilos específicos dos cards e da área de cursos do Dashboard.
- `cadastro-aluno/cadastro-aluno.css` — estilos específicos do formulário de cadastro.

## Organização do desenvolvimento no GitHub

O desenvolvimento foi organizado utilizando:

- `main` para a versão final;
- `develop` para integração do desenvolvimento;
- branches `feature/*` para funcionalidades individuais;
- Pull Requests das features para `develop`;
- Pull Request final de `develop` para `main`.

Exemplos de branches de funcionalidade:

feature/login
feature/dashboard
feature/cadastro-aluno
feature/responsividade
feature/readme
feature/testes-final

## Kanban

O desenvolvimento pode ser acompanhado por um quadro Kanban com as colunas:

- **TO DO**
- **DOING**
- **DONE**

## Uso de IA

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento.

Utilizei a IA principalmente para:

- entender melhor alguns conceitos de HTML, CSS e JavaScript;
- tirar dúvidas sobre a organização dos arquivos e pastas;
- ajudar a identificar e corrigir erros no código;
- auxiliar na organização do CSS e da estrutura das páginas;
- entender o funcionamento do `sessionStorage`, `import` e `export`;
- auxiliar na implementação do login, dashboard e cadastro de alunos;
- revisar o projeto e verificar se as funcionalidades estavam de acordo com os requisitos solicitados.

As sugestões recebidas foram revisadas e testadas durante o desenvolvimento para verificar se estavam de acordo com o projeto e com os conteúdos estudados.
