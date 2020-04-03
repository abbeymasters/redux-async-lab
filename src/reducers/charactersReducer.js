import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_DONE, FETCH_CHARACTERS } from '../actions/charactersActions';
import { FETCH_ERROR } from '../actions/charactersActions';

const initialState = {
  list: [],
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_DONE:
      return { ...state, loading: false };
    case FETCH_CHARACTERS: 
      return { ...state, list: action.payload };
    case FETCH_ERROR: 
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
