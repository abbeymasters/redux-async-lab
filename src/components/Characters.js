import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const Characters = ({ characters }) => {
  const allCharacters = characters.map(character => {
    <li key={character._id}>
      <Character {...character} />
    </li>;
  });

  return (
    <ul>
      {allCharacters}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
