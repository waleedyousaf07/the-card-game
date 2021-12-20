import players from './Players.utils';
import mockedApi from '../../core/mockedApi';

const getPlayers = async () => {
  const res = await mockedApi(players);

  return res;
};

export default getPlayers;
