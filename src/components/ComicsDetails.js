import React from "react";
import { Row } from "./grid";
import ComicDetailsCreators from "./ComicDetailsCreators";

const ComicsDetails = ({ comic }) => {
  // zeile 18+19 hier bearbeiten
  // oder sogar thumbnail komponente anlegen

  // comic image komponente bauen
  // platzhalter rndern fürs laden
  // size übergeben

  return (
    <main>
      {comic ? (
        <article className="eight columns hide-on-small">
          <h4>Comics Details</h4>
          <hr />
          <Row>
            <div className="twelve columns">
              <h5 className="detail-title">{comic.title}</h5>
            </div>
          </Row>
          <Row>
            <div className="five columns">
              <img
                src={comic.coverPath}
                className="detail-img"
                alt={comic.title}
              />
            </div>
            <div className="seven columns">
              <ComicDetailsCreators creators={comic.creators} />
            </div>
          </Row>
        </article>
      ) : (
        ""
      )}
    </main>
  );
};

export default ComicsDetails;
