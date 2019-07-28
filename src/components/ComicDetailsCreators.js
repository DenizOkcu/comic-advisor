import React from "react";

const ComicDetailsCreators = props => {
  const creators = props.creators.map(creator => (
    <li key={creator.name}>{`${creator.name}(${creator.role})`}</li>
  ));

  return (
    <section>
      Created by:
      <ul>{creators}</ul>
    </section>
  );
};

export default ComicDetailsCreators;
