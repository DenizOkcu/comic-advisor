import React from "react";
import { Row } from "./grid";

const ComicsListItem = ({ comic, selectComic }) => {
  const writerSection = comic.writer ? (
    <Row>
      <div className="twelve columns">{comic.writer.name}</div>
    </Row>
  ) : (
    ""
  );
  const clickToSelectComic = () => {
    selectComic(comic.id);
  };

  return (
    <Row>
      <section className="comics-list-item" onClick={clickToSelectComic}>
        <div className="four columns">
          <img src={comic.coverPath} className="thumb" alt={comic.title} />
        </div>
        <div className="eight columns ">
          <Row>
            <div className="twelve columns list-item-title">{comic.title}</div>
          </Row>
          {writerSection}
          <Row>
            <div className="twelve columns">
              Issue: {comic.issueNumber} - {comic.price}
            </div>
          </Row>
        </div>
      </section>
    </Row>
  );
};

export default ComicsListItem;
