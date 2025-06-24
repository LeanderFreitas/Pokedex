const pokeApi ={}

function converPokeApiDetailToPokemon(pokeDetail){
    const pokemonm = new Pokemon()
    Pokemon.number = podeDetail.order
    pokemonm.name = pokeDetail.name

    const types = podeDetail.types.map((typesSlot).type.name)
    const[type] = type

    pokemom.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.drea_wolrd.front_default

    return pokemon
}
pokeApi.getpokemonDetail = (pokemom) => {
    return fetch(pokemon.url)
        .then((response) =>  response.json)
        .then(converPokeApiDetailToPokemon)
}
pokeApi.getpokemons =( offset = 0,limit = 5) => {
    const url =
}