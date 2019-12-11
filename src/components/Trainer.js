import styled from 'styled-components';
import pokedex from '../assets/pokedex.svg';
import bye from '../assets/bye.gif';
import Background from '../assets/trainer-container.jpg';
import Border from '../assets/border.svg';

export const PokeContainer = styled.div`
  margin-left: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 12.5rem 12.5rem;
  min-width: 70%;
  min-height: 25rem;
`;

export const Container = styled.div`
  margin: 0 auto;
  background-image: url(${Background});
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-size: 100% 100%;
`;

export const Sidebar = styled.aside`
  float: left;
`;

export const ButtonContainer = styled.footer`
  margin: 0 auto;
  text-align: center;
`;
export const PokedexButton = styled.button`
  background-image: url(${pokedex});
  background-color: #d70a0acf;
  background-repeat: no-repeat;
  background-size: 14%;
  padding: 0rem;
  width: 10rem;
  height: 2rem;
  margin-right: 1rem;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: center;
  font-size: 8px;
  background-position: 6% 35%;
  -webkit-letter-spacing: -0.065em;
  -moz-letter-spacing: -0.065em;
  -ms-letter-spacing: -0.065em;
  -webkit-letter-spacing: -0.065em;
  -moz-letter-spacing: -0.065em;
  -ms-letter-spacing: -0.065em;
  -webkit-letter-spacing: -0.065em;
  -moz-letter-spacing: -0.065em;
  -ms-letter-spacing: -0.065em;
  letter-spacing: -0.065em;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  z-index: 1;
  border: 0px;
  &:hover {
    background-color: rgba(190, 16, 16, 0.59);
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;

export const LogOut = styled.button`
  background-image: url(${bye});
  background-color: #d70a0acf;
  background-repeat: no-repeat;
  background-size: 20%;
  padding: 0rem;
  width: 10rem;
  height: 2rem;
  margin-right: 1rem;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: center;
  font-size: 8px;
  background-position: 6% 35%;
  -webkit-letter-spacing: -0.065em;
  -moz-letter-spacing: -0.065em;
  -ms-letter-spacing: -0.065em;
  -webkit-letter-spacing: -0.065em;
  -moz-letter-spacing: -0.065em;
  -ms-letter-spacing: -0.065em;
  -webkit-letter-spacing: -0.065em;
  -moz-letter-spacing: -0.065em;
  -ms-letter-spacing: -0.065em;
  letter-spacing: -0.065em;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  z-index: 1;
  border: 0px;
  &:hover {
    background-color: rgba(190, 16, 16, 0.59);
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;

export const PicContainer = styled.div`
  margin-left: 5rem;
`;

export const Pharagrap = styled.p`
  -o-border-image: url(${Border}) 45% stretch;
  border-image: url(${Border}) 45% stretch;
  border-style: solid;
  text-transform: capitalize;
  text-align: center;
  background: white;
`;

export const PicTrainer = styled.img`
  width: 6rem;
  height: 10rem;
`;

export default {
  Container,
  PokeContainer,
  Sidebar,
  PokedexButton,
  LogOut,
  ButtonContainer,
  PicContainer,
  PicTrainer,
  Pharagrap,
};
