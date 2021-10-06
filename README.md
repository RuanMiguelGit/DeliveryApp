

# Boas vindas ao repositório do projeto de Delivery-App-Sequelize-Node


# Sumário

- [Habilidades](#habilidades)
 

# Habilidades

Manter aderência do código à especificação. Seu programa deve se comportar como especificado no repositório, no protótipo e no Diagrama de ER;

Manter a organização do seu código e a arquitetura geral da aplicação (tanto da API quando do front-end);

Manter aderência ao padrão REST na API;

Respeitar a estrutura do banco de dados. Sua implementação não deve adicionar ou remover tabelas, campos ou relacionamentos e sua API deve estar preparada para aproveitar essa estrutura por completo;

Manter uma cobertura de testes. Seu código deve ser testável e possuir uma suíte de testes unitários e/ou de integração robusta e com alta cobertura.

Implementar a funcionalidade de comunicação em tempo real, utilizando o socket.io.
Manter aderência aos princípios SOLID;


---
<h1> Como Rodar o projeto</h1>
<ul>
  <li> Git Clone no Projeto</li>
  <li> Npm Install no Back-end</li>
  <li> Npm install no Front-End</li>
  <li> Adicionar um arquivo .env</li>
    <ul> 
      <li>NODE_ENV=development</li>
      <li>API_PORT=3001</li>
       <li>MYSQL_HOST=localhost</li>
      <li>MYSQL_PORT=3306</li>
      <li>MYSQL_USER=Seu nome de usuario do Mysql</li>
      <li>MYSQL_PASSWORD= Sua senha</li>
      <li>MYSQL_DB_NAME=delivery-app</li>
      <li>EVAL_ALWAYS_RESTORE_DEV_DB=true</li>
  </ul>
  <li> Adicione uma senha para o JWT no arquivo jwt.evaluation.key </li>
  <li> Inicie o banco de dados Mysql </li>
  <li> Rode o projeto com npm run start, esse comando irá restaurar o banco de dados e iniciar a aplicação</li>
 </ul>

<h2>Membros do Projeto</h2>
<ul>
  <li>Ruan Miguel => https://github.com/ruanmiguelgit</li>
  <li> Gustavo Thirion => https://github.com/Gustaft86</li>
  <li> Rodrigo Sudario => https://github.com/RodrigoSudario</li>
</ul>

<h3>A minha contribuição</h3>
  <li> Estrutura da aplicação do Front-End e do Back-End</li>
    <p> O Front-End foi estruturado para garantir a organização do códido em pastas com as suas devidas responsabilidades, incluindo libs, e uma pasta de serviço onde as funções que realizavam as requisições e  lidavam com o localStorage eram disponibilizadas</p>
    <p> O Back-End foi estrtuturado com o padrão MSC e com o banco de dados sendo gerenciado pela ORM - Sequelize, organizando as validações e estruturas de uma maneira separada</p>
    </p> Dentro da pasta app/App.js  é posivel encontrar as requisições existem blocos e cada bloco está discriminado com o seu propósito</p>
    <p> A minha contribuição direta no projeto pode ser conferida pelo link abaixo, todos os membros trabalharam fullstack, e trabalhamos por telas</p>
  <li> https://trello.com/invite/b/JCEOPoMY/e00fa52426f04ec8c8d9a08390f35a64/g13-delivery-app</li>
  <p> Eu fiz 90% do design, nesse modelo foi utilizado o css separado sem nem um framework </p>
  
<h4> Observação </h4> 
<p> Devido ao fato de ser um projeto realizado para o curso e o mesmo ter sido realizado com um membro a menos do que a maioria dos outros grupos e do curso ser intenso  e já possuir uma maneira de avaliar o projeto, sendo esses os testes de integração implementados pela equipe da trybe, não foram realizados os testes unitarios, sob condições normais buscariamos realizar o mesmo para garantir a qualidade do código </p>
<p> O projeto pode facilmente ser adptado para ser utilizado com um banco não relacional(MongoDB)</p>

<h5>Tecnologias Utilizadas</h5>
<li>React</li>
<li>Node.js</li>
<li>ORM-Sequelize</li>
<li>Socket.io</li>

<h5> Apresentação </h5>
<p> Já existe uma apresentação pronta sobre o projeto eposso apresenta-lo tanto presencialmente quanto por video </p>
<p> O projeto irá passar por melhorias de desempenho no futuro</p>

<h5> Agradecimentos </h5>
<p> Gostaria de agradecer os membros da minha equipe, Gustavo Thirion e Rodrigo Sudario,  cujos sem os quais esse trabalho seria impossivel  </p>
  
