import React from "react";

const ComicDetailsCreators = ({ creators }) => {
  // ids für den key im serializer vergeben
  const creatorItems = creators.map(creator => (
    <li key={creator.id}>{`${creator.name}(${creator.role})`}</li>
  ));

  return (
    <section>
      <b>Created by:</b>
      <ul>{creatorItems}</ul>
    </section>
  );
};

export default ComicDetailsCreators;
