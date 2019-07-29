import React from "react";
import { Row } from "./grid";
import EmptyComicsDetails from "./EmptyComicsDetails";
import ComicDetailsCreators from "./ComicDetailsCreators";
import ComicDetailsCharacters from "./ComicDetailsCharacters";
import "./ComicsDetails.css";

const ComicsDetails = ({ comic }) => {
  // TODO: loading placeholder
  const comicDetail = comic && (
    <article className="eight columns hide-on-small">
      <div className="details">
        <Row>
          <div className="twelve columns">
            <p className="detail-title">{comic.title}</p>
          </div>
        </Row>
        <Row>
          <div className="five columns">
            <img src={comic.coverPath} className="cover" alt={comic.title} />
          </div>
          <div className="seven columns">
            <ComicDetailsCharacters characters={comic.characters} />
            <ComicDetailsCreators creators={comic.creators} />
            <div>
              <b>Release:</b> {comic.date}
            </div>
          </div>
        </Row>
        <Row>
          <div className="twelve columns">
            <a
              href={comic.purchaseLink}
              target="_blank"
              className=" primary-button"
            >
              Buy this issue
            </a>
          </div>
        </Row>
      </div>
    </article>
  );

  return <div>{comicDetail || <EmptyComicsDetails />}</div>;
};

export default ComicsDetails;
