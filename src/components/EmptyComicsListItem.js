import React from "react";
import { Row } from "./grid";

const ComicsListItem = ({ comic, selectComic }) => {
  return (
    <Row>
      <section className="empty-comics-list-item">
        <div className="four columns">
          <img className="list-item-cover" />
        </div>
        <div className="eight columns">
          <Row>
            <div className="twelve columns long-text"></div>
          </Row>
          <Row>
            <div className="twelve columns short-text"></div>
          </Row>
          <Row>
            <div className="twelve columns short-text"></div>
          </Row>
        </div>
      </section>
    </Row>
  );
};

export default ComicsListItem;
