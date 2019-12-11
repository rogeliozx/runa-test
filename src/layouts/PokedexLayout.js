/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import getPokemon from '../actions/PokedexAction';
import Pokedex from '../views/Pokedex';
import Pikachu from '../assets/pokedex.jpg';
import Catch from '../assets/add.gif';
import { addNewPokemon } from '../actions/LoginAction';

const Container = styled.div`
  position: absolute;
  background-image: url(${Pikachu});
  height: 100vh;
  display: block;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
const AddPokemon = styled.img`
  position: relative;
  width: 200px;
`;
export default function PokedexLayout({ history }) {
  const dispatch = useDispatch();
  let addingPokemon = false;
  const trainer = useSelector(state => state.trainer.trainer);
  React.useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);
  const pokemon = useSelector(state => state.pokemon.pokemon);
  const newPokemon = id => {
    dispatch(getPokemon(id));
  };
  const AddTeamPokemon = newPokemon => {
    trainer[0].storage.push(newPokemon);
    dispatch(addNewPokemon(trainer[0]));
    history.push('/trainer');
  };
  return (
    <Container>
      {addingPokemon ? <AddPokemon src={Catch} /> : null}
      <Pokedex
        pokemon={pokemon}
        newPokemon={newPokemon}
        AddTeamPokemon={AddTeamPokemon}
      />
    </Container>
  );
}
