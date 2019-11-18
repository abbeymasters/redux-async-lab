export const getCharacters = () => {

  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => {
      characters.map(character => {
        return {
          id: character._id,
          name: character.name,
          photoUrl: character.photoUrl
        };
      });
    });
};


