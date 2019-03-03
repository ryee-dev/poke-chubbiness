import React from 'react';
// import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PokemonIndex from './PokemonIndex';

export default class ChubbyPokemon extends React.Component {
  constructor(props) {
    super(props);

    this.handleMinToLbs = this.handleMinToLbs.bind(this);
    this.handleMaxToLbs = this.handleMaxToLbs.bind(this);
    this.handleAvgLbs = this.handleAvgLbs.bind(this);
  }

  handleMinToLbs = weight => {
    const minLbs = (parseFloat(weight.minimum) * 2.205).toFixed(2);
    return minLbs;
  };

  handleMaxToLbs = weight => {
    const maxLbs = (parseFloat(weight.maximum) * 2.205).toFixed(2);
    return maxLbs;
  };

  handleAvgLbs = weight => {
    const minLbs = parseFloat(weight.minimum) * 2.205;
    const maxLbs = parseFloat(weight.maximum) * 2.205;
    const avgLbs = ((minLbs + maxLbs) / 2).toFixed(2);
    console.log(minLbs, maxLbs, avgLbs);

    return avgLbs;
  };

  render() {
    return (
      <Query
        query={gql`
          {
            pokemons(first: 150) {
              id
              name
              image
              weight {
                minimum
                maximum
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.pokemons.map(({ name, id, image, weight }) => (
            <PokemonIndex
              key={id}
              name={name}
              image={image}
              weight={weight}
              // minLbs={this.handleMinToLbs(weight)}
              // maxLbs={this.handleMaxToLbs(weight)}
              avgLbs={this.handleAvgLbs(weight)}
            />
          ));
        }}
      </Query>
    );
  }
}
