import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

const CustomModal = (props) => {
  const {
    element,
    modalBody,
    onOk,
  } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {element(handleShow)}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onOk(handleClose)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CustomModal.defaultProps = {};

CustomModal.propTypes = {
  element: PropTypes.func.isRequired,
  modalBody: PropTypes.node.isRequired,
  onOk: PropTypes.func.isRequired,
};

export default CustomModal;
