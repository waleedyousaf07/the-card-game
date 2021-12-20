import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import sorterOptions from './Sorter.utils';
import './Sorter.scss';

const Sorter = ({ sorter, setSorter }) => (
  <div id="sorter">
    <b>Sorter: </b>
    {sorter === sorterOptions.ascending
      ? <AiOutlineSortDescending className="sorter-icon" onClick={() => setSorter(sorterOptions.descending)} />
      : <AiOutlineSortAscending className="sorter-icon" onClick={() => setSorter(sorterOptions.ascending)} />
    }
  </div>
);

Sorter.defaultProps = {};

Sorter.propTypes = {
  sorter: PropTypes.string.isRequired,
  setSorter: PropTypes.func.isRequired,
};

export default Sorter;
