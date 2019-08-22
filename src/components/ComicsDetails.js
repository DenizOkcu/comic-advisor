import React from "react";

import RedButton from "./RedButton";
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
      className={
        "details" +
        (detailsHiddenOnMobile ? " hidden-on-mobile" : " visible-on-mobile")
      }
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
          {comic.characters && comic.characters.length > 0 && (
            <ComicDetailsCharacters characters={comic.characters} />
          )}
          {comic.creators && comic.creators.length > 0 && (
            <ComicDetailsCreators creators={comic.creators} />
          )}
          <b>Release:</b> {comic.date}
        </div>
      </div>

      <RedButton
        link={comic.purchaseLink}
        text={"Learn more"}
        classes={["primary-button"]}
        blank={true}
      />
    </article>
  );

  return comicDetail || null;
};

export default ComicsDetails;
