const pokemonlist = document.getElementById('pokemonlist')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecord = 11
const limit = 5
let offset = 0

function loadMoreButton(offset,limit){
    function convertPokemonToLi(pokemon){   
        return'<li class="pokemon ${pokemon.type}"> <span class="number">#${pokemon.number}</span><span class="name">${pokemon.name}</span> <div class="detail">  <ol class="types">${pokemon.types.map((type)=> <li class="type ${type}">${type}</li>').join('')} <li class="type"> poison</li></ol> <img src="${pokemon.photo}" alt="${pokemon.name}"></img></div></li>'
        }
    }
pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('') 
    pokemonlist.innerHTML += newHtml
})
loadpokemonItens(offset,limit)

loadMoreButton.addEventListener('click',() => {
     offset += limit
    loadpokemonItens(offset,limit)
})


