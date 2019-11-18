import React, { useEffect } from 'react';
import Characters from '../components/Characters';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelectors';
import { fetchCharacters } from '../actions/charactersActions';
import { useSelector, useDispatch } from 'react-redux';

function AllCharacters() {

  const list = useSelector(state => getCharacters(state));
  const loading = useSelector(state => getCharactersLoading(state));
  const dispatch = useDispatch();
  const loadCharacters = () => dispatch(fetchCharacters());

  useEffect(() => {
    loadCharacters();
  }, []);

  if(loading) return <h1>Retrieving Characters...</h1>;

  return (
    <Characters characters={list} />
  );
}

export default AllCharacters;
