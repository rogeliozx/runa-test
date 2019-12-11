import {
  StartValidateUser,
  ValidateUserError,
  ValidateUserSucces,
  AddPokemon,
  AddPokemonSucces,
  AddPokemonError
} from '../types';
import LoginAxios from '../config/Login';

const getTrainersStart = () => ({
  type: StartValidateUser
});

const getTrainerSuccess = trainer => ({
  type: ValidateUserSucces,
  payload: trainer
});

const getTrinerError = () => ({
  type: ValidateUserError
});

export function getTrainers() {
  return dispatch => {
    dispatch(getTrainersStart());

    LoginAxios.get('/trainer')
      .then(res => {
        dispatch(getTrainerSuccess(res.data));
      })
      .catch(() => {
        dispatch(getTrinerError());
      });
  };
}

export function addNewPokemon(trainer) {
  return dispatch => {
    dispatch(addNewPokemonStart());
    LoginAxios.put(`/trainer/${trainer.id}`, trainer)
      .then(res => {
        dispatch(addNewPokemonSucces(res.data));
      })
      .catch(() => {
        dispatch(addNewPokemonError());
      });
  };
}

const addNewPokemonStart = () => ({
  type: AddPokemon
});

const addNewPokemonSucces = trainer => ({
  type: AddPokemonSucces
});

const addNewPokemonError = () => ({
  type: AddPokemonError
});
