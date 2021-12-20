import React from 'react';
import { useQuery } from 'react-query';
import {
  Container,
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import getPlayers from '../players.api';
import CustomCard from '../../../common/CustomCard';
import getCardText from './PlayerList.utils';
import './PlayerList.scss';

const PlayersList = () => {
  const {
    data: players,
    isFetching,
    isLoading,
  } = useQuery(['users', 2], () => getPlayers(), {
    // eslint-disable-next-line no-alert
    onError: () => alert('Something went wrong'),
  });

  return (
    isFetching || isLoading
      ? (
        <div id="spinner-wrapper">
          <div className="spinner">
            <Spinner animation="grow" />
            <br />
            <span>Fetching data</span>
          </div>
        </div>
      )
      : (
        <div id="player-list">
          <Container>
            <Row xs={3}>
              {players?.map((player) => (
                <Col key={player.id} className="card-col">
                  <CustomCard
                    cardTitle={player.realName}
                    cardText={getCardText(player)}
                    onSubmit={() => console.log('aaa onSubmit', player)}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )
  );
};

PlayersList.defaultProps = {};

PlayersList.propTypes = {};

export default PlayersList;
