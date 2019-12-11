/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Border from '../assets/border.svg';

export default function PokemonCard({ pokemon, id, deletePokemon }) {
  const PokeCard = styled.div`
    -o-border-image: url(${Border}) 45% stretch;
    border-image: url(${Border}) 45% stretch;
    border-style: solid;
    border-width: 0.7em;
    background: #f7f7f7;
    min-height: 100px !important;
    margin: 0.6rem;
  `;
  const PictPokemon = styled.img`
    float: left;
  `;
  const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
  `;
  const Paragraph = styled.p`
    font-size: 0.8rem;
  `;
  const Leave = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9px;
    float: right;
    margin-top: -1rem;
    margin-right: -1rem;
  `;

  return (
    <PokeCard>
      <Leave
        onClick={() => {
          deletePokemon(id);
        }}
      >
        X
      </Leave>
      <PictPokemon src={pokemon.sprites.front_default} />
      <InfoContainer>
        <Paragraph>{pokemon.name}</Paragraph>
        <Paragraph>
          Height:
          {pokemon.height}
        </Paragraph>
        <Paragraph>
          Weight:
          {pokemon.weight}
        </Paragraph>
      </InfoContainer>
    </PokeCard>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  deletePokemon: PropTypes.func.isRequired,
};
