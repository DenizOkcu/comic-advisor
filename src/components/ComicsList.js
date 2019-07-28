import React from "react";
import ComicsListItem from "./ComicsListItem";

const ComicsList = () => {
  return (
    <div className="four columns header bordered-box">
      <h4>Comics List</h4>
      <hr />
      <ComicsListItem />
      <ComicsListItem />
    </div>
  );
};

export default ComicsList;
