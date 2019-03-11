import React, { Component } from 'react';
import './App.css';
import {pokemonsAPICall} from './services/pokemonAPI';
import PokemonList from './components/PokemonList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsData: localStorage.getItem('Pokemon'),
      isFetching: true, 
      userQuery: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    this.pokemonFetch()
  }

  //Fecth to Pokemon API and Promise to wait for all url and then save it in state
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
            //Save the info in LS
            this.saveinLocalStorage();
          })  
      })  
  }

  saveinLocalStorage() {
    localStorage.setItem('Pokemon', JSON.stringify(this.state.pokemonsData));
  }

  //Save the user input value in the state 
  handleSearchInput(e) {
    const userSearch = e.target.value;
    this.setState ({
      userQuery: userSearch
    })
    
    this.filteredPokemons();
    const newArray = this.filteredPokemons();
    console.log(newArray);
    
  }

  filteredPokemons() {
    const {pokemonsData, userQuery} = this.state;
    const filteredPokemons = pokemonsData.filter((pokemon) => {
      if(pokemon.name.toLowerCase().includes(userQuery.toLowerCase())){
        return true;
      } else {
        return false;
      }
    })
    return filteredPokemons;
   
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
              <input type='text'onChange={this.handleSearchInput} value={this.state.userQuery} />
             
            </form>
          </div>
         <PokemonList pokemonsData={this.state.pokemonsData} fetchingState={this.state.isFetching} />
        </main>
      </div>
    );
  }
}

export default App;
