import React, { Component } from 'react';
import './App.css';
import {pokemonsAPICall} from './services/pokemonAPI';
import PokemonList from './components/PokemonList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsData: [],
      isFetching: true
    }
  }

  componentDidMount() {
    this.pokemonFetch()
  }

  pokemonFetch() {
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
         <PokemonList pokemonsData={this.state.pokemonsData} />
        </main>
      </div>
    );
  }
}

export default App;
