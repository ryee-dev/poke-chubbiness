import React, { Component } from 'react';
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 3rem 5rem;
  }
`;

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
  // uri: "https://48p1r2roz4.sse.codesandbox.io"
});

client
.query({
  query: gql`
    {
      pokemons(first: 50) {
        name
        id
      }
    }
  `
})
.then(result => console.log(result));

const ChubbyPokemon = () => (
  <Query query={gql`
  {
    pokemons(first: 50) {
      id
      name
      image
    }
  }
  `}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.pokemons.map(({name, id, image}) => (
        <div key={id}>
          <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-evenly' }}>
            <p>{name}</p>
            <img src={image} alt={name} style={{ padding: '1rem' }} />
          </div>
        </div>
      ));
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyle />
        <h2>Chubby Pokemon</h2>
        <ChubbyPokemon />
      </ApolloProvider>
    );
  }
}

export default App;
