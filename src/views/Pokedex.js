/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import * as Poke from '../components/Pokedex';
import NoFound from '../assets/no-pokemon.webp';

let addNumber = '';
export default function Pokedex({ pokemon, newPokemon, AddTeamPokemon }) {
  let types = '';
  if (pokemon.types && types === '') {
    pokemon.types.map((data) => {
      types = `${types + data.type.name}  `;
    });
  }
  const image = pokemon.sprites ? pokemon.sprites.front_default : null;
  const [id, setId] = React.useState(0);
  const valueId = React.useRef('');
  const PokeId = (e) => {
    addNumber += e;
    addNumber = addNumber.trim();
    const existPokemon = parseInt(addNumber, 10);
    if (existPokemon <= 807) {
      setId(addNumber);
    }
  };
  const resetValue = () => {
    addNumber = '';
    setId('0');
    types = '';
  };

  const changePokemon = () => {
    newPokemon(id);
    resetValue();
  };

  const AddPokemon = () => {
    AddTeamPokemon(pokemon);
  };

  return (
    <Poke.Container>
      <Poke.Left>
        <Poke.CurveLeft />
        <Poke.BgCurveLeft />
        <Poke.BgCurveLeftTop>
          <Poke.BigGlassButton>
            <Poke.GlassShine />
          </Poke.BigGlassButton>
          <Poke.GlassRed />
          <Poke.GlassYellow />
          <Poke.GlassGreen />
        </Poke.BgCurveLeftTop>
        <Poke.DividerPillar>
          <Poke.Pillar>
            <Poke.TopSectionPillar />
            <Poke.BotSectionPillar />
          </Poke.Pillar>
        </Poke.DividerPillar>
        <Poke.Screen>
          <Poke.TopBorderScreen>
            <Poke.TopLedLeftScreen />
            <Poke.TopLedRighttScreen />
          </Poke.TopBorderScreen>
          <Poke.PictureContainer>
            <Poke.Picture src={image || NoFound} />
          </Poke.PictureContainer>
          <Poke.LedRedScreen />
          <Poke.Speaker>
            <Poke.LineSpeakers />
            <Poke.LineSpeakers />
            <Poke.LineSpeakers />
            <Poke.LineSpeakers />
          </Poke.Speaker>
        </Poke.Screen>
        <Poke.BigButton onClick={() => AddPokemon()} />
        <Poke.BarButtonGreen />
        <Poke.BarButtonRed />
        <Poke.CrosspadContainer>
          <Poke.LeftCross>
            <Poke.LeftArrow />
          </Poke.LeftCross>
          <Poke.TopCross>
            <Poke.TopArrow />
          </Poke.TopCross>
          <Poke.RightCross>
            <Poke.RightArrow />
          </Poke.RightCross>
          <Poke.MidCross>
            <Poke.MidDot />
          </Poke.MidCross>
          <Poke.BotCross>
            <Poke.BotArrow />
          </Poke.BotCross>
        </Poke.CrosspadContainer>
      </Poke.Left>
      <Poke.Right>
        <Poke.InfoScreen>
          <Poke.Pharagrap>
            Name:
            {pokemon.name ? <Poke.Span>{pokemon.name}</Poke.Span> : null}
          </Poke.Pharagrap>
          <Poke.Pharagrap>
            Weight:
            {pokemon.weight ? <Poke.Span>{pokemon.weight}</Poke.Span> : null}
            &apos;
          </Poke.Pharagrap>
          <Poke.Pharagrap>
            Height:
            {pokemon.height ? <Poke.Span>{pokemon.height}</Poke.Span> : null}
            ″
          </Poke.Pharagrap>
          <Poke.Pharagrap>
            Types:
            {pokemon.types ? <Poke.Span>{types}</Poke.Span> : null}
          </Poke.Pharagrap>
        </Poke.InfoScreen>
        <Poke.GroupTopButtons>
          <Poke.NumberButtons value="1" onClick={(e) => PokeId(e.target.value)}>
            1
          </Poke.NumberButtons>
          <Poke.NumberButtons value="2" onClick={(e) => PokeId(e.target.value)}>
            2
          </Poke.NumberButtons>
          <Poke.NumberButtons value="3" onClick={(e) => PokeId(e.target.value)}>
            3
          </Poke.NumberButtons>
          <Poke.NumberButtons value="4" onClick={(e) => PokeId(e.target.value)}>
            4
          </Poke.NumberButtons>
          <Poke.NumberButtons value="5" onClick={(e) => PokeId(e.target.value)}>
            5
          </Poke.NumberButtons>
        </Poke.GroupTopButtons>
        <Poke.GroupBotButtons>
          <Poke.NumberButtons value="6" onClick={(e) => PokeId(e.target.value)}>
            6
          </Poke.NumberButtons>
          <Poke.NumberButtons value="7" onClick={(e) => PokeId(e.target.value)}>
            7
          </Poke.NumberButtons>
          <Poke.NumberButtons value="8" onClick={(e) => PokeId(e.target.value)}>
            8
          </Poke.NumberButtons>
          <Poke.NumberButtons value="9" onClick={(e) => PokeId(e.target.value)}>
            9
          </Poke.NumberButtons>
          <Poke.NumberButtons value="0" onClick={(e) => PokeId(e.target.value)}>
            0
          </Poke.NumberButtons>
        </Poke.GroupBotButtons>
        <Poke.CurveTop />
        <Poke.CurveMid />
        <Poke.CurveSideLeft />
        <Poke.CurveTopRight />
        <Poke.InputPokedex ref={valueId} value={id} disabled />
        <Poke.AddIdButton onClick={() => changePokemon()} />
        <Poke.DeleteId onClick={() => resetValue()} />
      </Poke.Right>
    </Poke.Container>
  );
}

Pokedex.propTypes = {
  pokemon: PropTypes.any.isRequired,
  newPokemon: PropTypes.any.isRequired,
  AddTeamPokemon: PropTypes.any.isRequired,
};
