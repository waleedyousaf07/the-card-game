import React from 'react';

const getCardText = (player) => (
  <>
    <b>Username: </b>{player.playerName}
    <br />
    <b>Asset: </b>{player.asset}
  </>
);

export default getCardText;
