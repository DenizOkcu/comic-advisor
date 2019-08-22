import React from "react";

import "./ComicsListItem.css";

const ComicsListItem = ({ comic, active, selectComic }) => {
  const clickToSelectComic = () => {
    selectComic(comic.id);
  };

  // renders a list item that can select a comic
  // and that can have an active state while being selected
  return (
    <section
      className={"list-item" + (active ? " active" : "")}
      onClick={clickToSelectComic}
    >
      <div className="list-item-cover">
        <img src={comic.coverPath} alt={comic.title} />
      </div>

      <div className="list-item-description">
        <div>
          <b>{comic.title}</b>
        </div>
        {/* the writer can be empty due to different possible roles */}
        {comic.writer ? <div className="">by {comic.writer.name}</div> : ""}
        <div>Price: {comic.price}</div>
      </div>
    </section>
  );
};

export default ComicsListItem;
