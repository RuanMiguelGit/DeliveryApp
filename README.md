

# Boas vindas ao repositório do projeto de Delivery-App-Sequelize-Node
<img src="https://media.giphy.com/media/wDM23A6GNz6Z43SxFq/giphy.gif" />  <img src="https://media.giphy.com/media/4TtRQ01E5xBagzG40N/giphy.gif" />  
<img src="https://media.giphy.com/media/WPyraJAVgHTemiHiTQ/giphy.gif" />  <img src="https://media.giphy.com/media/MOUnfUe2bojEmQqTZ0/giphy.gif" />  
<img src="https://media.giphy.com/media/58BzyurkLc1TuvOPLi/giphy.gif" />  


 

# Como Funciona
<li> É possível criar contas na área de registros, seu email e sua senha serão guardados no banco de dados, sua senha será guardada como uma hash md5 por segurança, a conta será registrada como uma pessoa consumidora</li>
<li> Com uma conta registrada é possível fazer o login, nessse momento os dados serão enviados para o back-end para validação e caso tudo está correto um token será gerado e registrado no local storage da pessoa usuária, caso os dados estejam incorretos, uma mensagem de erro irá aparecer </li> 
<li> É possivél realizar compras, existem produtos na aba de produtos e ao aumentar a quantidade o mesmo estará sendo adicionado ao carrinho de compras</li>
<li> Uma vez tendo finalizado as compras, clique em finalizar e o usuário será levado para a área de checkout</li>
<li> Na área de checkout será possível deletar compras e finalizar a venda, nesse momento o token que ficou registado no localStorage no momento da compra é enviado para o backend, o usuário é validado, a compra registrada no banco de dados e o usuário redirecionado para os detalhes da compra</li>
<li> Como pessoa usuária é possiver ver todas as suas compras na aba de pedidos e caso exista algum pedido marcado como "em trânsito' a pessoa usuária poderá marcar o pedido como "entregue"</li>
<li> Ao fazer o logout os dados do local storage serão limpados</li>
<li> É possível fazer login como pessoa vendedora usuando o email:fulana@deliveryapp.com e senha:fulana@123</li>
<li> Como pessoa vendedora você poderá ver todos as compras que foram feitas por todas as pessoas usuárias e alterar o status da compra de "pendente" para "em preparo", para "em trânsito" </li>  
  


# Tecnologias Utilizadas
<p align="center">
 <div style="background-color:black">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" style="max-width:100%;" width="40" height="40">
<img src="https://www.seekpng.com/png/detail/80-803529_vector-javascript-node-js-jpg-black-and-white.png" alt="Python" height="40" style="vertical-align:top; margin:4px">
<a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="50" height="50"/> </a>
<img src="https://google.github.io/sqlcommenter/images/sequelize-logo.png" alt="Javascript" height="50" width="50" style="vertical-align:top; margin:4px">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript" height="40" style="vertical-align:top; margin:4px">
<img src="https://i.ytimg.com/vi/wVo-UMit5Ig/maxresdefault.jpg" alt="Javascript" height="40" style="vertical-align:top; margin:4px">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code" height="40" style="vertical-align:top; margin:4px">
<img src="https://miro.medium.com/max/812/1*J6XjrA6Zb6TwzQ-imPVc_A.png" alt="VS Code" height="40" style="vertical-align:top; margin:4px">
</p>
</div>
---
# Como Rodar o projeto<
<ul>
  <ol> Git Clone no Projeto</oi>
  <oi> Npm Install no Back-end</oi>
  <oi> Npm install no Front-End</oi>
  <oi> Adicionar um arquivo .env</oi>
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
  <oi> Adicione uma senha para o JWT no arquivo jwt.evaluation.key </oi>
  <oi> Inicie o banco de dados Mysql </oi>
  <oi> Rode o projeto com npm run start, esse comando irá restaurar o banco de dados e iniciar a aplicação</oi>
 </ul>

# Membros do Projeto
<ul>
  <li>Ruan Miguel => https://github.com/ruanmiguelgit</li>
  <li> Gustavo Thirion => https://github.com/Gustaft86</li>
  <li> Rodrigo Sudario => https://github.com/RodrigoSudario</li>
</ul>


  <li> Estrutura da aplicação do Front-End e do Back-End</li>
    <p> O Front-End foi estruturado para garantir a organização do códido em pastas com as suas devidas responsabilidades, incluindo libs, e uma pasta de serviço onde as funções que realizavam as requisições e  lidavam com o localStorage eram disponibilizadas</p>
    <p> O Back-End foi estrtuturado com o padrão MSC e com o banco de dados sendo gerenciado pela ORM - Sequelize, organizando as validações e estruturas de uma maneira separada</p>
    </p> Dentro da pasta app/App.js  é posivel encontrar as requisições existem blocos e cada bloco está discriminado com o seu propósito</p>
    <p> A minha contribuição direta no projeto pode ser conferida pelo link abaixo, todos os membros trabalharam fullstack, e trabalhamos por telas</p>
  <li> https://trello.com/invite/b/JCEOPoMY/e00fa52426f04ec8c8d9a08390f35a64/g13-delivery-app</li>
  <p> Eu realizei 90% do css, nesse modelo foi utilizado o css separado sem nem um framework </p>
  
 <h3> Minha Experiência</h3>
  <p> Foi um projeto desafiador, exigiu boa parte de tudo que aprendi durante o curso, tivemos problemas pelos testes serem feitos com integração e decidimos utilizar mockar os dados para ganhar produtivade, o sequelize devido a sua natureza nos trouxe alguns problemas pois o mesmo possui muitos detalhes e quando um desses detalhes não é observado o mesmo acaba prejudicando o trabalho algumas etapas a frente, tenho muito orgulho desse projeto pelo aprendizado que o mesmo me deu, foi desafiador, não foi fácil mas nos trouxe grandes aprendizados</p>

<h4> Observação </h4> 
<p> Devido ao fato de ser um projeto realizado para o curso e o mesmo ter sido realizado com um membro a menos do que a maioria dos outros grupos e do curso  já possuir uma maneira de avaliar o projeto, sendo esses os testes de integração implementados pela equipe da trybe, não foram realizados os testes unitários, sob condições normais buscariamos realizar os mesmos para garantir a qualidade do código </p>
<p> O projeto pode facilmente ser adptado para ser utilizado com um banco não relacional(MongoDB)</p>



<h5> Apresentação </h5>
<p> Já existe uma apresentação pronta sobre o projeto eposso apresenta-lo tanto de maneira síncrona quanto de maneira assíncrona </p>
<p> O projeto irá passar por melhorias de desempenho no futuro</p>

<h5> Agradecimentos </h5>
<p> Gostaria de agradecer os membros da minha equipe, Gustavo Thirion e Rodrigo Sudario,  cujos sem os quais esse trabalho seria impossivel  </p>
  
