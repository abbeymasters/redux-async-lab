import { getCharacters } from '../services/getCharacters';
import FETCH_ERROR from '../reducers/charactersReducer';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';
export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  getCharacters()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });

      dispatch({
        type: FETCH_CHARACTERS_LOADING
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_ERROR,
        payload: error
      });
    });
};


