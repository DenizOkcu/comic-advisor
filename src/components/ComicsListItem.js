import React from "react";

const ComicsListItem = () => {
  return (
    <div className="row">
      <div className="fixed four columns bordered-box">
        <img src="./assets/59c2888aa0554.jpg" className="thumb" />
      </div>
      <div className="fixed eight columns bordered-box">
        <div className="row">
          <div className="twelve columns list-item-title">
            Moon Girl and Devil Dinosaur (2015) #23
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">by Brandon Montclare</div>
        </div>
        <div className="row">
          <div className="twelve columns">09.12.2017 - 32 Pages</div>
        </div>
      </div>
    </div>
  );
};

export default ComicsListItem;
