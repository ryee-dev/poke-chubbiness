import React from 'react';
import styled from 'styled-components';

class PokemonIndex extends React.Component {
  render() {
    const { name, image, weight, avgLbs } = this.props;
    return (
      <Container>
        <h1>{name}</h1>
        <WeightWrapper>
          <h2>~{avgLbs} lbs</h2>
          <p>
            ({weight.minimum} - {weight.maximum})
          </p>
          <img src={image} alt={name} style={{ padding: '1rem' }} />
        </WeightWrapper>
      </Container>
    );
  }
}

export default PokemonIndex;

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 8rem;
    opacity: 0.4;
  }
`;

const WeightWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 0;
  }
`;
