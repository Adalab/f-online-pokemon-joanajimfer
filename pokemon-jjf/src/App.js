import React, { Component } from 'react';
import './App.css';
import {pokemonsAPICall} from './services/pokemonAPI';

const pokemonENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsData: [],
      isFetching: true
    }
  }

  componentDidMount() {
    pokemonsAPICall()
      .then(data => {
        const pokemonToSearch = data.results;
        const pokemonsCalls = pokemonToSearch.map(pokemon => {
           return fetch(pokemon.url)
            .then(resp => resp.json())
        })

        Promise.all (pokemonsCalls)
          .then(pokemon => {
            console.log('all pokemons', pokemon)
            this.setState ({
              pokemonsData: pokemon, 
              isFetching: false
            })
          })
      })
  }

 


  render() {
    return (
      <div className="App">
        <header>
          <h1>POKEDEX</h1>
        </header>
        <main>
          <div>
            <form>
              <input />
              <button>Search...</button>
            </form>
          </div>
          <section>
            <h2>Pokemon encontrados:</h2>
         <ul>
             {this.state.pokemonsData.map((pokemon, id) => {
               return (
                 <li key={id}>
                 <h3>{pokemon.name}</h3>
                 <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                 <p>ID / {pokemon.id}</p>
                 <ul>{pokemon.types.map((type, id) => {
                  return(
                     <li key={id}>{type.type.name}</li>
                   
                 )})}
                 </ul>
                 </li>
                 
               )
             })}
           </ul> 
          </section>
        </main>
      </div>
    );
  }
}

export default App;
