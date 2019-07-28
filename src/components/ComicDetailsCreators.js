import React from "react";

const ComicDetailsCreators = ({ creators }) => {
  // ids für den key im serializer vergeben
  const creatorItems = creators.map(creator => (
    <li key={creator.name}>{`${creator.name}(${creator.role})`}</li>
  ));

  return (
    <section>
      Created by:
      <ul>{creatorItems}</ul>
    </section>
  );
};

export default ComicDetailsCreators;
