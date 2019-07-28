import React from "react";

const ComicsListItem = props => {
  const writer = props.comic.creators.items.find(
    creator =>
      creator.role === "writer" ||
      creator.role === "inker" ||
      creator.role === "editor"
  );

  return (
    <div
      className="row"
      onClick={() => {
        props.selectComic(props.comic);
      }}
    >
      <div className="fixed four columns ">
        <img
          src={`${props.comic.thumbnail.path}.${props.comic.thumbnail.extension}`}
          className="thumb"
        />
      </div>
      <div className="fixed eight columns ">
        <div className="row">
          <div className="twelve columns list-item-title">
            {props.comic.title}
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">{writer && writer.name}</div>
        </div>
        <div className="row">
          <div className="twelve columns">
            {props.comic.pageCount} Pages - ${props.comic.prices[0].price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsListItem;
