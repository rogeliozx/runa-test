import styled from 'styled-components';
import pokeball from '../assets/pokeball.svg';
import wallpaper from '../assets/Pokemon-yellow.png';

export const LoginTitle = styled.h1`
  color: #fff;
  margin: 50px 0 0 0;
  font-size: 48px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 2rem;
`;

export const FancyLabel = styled.label`
  float: left;
  width: 460px;
  height: 42px;
  margin: 50px 0 0 0;
  position: relative;
  clear: both;
`;

export const BodyLogin = styled.div`
  background-image: url(${wallpaper});
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-size: 100% 100%;
`;

export const FormLogin = styled.form`
  width: 500px;
  margin: 0 auto;
  min-height: 500px;
`;

export const GroupInput = styled.div`
  float: left;
  width: 100%;
  margin: 0 0 50px 0;
`;

export const FancyInput = styled.input`
  float: left;
  width: 460px;
  height: 40px;
  padding: 0 10px;
  border: 0;
  border-bottom: 3px solid #fff;
  background-color: transparent;
  color: #fff;
  font-family: 'Indie Flower', cursive;
  font-size: 22px;
  position: relative;
  z-index: 99;

  :focus {
    outline: 0;
  }
`;

export const FancySpan = styled.span`
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: absolute;
  left: 0;
  cursor: text;
`;

export const FancyChildSpan = styled.span`
  position: absolute;
  top: 0;
  z-index: 1;
  font-size: 22px;
  color: #fff;
  text-indent: 10px;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
`;

export const ButtonSubmit = styled.button`
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-size: cover;
  width: 6rem;
  height: 6rem;
  padding-top: 30px;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
  letter-spacing: -0.065em;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 300px;
  z-index: 1;
  border-width: 3px;
  border-style: solid;
  border-color: #48c774;

  &:hover {
    background-color: rgba(190, 16, 16, 0.59);
    cursor: pointer;
  }
`;

export default {
  FormLogin,
  GroupInput,
  BodyLogin,
  ButtonSubmit
};
