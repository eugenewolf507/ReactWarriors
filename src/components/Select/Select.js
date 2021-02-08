import React from 'react';
import Select from 'react-select';

import PropTypes from 'prop-types';

import styles from './select.module.css';

const options = [
  { value: 'top_rated', label: 'Top Rated' },
  { value: 'now_playing', label: 'Now Playing' },
  { value: 'popular', label: 'Popular' },
  { value: 'upcoming', label: 'Upcoming' },
];

const Selector = ({ value, selectAction }) => (
  <div>
    <Select
      options={options}
      value={value}
      onChange={selectAction}
      className={styles.wrapper}
    />
  </div>
);

Selector.defaultProps = {
  value: {
    value: 'popularity.asc',
    label: 'Popularity Ascending',
  },
};

Selector.propTypes = {
  value: PropTypes.objectOf(PropTypes.string),
  selectAction: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Selector;
