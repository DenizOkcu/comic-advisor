import React from "react";

import RedButton from "./RedButton";
import ComicsListItem from "./ComicsListItem";

import "./ComicsList.css";

const ComicsList = ({
  comics,
  selectedComic,
  selectComic,
  fetchComics,
  fetchHistory
}) => {
  const clickToFetchNewComics = e => {
    fetchComics();
    e.preventDefault();
  };

  const clickToFetchHistory = e => {
    fetchHistory();
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
      <div className="bottom-nav">
        <RedButton
          text={"Load more"}
          classes={["random-button"]}
          clickFunction={clickToFetchNewComics}
        />
        <RedButton
          text={"Load Recent"}
          classes={["recent-button"]}
          clickFunction={clickToFetchHistory}
        />
      </div>
    </aside>
  );
};

export default ComicsList;
