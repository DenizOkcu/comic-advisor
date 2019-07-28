import React from "react";
import ComicsListItem from "./ComicsListItem";

const ComicsList = props => {
  const listItems = props.comics.map(comic => (
    <ComicsListItem
      key={comic.id}
      comic={comic}
      selectComic={props.selectComic}
    />
  ));

  return (
    <aside className="four columns">
      <h4>Comics List</h4>
      <hr />
      {listItems}
    </aside>
  );
};

export default ComicsList;
