import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import PokedexReducer from './PokedexReducer';

export default combineReducers({
  trainer: LoginReducer,
  pokemon: PokedexReducer,
});
