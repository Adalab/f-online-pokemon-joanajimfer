import React from 'react';

class PokemonList extends React.Component {
    render() {
        return (
            <section>
            <h2>Pokemon encontrados:</h2>
         <ul>
             {this.props.pokemonsData.map((pokemon, id) => {
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
        )
    }
}

export default PokemonList;