const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
  fire: '#F08030',
  grass: '#78C850',
  electric: '#F8D030',
  water: '#6890F0',
  ground: '#E0C068',
  rock: '#786824',
  fairy: '#EE99AC',
  poison: '#A040A0',
  bug: '#A8B820',
  dragon: '#7038F8',
  psychic: '#A13959',
  flying: '#C6B7F5',
  fighting: '#C03028',
  normal: '#A8A878',
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for (let index = 1; index <= pokemon_count; index++) {
        await getPokemon(index)
    }
}

const getPokemon = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]
    pokemonEl.style.backgroundColor = color
    

    const pokemonInnerHTML = `
    
            <div class="img-container">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png">
            </div>

            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${pokemon.name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
       
    `
    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}

fetchPokemons()