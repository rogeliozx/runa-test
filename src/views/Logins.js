/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrainers } from '../actions/LoginAction';
import {
  FormLogin,
  GroupInput,
  LoginTitle,
  BodyLogin,
  FancyInput,
  FancyLabel,
  ButtonSubmit,
} from '../components/Login';

export default function Login({ history }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTrainers());
  }, [dispatch]);
  const [trainer, setTrainer] = React.useState('');
  const [password, setPassword] = React.useState('');
  const trainers = useSelector(state => state.trainer.trainer);
  const ValidateLetter = () => {
    const regex = /[A-Za-z]+/g;
    if (trainer.trim() === '' || password.trim() === '') {
      return false;
    }
    if (regex.test(trainer)) {
      return true;
    }
    return false;
  };

  const CheckTrainer = e => {
    e.preventDefault();
    if (ValidateLetter()) {
      let succes;
      trainers.map(user => {
        if (user.name === trainer && user.password === password) {
          succes = true;
        }
        return false;
      });
      if (succes) {
        history.push('/trainer');
      }
    }
  };

  return (
    <BodyLogin>
      <LoginTitle>Welcome to the world of POKéMON</LoginTitle>
      <FormLogin>
        <GroupInput>
          <FancyLabel>
            <FancyInput
              type='text'
              placeholder='Pokemon trainer'
              value={trainer}
              onChange={e => setTrainer(e.target.value)}
            />
          </FancyLabel>
          <FancyLabel>
            <FancyInput
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FancyLabel>
        </GroupInput>
        <ButtonSubmit onClick={e => CheckTrainer(e)} />
      </FormLogin>
    </BodyLogin>
  );
}
