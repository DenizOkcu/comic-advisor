import React from "react";
import ComicsListItem from "./ComicsListItem";
import EmptyComicsListItem from "./EmptyComicsListItem";

const ComicsList = ({ comics, selectComic }) => {
  const listItems =
    comics &&
    comics.length > 0 &&
    comics.map(comic => (
      <ComicsListItem key={comic.id} comic={comic} selectComic={selectComic} />
    ));

  return (
    <aside className="four columns">
      <h4>Comics List</h4>
      <hr />
      {listItems || <EmptyComicsListItem />}
    </aside>
  );
};

export default ComicsList;
