import React from "react";

import RedButton from "./RedButton";
import ComicsListItem from "./ComicsListItem";

import "./ComicsList.css";

const ComicsList = ({ comics, selectedComic, selectComic, fetchComics }) => {
  const clickToFetchComics = e => {
    fetchComics();
    e.preventDefault();
  };

  // assemble the list items
  // only if at least one comic has been loaded
  const listItems =
    comics &&
    comics.length > 0 &&
    comics.map(comic => (
      <ComicsListItem
        key={comic.id}
        comic={comic}
        selectComic={selectComic}
        active={selectedComic && selectedComic.id === comic.id}
      />
    ));

  return (
    <aside className="comics-list">
      {listItems}
      <RedButton
        text={"Load more"}
        classes={["random-button"]}
        clickFunction={clickToFetchComics}
      />
    </aside>
  );
};

export default ComicsList;
