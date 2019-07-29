import React from "react";
import { Row } from "./grid";
import "./EmptyComicsDetails.css";

const ComicsDetails = () => {
  // TODO: loading placeholder

  return (
    <div>
      <article className="eight columns hide-on-small">
        <h4>Comics Details</h4>
        <hr />
        <Row>
          <div className="twelve columns loading-container">
            <h5>Wait, your comics are loading</h5>
            <div className="loading-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </Row>
      </article>
    </div>
  );
};

export default ComicsDetails;
