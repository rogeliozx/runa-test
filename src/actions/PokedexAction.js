import { CallPokemon, CallPokemonSucces, CallPokemonError } from '../types';
import PokeApi from '../config/PokeApi';

const getPokemonStart = () => ({
  type: CallPokemon,
});

const getPokemonSucces = (Pokemon) => ({
  type: CallPokemonSucces,
  payload: Pokemon,
});

const getPokemonError = () => ({
  type: CallPokemonError,
});

export default function getPokemon(id = 1) {
  return (dispatch) => {
    dispatch(getPokemonStart());

    PokeApi.get(`/${id}`)
      .then((res) => {
        dispatch(getPokemonSucces(res.data));
      })
      .catch(() => {
        dispatch(getPokemonError());
      });
  };
}
