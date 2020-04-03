import React, { useEffect } from 'react';
import Characters from '../components/Characters';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelectors';
import { setCharacterPromise } from '../actions/charactersActions';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AllCharacters.css';


function AllCharacters() {

  const list = useSelector(state => getCharacters(state));
  const loading = useSelector(state => getCharactersLoading(state));
  const dispatch = useDispatch();
  const loadCharacters = () => dispatch(setCharacterPromise());

  useEffect(() => {
    loadCharacters();
  }, []);

  if(loading) return <h1>Retrieving Characters...</h1>;

  return (
    <div className={styles.AllCharacters}>
      <h1>Last Airbender Characters</h1>
      <Characters characters={list} />
    </div>
  );
}

export default AllCharacters;
