/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPokemon } from '../actions/LoginAction';
import {
  Container,
  PokeContainer,
  Sidebar,
  PokedexButton,
  LogOut,
  ButtonContainer,
  PicContainer,
  PicTrainer,
  Pharagrap
} from '../components/Trainer';
import Man from '../assets/trainer-man.png';
import PokemonCard from './PokemonCard';

export default function Trainer({ history }) {
  const dispatch = useDispatch();
  const trainer = useSelector((state) => state.trainer.trainer);
  const goToPokedex = () => {
    history.push('/pokedex');
  };
  const goToLogin = () => {
    history.push('/');
  };
  const deletePokemon = (id) => {
    trainer[0].storage.splice(id, 1);
    dispatch(addNewPokemon(trainer[0]));
    history.push('/trainer');
  };
  return (
    <Container>
      <Sidebar>
        <PicContainer>
          <PicTrainer src={Man} />
        </PicContainer>
        <Pharagrap>{trainer[0].name}</Pharagrap>
      </Sidebar>
      <PokeContainer>
        {trainer[0].storage.map((pokemon, i) => {
          return (
            <PokemonCard
              id={i}
              key={i}
              pokemon={pokemon}
              deletePokemon={deletePokemon}
            />
          );
        })}
      </PokeContainer>
      <ButtonContainer>
        <PokedexButton
          onClick={() => {
            goToPokedex();
          }}
        >
          Go Pokedex
        </PokedexButton>
        <LogOut
          onClick={() => {
            goToLogin();
          }}
        >
          Logout
        </LogOut>
      </ButtonContainer>
    </Container>
  );
}

Trainer.propTypes = {
 history: PropTypes.object.isRequired,
};