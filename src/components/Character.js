import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ photoUrl, name }) => {
  return (
    <>
      <img src={photoUrl} alt={name} />
      <h1>{name}</h1>
    </>
  );
};

Character.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
