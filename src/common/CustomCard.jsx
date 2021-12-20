import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CustomCard = (props) => {
  const {
    imgSrc,
    cardTitle,
    cardText,
    onSubmit,
    customCardClass,
  } = props;

  return (
    <Card style={{ height: '180px' }} className={customCardClass}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Button variant="primary" onClick={() => onSubmit()}>Submit</Button>
      </Card.Body>
    </Card>
  );
};

CustomCard.defaultProps = {
  imgSrc: '',
  customCardClass: '',
};

CustomCard.propTypes = {
  imgSrc: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  customCardClass: PropTypes.string,
};

export default CustomCard;
