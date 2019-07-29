import React from "react";
import { Row } from "./grid";
import "./ComicsListItem.css";

const ComicsListItem = ({ comic, active, selectComic }) => {
  const clickToSelectComic = () => {
    selectComic(comic.id);
  };

  return (
    <Row>
      <section
        className={"list-item" + (active ? " active" : "")}
        onClick={clickToSelectComic}
      >
        <div className="four columns">
          <img
            src={comic.coverPath}
            className="list-item-cover"
            alt={comic.title}
          />
        </div>
        <div className="eight columns ">
          <Row>
            <div className="twelve columns list-item-title">{comic.title}</div>
          </Row>
          {comic.writer ? (
            <Row>
              <div className="twelve columns">by {comic.writer.name}</div>
            </Row>
          ) : (
            ""
          )}
          <Row>
            <div className="twelve columns">Price: {comic.price}</div>
          </Row>
          <Row>
            <div className="twelve columns">Issue: {comic.issueNumber}</div>
          </Row>
        </div>
      </section>
    </Row>
  );
};

export default ComicsListItem;
