import React from "react";

import ComicDetailsCreators from "./ComicDetailsCreators";
import ComicDetailsCharacters from "./ComicDetailsCharacters";

import "./ComicsDetails.css";

// renders the detail view
// it is a hidden modal in mobile portait mode
// which can be shown by selecting a comic from the list view
// it consists of the cover image and information about
// creators and characters
// a button leads to the external comic book shop
const ComicsDetails = ({
  comic,
  detailsHiddenOnMobile,
  clickToCloseDetails
}) => {
  const comicDetail = comic && (
    <article
      className={"details" + (detailsHiddenOnMobile ? " hidden-on-mobile" : "")}
    >
      {/* a close button for the mobile modal view */}
      <div
        onClick={clickToCloseDetails}
        className="close-details hidden-on-gt-mobile"
      >
        close
      </div>

      <p className="detail-title">{comic.title}</p>

      <div className="detail-cover-text-container">
        <div className="detail-cover">
          <img src={comic.coverPath} className="" alt={comic.title} />
        </div>

        <div className="detail-text">
          <ComicDetailsCharacters characters={comic.characters} />
          <ComicDetailsCreators creators={comic.creators} />
          <b>Release:</b> {comic.date}
        </div>
      </div>

      <a
        href={comic.purchaseLink}
        target="_blank"
        rel="noopener noreferrer"
        className=" primary-button"
      >
        Buy this issue for {comic.price}
      </a>
    </article>
  );

  return comicDetail;
};

export default ComicsDetails;
