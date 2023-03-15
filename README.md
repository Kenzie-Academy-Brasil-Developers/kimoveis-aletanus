# KIMOVEIS - Real Estate Management System

<h4>MAIN OBJECTIVES</h4>

For those who work in the real estate sector, it can be challenging to keep track of paperwork, deadlines, property visits, and ongoing negotiations. KIMOVEIS is a real estate management system that aims to make all these tasks much simpler and more organized.

<h4>ABOUT THE SYSTEM</h4>

KIMOVEIS was developed to facilitate real estate management and allows creating, updating, listing, and deleting users, properties, property categories, as well as scheduling visits to registered properties. The system is based on the use of technologies such as Express.js, TypeORM, PostgreSQL, bcrypt.js, dotenv, pg, reflect-metadata, zod, express-async-errors, and JWT, ensuring a secure, reliable, and scalable environment.

This system can be used by both the clients of a real estate agency and its administrators, with specific routes and permissions for common users to register and schedule visits, as well as granting full access and management of information such as users, properties, and scheduled visits to system administrators.

All users are authenticated with JWT, and their passwords are encrypted with bcrypt.js. The routes also have some validation restrictions, such as the inability to register two users or properties with the same email/address and the inability to schedule visits outside business hours and on non-working days.

The system architecture is based on a series of entities. For example, user, category, property, and scheduling entities, each with its own table and specific properties stored in the database.

<h4>TECHNICAL FEATURES</h4>

•	Relations made with TypeORM

•	Search methods findOne and findOneBy, specific to TypeORM.

•	QueryBuilder
  
  Validation queries using queryBuilder.
  
•	Types
  
  All data and functions have been typed correctly.
  
•	Serialization
  
  Data serialization done with zod and using a data validation middleware.
  
•	Package.json
  
  All package.json settings are correctly configured.
  
  All necessary libraries for project execution are listed in package.json.
  
•	Error handling
  
  Error handling using a custom AppError class.
  
  Zod errors are handled in the global error handling function.
  
•	Function and variable naming
  
  Function and variable naming was performed in a clear and objective way.
  
•	Indentation
  
  Correct indentation.
  
•	Environment variables
  
  Environment variables for necessary configurations.
  
  .env.example is included in the repository.

<h4>SYSTEM TESTED AND APPROVED</h4>

A significant challenge in application development is ensuring that your code is free of errors and bugs. This project has been fully tested and approved according to Node Express unit tests with Jest, also contained in this repository. The focus of these tests was not only to validate the proper functioning of the routes, according to what is expected of each one, but also to test the various parts of the application such as the services, controllers, and middleware developed.

