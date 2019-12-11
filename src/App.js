/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Login from './views/Logins';
import PokedexLayout from './layouts/PokedexLayout';
import TrainerLayout from './layouts/Ttrainer';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/trainer' component={TrainerLayout} />
          <Route exact path='/pokedex' component={PokedexLayout} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
