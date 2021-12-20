import React from 'react';
import PlayersList from './playersList/PlayersList.view';
import './Players.scss';

const Players = () => (
  <div id="players">
    <PlayersList />
  </div>
);

Players.defaultProps = {};

Players.propTypes = {};

export default Players;
