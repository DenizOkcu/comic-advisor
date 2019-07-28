import React from "react";

const ComicsDetails = props => {
  return (
    <div className="eight columns header  hide-on-small">
      <h4>Comics Details</h4>
      <hr />
      <div className="row">
        <div className="twelve columns">
          <h5 className="detail-title">{props.comic.title}</h5>
        </div>
      </div>
      <div className="row">
        <div className="five columns">
          <img
            src={`${props.comic.thumbnail && props.comic.thumbnail.path}.${props
              .comic.thumbnail && props.comic.thumbnail.extension}`}
            className="detail-img"
          />
        </div>
        <div className="seven columns">
          <p className="detail-description">{props.comic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ComicsDetails;
