import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { createGlobalStyle } from 'styled-components';
import ChubbyPokemon from './components/ChubbyPokemon';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 3rem 5rem;
  }
`;

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyle />
        <h2>Chubby Pokemon</h2>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <ChubbyPokemon />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

// client
//   .query({
//     query: gql`
//       {
//         pokemons(first: 50) {
//           id
//           name
//           weight {
//             minimum
//             maximum
//           }
//         }
//       }
//     `,
//   })
//   .then(result => console.log(result));
