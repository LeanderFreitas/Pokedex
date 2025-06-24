function convertPokemonToLi(pokemon){
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

    const pokemonlist = document.getElementById('pokemonlist')

pokeApi.getPokemons().then((pokemons = []) =>{ 
    pokemonlist.innerHTML += pokemons.map(convertPokemonToLi).join('')
})


