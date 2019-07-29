import React from "react";
import { Row } from "./grid";

const ComicsListItem = ({ comic, selectComic }) => {
  const writer = comic.creators.find(
    creator =>
      creator.role === "writer" ||
      creator.role === "inker" ||
      creator.role === "editor"
  );
  // better function name
  const onclick = () => {
    selectComic(comic.id);
  };

  return (
    <Row onClick={onclick}>
      <div className="fixed four columns ">
        <img src={comic.coverPath} className="thumb" alt={comic.title} />
      </div>
      <div className="fixed eight columns ">
        <Row>
          <div className="twelve columns list-item-title">{comic.title}</div>
        </Row>
        <Row>
          <div className="twelve columns">{writer && writer.name}</div>
        </Row>
        <Row>
          <div className="twelve columns">
            Issue {comic.issueNumber} - {comic.price}
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default ComicsListItem;
