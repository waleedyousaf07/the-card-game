import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import {
  Container,
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import getPlayers, { postPlayer } from '../players.api';
import CustomCard from '../../../common/CustomCard';
import getCardText from './PlayerList.utils';
import CustomModal from '../../../common/CustomModal';
import Sorter from '../../../common/sorter/Sorter.view';
import useCustomToast from '../../../common/CustomToast';
import sortByKey from '../../../core/utils';
import './PlayerList.scss';

const PlayersList = () => {
  // eslint-disable-next-line no-unused-vars
  const [sorter, setSorter] = useState('');
  const [mutatingPlayer, setMutatingPlayer] = useState('');

  const {
    data: players,
    isFetching,
    isLoading,
  } = useQuery(['users', 2], () => getPlayers(), {
    // eslint-disable-next-line no-alert
    onError: () => alert('Something went wrong'),
  });

  const { mutate: addPlayer } = useMutation(postPlayer, {
    onSuccess: () => {
      setShowToast(true);
      setMutatingPlayer('');
    },
    onError: () => setMutatingPlayer(''),
  });

  const { toast, setShowToast } = useCustomToast();

  const postData = (handleClose, player) => {
    setMutatingPlayer(player.id);
    addPlayer(handleClose, player);
  };

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
              {sortByKey(players, 'realName', sorter)?.map((player) => (
                <Col key={player.id} className="card-col">
                  <CustomModal
                    element={(handleShow, handleClose) => (
                      <CustomCard
                        cardTitle={player.realName}
                        cardText={getCardText(player)}
                        cardOnClick={handleShow}
                        onSubmit={() => postData(handleClose, player)}
                        cardHeight="180px"
                        hasOnSubmit
                        customCardClass="card"
                        isMutating={mutatingPlayer === player.id}
                      />
                    )}
                    onOk={(handleClose) => {
                      postData(handleClose, player);
                    }}
                    modalBody={(
                      <CustomCard
                        cardTitle={player.realName}
                        cardText={getCardText(player)}
                        hasOnSubmit={false}
                        cardHeight="auto"
                      />
                    )}
                    isMutating={mutatingPlayer === player.id}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <Sorter sorter={sorter} setSorter={setSorter} />
          <div className="toast-wrapper">{toast}</div>
        </div>
      )
  );
};

PlayersList.defaultProps = {};

PlayersList.propTypes = {};

export default PlayersList;
