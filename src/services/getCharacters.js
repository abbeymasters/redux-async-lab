export const getCharacters = () => {

  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => {
      return characters.map(character => ({
        id: character._id,
        name: character.name,
        photoUrl: character.photoUrl
      })
      );
    });
};

