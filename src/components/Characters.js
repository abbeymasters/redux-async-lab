import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

const Characters = ({ characters }) => {
  const allCharacters = characters.map(character => {
    return <li key={character.id}>
      <Character {...character} />
    </li>;
  });

  return (
    <ul className={styles.Characters}>
      {allCharacters}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
