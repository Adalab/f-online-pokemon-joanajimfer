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
                                        return (
                                            <li key={id}>{type.type.name}</li>
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