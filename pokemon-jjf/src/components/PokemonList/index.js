import React from 'react';
import './PokemonList.css';

class PokemonList extends React.Component {
    render() {
        const { fetchingState, pokemonsData } = this.props;

        if (fetchingState === true) {
            return (
                <p>Loading</p>
            )
        }
        else {
           
            return (
                <section className='pokemonList__section'>
                    <ul className='pokemonList__list'>
                        {pokemonsData.map((pokemon, id) => {
                            return (
                                <li className='pokemonList__card' key={id}>
                                    <h3 className='pokemonList__name'>{pokemon.name}</h3>
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemonList__img' />
                                    <div className='pokemonList__data'>
                                    <p className='pokemonList__data--number'># {pokemon.id}</p>
                                    <ul className='pokemonList__data--types'>{pokemon.types.map((type, id) => {
                                        switch (type.type.name) {
                                            case 'poison':
                                            this.icon = <span role="img" aria-label="skull" className='data__types--icon'>☠️</span>;
                                            break;
                                            case 'fire':
                                            this.icon = <span role="img" aria-label="fire">🔥</span>;
                                            break;
                                            case 'grass':
                                            this.icon = <span role="img" aria-label="plant">🌿</span>;
                                            break;
                                            case 'flying':
                                            this.icon = <span role="img" aria-label="fly">🦅</span>;
                                            break;
                                            case 'water':
                                            this.icon = <span role="img" aria-label="water">🌊</span>;
                                            break;
                                            case 'bug':
                                            this.icon = <span role="img" aria-label="bug">🐛</span>;
                                            break;
                                            case 'normal':
                                            this.icon = <span role="img" aria-label="normal">🐀</span>;
                                            break;
                                            case 'electric':
                                            this.icon = <span role="img" aria-label="electric">⚡</span>;
                                            break;
                                            default: 
                                            this.icon = type.type.name;
                                        }
                                         
                                        return (
                                            <li key={id}>{this.icon}</li>
                                        )
                                    })}
                                    </ul>
                                    </div>
                                </li>  
            )})}
                    </ul>
                </section>
            )}}}

export default PokemonList;