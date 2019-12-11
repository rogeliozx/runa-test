import { CallPokemon, CallPokemonSucces, CallPokemonError } from '../types';

const initialState = {
  pokemon: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CallPokemon:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case CallPokemonSucces:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case CallPokemonError:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