![image](https://user-images.githubusercontent.com/106698505/225429064-6e954643-2170-4c8a-a40d-eb46eb83e090.png)



<!-- # KIMOVEIS - Sistema de Gerenciamento Imobiliário

PRINCIPAIS OBJETIVOS DO PROJETO

KIMOVEIS - Sistema de Gerenciamento Imobiliário
Para quem trabalha no setor imobiliário, sabe como pode ser difícil acompanhar a papelada, os prazos, as visitas aos imóveis e as negociações em andamento. A KIMOVEIS, é um sistema de gerenciamento imobiliário que visa tornar todas estas tarefas muito mais simples e organizadas.

SOBRE O SISTEMA

O KIMOVEIS foi desenvolvido para facilitar o gerenciamento de imóveis e permite criar, atualizar, listar e excluir usuários, imóveis, categorias de imóveis, bem como agendamentos de visitas aos imóveis cadastrados. O sistema tem por base a utilização de tecnologias tais como: Express.js, TypeORM, PostgreSQL, bcrypt.js, dotenv, pg, reflect-metadata, zod, express-async-errors e jwt, garantindo assim um ambiente seguro, confiável e escalável.

Este sistema pode ser utilizado tanto pelos clientes de uma imobiliária quanto por seus administradores, existindo rotas e permissões específicas para que os usuários comuns possam se cadastrar e agendar visitas, bem como concede acesso e gerenciamento total das informações, tais como, dos usuários, imóveis e agendamentos cadastrados, para os administradores do sistema.

Todos os usuários são autenticados com JWT, e suas senhas criptografadas com bcrypt.js.
As rotas também possuem algumas restrições de validação, como a não possibilidade de cadastro de dois usuários ou imóveis com o mesmo e-mail/endereço e a não possibilidade de agendar visitas fora do horário comercial e em dias não úteis.

A arquitetura do sistema é baseada em uma série de entidades. À exemplo das entidades de usuário, categoria, imóvel e agendamento, cada qual com sua própria tabela e propriedades específicas armazenadas no banco de dados. 

SISTEMA TESTADO E APROVADO
Um grande desafio no desenvolvimento de aplicações é garantir que seus códigos estão livres de erros e bugs. O presente projeto foi inteiramente testado e aprovado de acordo com os testes unitários em Node Express com Jest, também contidos neste repositório. 
O foco destes testes foi, além de validar o bom funcionamento das rotas, de acordo com o que se espera de cada uma delas, testar as diversas partes da aplicação como os services, os controllers, e os middlewares desenvolvidos.

PRINCIPAIS FEATURES

Relacionamentos com TypeORM
A criação das entidades e seus relacionamentos devem estar seguindo o diagrama colocado na descrição da entrega.

Métodos de busca findOne e findOneBy, próprios do typeORM.

QueryBuilder
- Queries de validação utilizando o queryBuilder.


Tipagem
- Todos os dados e funções foram tipados de maneira correta.

Serialização
- Serialização de dados feita com zod e utilizando um middleware de validação de dados.

Package.json
- Todas as configurações do package.json feitas de forma correta.
- Todas as bibliotecas necessárias para execução do projeto constam no package.json.

Tratativa de erros
- Tratativa de erros usando uma classe personalizada AppError.
- Erros do Zod sendo tratados na função global de tratativa de erros.

Nomenclatura de funções e variáveis
- Nomenclatura de funções e variáveis foi realizada de forma clara e objetiva.

Indentação
- Indentação correta.

Variáveis de ambiente
- Variáveis de ambiente para as configurações necessárias.
- .env.example consta no repositório. -->








<!-- # 🏁 Projeto Final: KImóveis - TypeORM com Relacionamentos

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn
```

## Instalação

Apenas as bibliotecas de teste, ou que os testes dependem, estão no **package.json**. Por isso, instale as dependências do projeto manualmente e não se esqueça de inicia-lo também.

```bash
# caso use npm
npm init -y

# caso use yarn
yarn init -y
```

## Dependências dos testes

Para que os testes funcionem corretamente, existem algumas dependências.

* O `app` tem que ser exportado como **default** em **src/app.ts**. Exemplo:

```ts
export default app
```

* O `AppDataSource` tem que ser exportado em **src/data-source.ts**. Exemplo:

```ts
export { AppDataSource }

// ou

export const AppDataSource = new DataSource(dataSourceConfig());
```

* As Entities **tem que ter os respectivos nomes** e **tem que ter a exportação centralizada** em **entities/index.ts**. Exemplo:

```ts
import { Address } from './<arquivo>';
import { Category } from './<arquivo>';
import { RealEstate } from './<arquivo>';
import { Schedule } from './<arquivo>';
import { User } from './<arquivo>';

export { Address, RealEstate, Category, User, Schedule };
```

## Sobre os testes

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.ts` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

## Rodando os testes

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes

```bash
# caso use npm
npm run test

# caso use yarn
yarn test
```

### Rodar todos os testes e ter um log ainda mais completo

```bash
# caso use npm
npm run test --all

# caso use yarn
yarn test --all
```

### Rodar os testes de uma pasta específica

> detalhe: repare que tests está envolvido por 2 underlines. Isso se chama ***dunder***.

```bash
# caso use npm
npm run test <subpasta>

# caso use yarn
yarn test <subpasta>
```

### Rodar os testes de um arquivo específico

```bash
# caso use npm
npm run test <subpasta>/<arquivo>

# caso use yarn
yarn test <subpasta>/<arquivo>
```

**Caso você queira verificar todas as opções de execução de testes, visite a [Documentação oficial do Jest](https://jestjs.io/docs/cli)**

Após rodar um dos comandos aparecerá um log no seu terminal, contendo as informações da execução do teste.

**Observação:** O teste pode demorar alguns segundos para ser finalizado. Quanto maior for o teste, mais tempo será consumido para a execução.

### Agora que já sabe como iniciar o seu projeto e rodar os testes, é hora de colocar a mão no código

 -->
