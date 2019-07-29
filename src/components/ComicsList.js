import React from "react";
import ComicsListItem from "./ComicsListItem";
import EmptyComicsListItem from "./EmptyComicsListItem";

const ComicsList = ({ comics, selectedComic, selectComic }) => {
  const listItems =
    comics &&
    comics.length > 0 &&
    comics.map(comic => (
      <ComicsListItem
        key={comic.id}
        active={selectedComic && selectedComic.id === comic.id}
        comic={comic}
        selectComic={selectComic}
      />
    ));

  return (
    <aside className="four columns">
      {listItems || <EmptyComicsListItem />}
    </aside>
  );
};

export default ComicsList;
