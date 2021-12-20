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
    cardOnClick,
    hasOnSubmit,
    cardHeight,
    isMutating,
  } = props;

  return (
    <Card style={{ height: cardHeight }} className={customCardClass} onClick={cardOnClick}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        {
          hasOnSubmit
          && (
            <Button
              variant="primary"
              onClick={(e) => {
                e.stopPropagation();
                onSubmit();
              }}
              disabled={isMutating}
            >
              {isMutating ? 'Submitting...' : 'Submit'}
            </Button>
          )
        }
      </Card.Body>
    </Card>
  );
};

CustomCard.defaultProps = {
  imgSrc: '',
  customCardClass: '',
  cardOnClick: () => { },
  onSubmit: () => { },
  hasOnSubmit: true,
  cardHeight: '180px',
  isMutating: false,
};

CustomCard.propTypes = {
  imgSrc: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
  customCardClass: PropTypes.string,
  cardOnClick: PropTypes.func,
  hasOnSubmit: PropTypes.bool,
  cardHeight: PropTypes.string,
  isMutating: PropTypes.bool,
};

export default CustomCard;
