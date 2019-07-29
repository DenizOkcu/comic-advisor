import React from "react";

const ComicDetailsCharacters = ({ characters }) => {
  const characterItems = characters.map(character => (
    <li key={character.id}>{`${character.name}`}</li>
  ));

  return (
    <section>
      <b>Characters in this issue:</b>
      <ul>{characterItems}</ul>
    </section>
  );
};

export default ComicDetailsCharacters;
