import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const useCustomToast = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  const toast = (
    <Toast show={showToast} onClose={toggleShowToast} delay={3000} autohide>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Add Item</strong>
        <small>0 mins ago</small>
      </Toast.Header>
      <Toast.Body>Operation completed!</Toast.Body>
    </Toast>
  );

  return {
    toast,
    setShowToast,
  };
};

export default useCustomToast;
