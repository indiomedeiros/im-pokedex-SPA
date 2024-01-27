# Pokédex 

A Pokédex, também conhecida como Poké-Agenda no Brasil, é uma enciclopédia virtual portátil que os treinadores Pokémon transportam para registrar todas as espécies diferentes de Pokémon que são encontradas durante a sua viagem como treinadores 2. Ela é um dos itens mais importantes de um Treinador Pokémon, com ela é possível saber diversas informações sobre as criaturas, sobre seu tipo e também algumas curiosidades importantes.

[Deploy deste projeto](indiomedeiros.github.io/im-pokedex/)


Este foi construído com as seguintes tecnologias:
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/): 18.2.0
- [Axios](https://axios-http.com/ptbr/docs/intro): 1.6.2
- [React Router Dom](https://reactrouter.com/en/main): 6.20.1
- [Styled Components](https://styled-components.com/): 6.1.1
- [PokeAPI](https://pokeapi.co/docs/v2#pokemon);
- [Github Pages](https://pages.github.com/)

#### Para rodar o projeto no local:
primeiro instale as dependências `npm install ` e depois rode o projeto com `npm run dev`.

O projeto possui três páginas: **Home**, **Pokedex** e **Página de detalhes**.


## Home
* Mostrar uma lista de Pokemons, contendo 20 Pokemons vindos da [PokeAPI](https://pokeapi.co/docs/v2#pokemon);
* Cada Pokemon é representado por um Card;
* Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;
* No cabeçalho dessa página, tem um botão para acessar a Pokedex.
<img width="300" alt="Screen Shot 2022-07-15 at 14 18 33" src="https://github.com/indiomedeiros/pokedex/assets/71137294/052e9e67-9476-4af8-be91-def8d2e11f4e">


## Pokédex
* Renderiza a lista de pokémons adicionados na pokedex;
* Em cada card de Pokemon tem um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon. 
* No cabeçalho dessa página, tem um botão para voltar para a Home, página com a lista de Pokemons vinda da [PokeAPI](https://pokeapi.co/docs/v2#pokemon).

A página da Pokedex do usuário é semelhante a página Home. A diferença é que a lista de Pokemons que é renderizada na tela não vem diretamente da API.

Não existe um endpoint específico na PokeAPI para que isso seja feito. Por isso foi criado a lógica de adicionar os Pokemons em um array para ser renderizado na Pokedex. 

<img width="300" alt="Screen Shot 2022-07-15 at 14 20 38 (2)" src="https://github.com/indiomedeiros/pokedex/assets/71137294/07f95eb8-84a7-4582-b94d-60990b2f60f6">

## Detalhe do Pokemon
* Mostra os detalhes do Pokemon selecionado, com informações descritas.

No cabeçalho, além de um botão de voltar para a última página, haverá um botão (na direita) para adicionar ou remover da Pokedex a partir da página de detalhes.

<img width="300" alt="Screen Shot 2022-07-15 at 14 20 38 (1)" src="https://github.com/indiomedeiros/pokedex/assets/71137294/f2908728-62d3-4d53-b7aa-d79b9ef18676">

### Veja o [Protótipo no Figma.](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&mode=design&t=Vhr3DYq0v5VN1xsh-1)



