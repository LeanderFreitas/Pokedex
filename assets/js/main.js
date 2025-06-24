const offset = 0
const limit = 10
const url = '    '

function convertPokemonToHtml{
    return
      //'<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">Bulbasaur</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                <img src="pokemon/bulbasaur.png" alt="">
            </img></div>
         </li>
}
    const pokemonlist = document.getElementById('pokemonList')
fetch(url)
   .then((response) => response.json())
   .then((jsonBody) => console.log(jsonBody))
   .then((pekemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pekemons[i];
            pokemonlist.innerhtml += convertPokemonToLi(pokemon)
            }
        })
    .catch ((error) => console.error(error))
