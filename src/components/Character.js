import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ photoUrl, name }) => {
  return (
    <div className={styles.Character}>
      <img src={photoUrl} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

Character.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Character;
