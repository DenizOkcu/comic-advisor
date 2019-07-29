import React from "react";

import RedButton from "./RedButton";
import ComicsListItem from "./ComicsListItem";

import "./ComicsList.css";

const ComicsList = ({ comics, selectedComic, selectComic }) => {
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
    <div className="comics-list">
      <RedButton
        link={"/"}
        text={"Give me more!"}
        classes={["random-button"]}
      />
      <div className="filterWrapper"></div>
      <aside>{listItems}</aside>
    </div>
  );
};

export default ComicsList;
