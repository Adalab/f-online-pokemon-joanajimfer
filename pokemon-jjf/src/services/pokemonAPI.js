const pokemonENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';

const pokemonsAPICall = () =>
 fetch(pokemonENDPOINT)
.then(response => response.json());

export  {pokemonsAPICall}
