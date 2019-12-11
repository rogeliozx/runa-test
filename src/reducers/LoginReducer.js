import {
  StartValidateUser,
  ValidateUserError,
  ValidateUserSucces,
  AddPokemon,
  AddPokemonSucces,
  AddPokemonError
} from '../types';

const initialState = {
  trainer: [],
  error: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case StartValidateUser:
      return {
        ...state,
        error: null,
        loading: true
      };
    case ValidateUserSucces:
      return {
        ...state,
        trainer: action.payload,
        loading: false
      };
    case ValidateUserError:
      return {
        ...state,
        trainer: [],
        error: true,
        loading: false
      };
    case AddPokemon:
      return {
        ...state,
        error: null
      };
    case AddPokemonSucces:
      debugger
      return {
        ...state,
        trainer: [...state.trainer, action.payload]
      };
    case AddPokemonError:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
