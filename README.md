# Easyimoveis

Controle de imóveis

## Instalação

Clone o repositório usando a url do mesmo no [Github](https://github.com/willianlemes/easyimoveis.git).

```bash
git clone https://github.com/willianlemes/easyimoveis.git
```

Ao clonar, vá para o diretório do repositório:

```bash
cd easyimoveis
```

Instale as dependências utilizando o [**Yarn**](https://yarnpkg.com/) (seguir os passos para instalação do próprio [site do Yarn](https://classic.yarnpkg.com/en/docs/getting-started) caso não o tenha).

```bash
yarn
```

Ao rodar o comando acima, aguarde a finalização da instalação das dependências e verifique se a pasta `node_modules` consta na árvore de arquivos do seu projeto. Lembre-se de atualizar a árvore caso a instalação tenha finalizado mas a pasta ainda não tenha aparecido.

## Banco de dados

Também é necessário instalar o banco de dados [PostgreSQL](https://www.postgresql.org) para funcionamento da persistência de dados, siga os passos orientados do próprio site do Postgres.

A versão do PostgreSQL inicialmente é a 12.2

Comando para visualizar a versão _Prompt de Comando_ ou _Terminal_:

```cmd
psql -V
```

Comando para visualizar a versão utilizando Docker:

```bash
docker exec -ti CONTAINER psql -V
```

## Estrutura de pastas e arquivos

> ### **node_modules**

Pasta com os pacotes (módulos) que são instalados da seções `dependencies` ou `devDependencies` do arquivo `package.json`.

> ### **src**

Pasta com os códigos-fontes do projeto.

---

Sub-diretórios

> #### database - Configurações de banco de dados

> #### errors - Gerenciamento de erros

> #### models - Classes de Entidades/Models

> #### repositories - Classes que encapsulam persistência

> #### routes - Rotas para os endpoints e seus [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

> #### services - Classes que encapsulam regras de negócios

> #### app.ts - Configurações globais do projeto

> #### server.ts - Configuração de portas e inicializador do projeto

---

> ### **.editorconfig**

Arquivo que vai ajudar manter estilos de código consistentes entre diferentes editores e IDEs. Aqui uma [referência](https://editorconfig.org/).

> ### **.eslintrc.json**

Arquivo com configurações do [eslint](https://eslint.org/) para ajudar na correção de problemas em tempo de desenvolvimento do código.

> ### **.gitignore**

Arquivo com o diretório e arquivos que o git olhará e ignorará, não os enviando para o _remote_.

> ### **.prettierrc**

Arquivo com configurações da [extensão do prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) do [Visual Studio Code](https://code.visualstudio.com/) para que o código seja formatado ao salvar ou ao colar um código, trazendo um padrão ao projeto.

- _Configurações de integração com o vscode_

Para que a extensão do **vscode** funcione corretamente ao salvar ou colar um trecho de código:

1. Pressione <kbd>Ctrl + Shift + P</kbd> dentro do **vscode**
2. Escolha a opção **Preferences: Open Settings (JSON)**
3. No arquivo JSON que abrir, cole as seguintes propriedades/valores:

```json
// Define o formatador padrão como o Prettier para as seguintes linguagens
"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[jsonc]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},

// Formata arquivos usando o Prettier ao Salvar ou Colar
"editor.formatOnSave": true,
"editor.formatOnPaste": true
```

> ### **ormconfig.json**

Configurações relativas ao [TypeORM](https://typeorm.io/#/using-ormconfig)

> ### **package.json**

Configurações relativas ao projeto [node](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/#:~:text=All%20npm%20packages%20contain%20a,as%20handle%20the%20project's%20dependencies.&text=The%20package.,-json%20file%20is)

> ### **README**

Arquivo que explica o projeto e seu uso, aqui uma [referência](https://www.makeareadme.com/)

> ### **tsconfig.json**

Arquivo que descreve as configurações e compilação do [Typescript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

> ### **yarn.lock**

Arquivo do **yarn** responsável por manter a versão exata das dependências para que haja instalação consistente entre máquinas e Sistemas Operacionais. Mais detalhes na [documentação do Yarn](https://classic.yarnpkg.com/en/docs/yarn-lock/#:~:text=lock,the%20root%20of%20your%20project.)

## Criando Migrations

As migrations são criadas pela CLI do TypeORM, identificada como typeorm. Para utilizá-lo, utilize seu _Terminal_ ou _Prompt de Comando_:

```cmd
yarn typeorm migration:create -n CreateTableUser
```

No exemplo acima é criado uma migration para **criar a tabela User**.

> É importante manter um padrão para criação de migrations, tente sempre utilizar o padrão **Operação do CRUD, Elemento, Nome da Model**, exemplos:

| Operação do CRUD | Elemento | Nome da Model |            Migration             |
| :--------------: | :------: | :-----------: | :------------------------------: |
|      Create      |  Table   |     User      |       **CreateTableUser**        |
|       Add        |    PK    |    Realty     |      **AddPKToProperties**       |
|       Drop       |  Column  |   Nickname    | **DropColumnNicknameFromPeople** |

OBS:. Também é necessário criar a Model para a classe User.

## Migrations

Para executá-las:

```cmd
yarn typeorm migration:run
```

Isso executa o método `up` que é implementado no arquivo da migration.

Ao finalizar, confira então se tudo foi criado corretamente no seu banco de dados.

## Revertendo migrations

Isso executa o método `down` que é implementado no arquivo da migration.

Para reverter, ou seja, desfazer as migrations:

```cmd
yarn typeorm migration:revert
```

OBS:. As migrations são revertidas de forma ascendente (da mais nova para a mais velha).

## License

[MIT](https://choosealicense.com/licenses/mit/)
