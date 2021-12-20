import React from 'react';

const getCardText = (player) => (
  <div className="card-text">
    <b className="card-label">Username: </b>{player.playerName}
    <br />
    <b className="card-label">Asset: </b>{player.asset}
  </div>
);

export default getCardText;
