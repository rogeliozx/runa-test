/* import { AddPokemon, AddPokemonSucces, AddPokemonError } from '../types';

export default function addNewPokemon(pokemon, trainer) {
  return dispatch => {
    debugger;
    dispatch(addNewPokemonStart(pokemon));
    LoginAxios.put(`/trainer/${trainer.id}`, trainer)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        dispatch(addNewPokemonError());
      });
  };
}

const addNewPokemonStart = () => ({
  type: AddPokemon
});

const addNewPokemon=()=>({
    type : AddPokemonSucces,
    payload: pokemon
})

const addNewPokemonError = () => ({
  type: AddPokemonError
});
 */