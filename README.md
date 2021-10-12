

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

# Como Rodar o projeto
<ol>
  <ll> Git Clone no Projeto</li>
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
 </ol>

# Membros do Projeto
<ul>
  <li>Ruan Miguel => https://github.com/ruanmiguelgit</li>
  <li> Gustavo Thirion => https://github.com/Gustaft86</li>
  <li> Rodrigo Sudario => https://github.com/RodrigoSudario</li>
</ul>


# Organização da aplicação do Front-End e do Back-End
  
  <img src="https://i.ibb.co/HpQHxmv/front-estrutura.png" alt="VS Code" >   <img src="https://i.ibb.co/DYVnVrn/back-end-estrutura.png" alt="VS Code" >


# Minha Contribuição no Desenvolvimento do projeto

  <p>Todos os membros trabalharam fullstack e o trabalho foi dvivido por telas </p>
  
  <li> Estruruação do Sequelize => Ruan Miguel, Rodrigo Sudario, Gustavo Thirion</li> 
  <li> Tela de Login => Front-End, Back-End, Estilização </li>
  <li> Tela de Registro => Front-End, Back-End, Estilização</li>
  <li> Tela de Checkout => Front-End, Back-End, Estilização</li>
  <li> Tela de Detalhes do Pedido => Front-End, Back-End, Estilização</li>
  <li> Tela de Detalhes do Pedido da pessoa Vendedora => Front-End, Back-End, Estilização</li>
  <li> Tela de Detalhes do Produto =>  Estilização</li>
  
  <p> È possível conferir a participação de todos os membros através do link : https://trello.com/invite/b/JCEOPoMY/e00fa52426f04ec8c8d9a08390f35a64/g13-delivery-app</p>
  
 # Testes 
 <li> É posível rodas os testes de integração desenvolvidos pela equipe de back-end da trybe como o comando npm run test </li>
 <p> Os testes unitários estão em desenvolvimento, devido a circustâncias do curso, de circustaâncias do projeto em si tais como dificuldades com o sequelize, falta de um membro do grupo e da sequência do curso e da não obrigatoriedade dos testes para projeto específico, não houve tempo hábil para a reaização dos mesmos, porém reconheço que os testes são de supra importância e essêncial no desenvolvimento de qualquer aplicação</p>
 
 
# Pontos finais 
<p> Foi um projeto interessante e desafiador, utilizou diversos conhecimentos que aprendemos durante o módulo de front-end e back-end,não é um projeto perfeito, não é um projeto que não precisa de melhorias, porém é um projeto de orgulho pelos aprendizados que o mesmo me proporcionou </p> 
