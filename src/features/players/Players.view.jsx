/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import PlayersList from './playersList/PlayersList.view';
import './Players.scss';

const Players = (props) => {
  const { } = props;

  return (
    <div id="players">
      <PlayersList />
    </div>
  );
};

Players.defaultProps = {};

Players.propTypes = {};

export default Players;
