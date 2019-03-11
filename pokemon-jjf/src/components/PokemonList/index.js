import React from 'react';

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
                <section>
                    <ul>
                        {pokemonsData.map((pokemon, id) => {
                            return (
                                <li key={id}>
                                    <h3>{pokemon.name}</h3>
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    <p>ID / {pokemon.id}</p>
                                    <ul>{pokemon.types.map((type, id) => {
                                        return (
                                            <li key={id}>{type.type.name}</li>
                                        )
                                    })}
                                    </ul>
                                </li>  
            )})}
                    </ul>
                </section>
            )}}}

export default PokemonList;