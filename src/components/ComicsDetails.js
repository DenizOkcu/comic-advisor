import React from "react";
import ComicDetailsCreators from "./ComicDetailsCreators";

const ComicsDetails = props => {
  return (
    <main>
      <article className="eight columns hide-on-small">
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
              src={`${props.comic.thumbnail &&
                props.comic.thumbnail.path}.${props.comic.thumbnail &&
                props.comic.thumbnail.extension}`}
              className="detail-img"
              alt={props.comic.title}
            />
          </div>
          <div className="seven columns">
            <ComicDetailsCreators creators={props.comic.creators.items} />
          </div>
        </div>
      </article>
    </main>
  );
};

export default ComicsDetails;
