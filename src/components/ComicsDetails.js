import React from "react";

const ComicsDetails = () => {
  return (
    <div className="eight columns header bordered-box hide-on-small">
      <h4>Comics Details</h4>
      <hr />
      <div className="row">
        <div className="twelve columns">
          <h5 className="detail-title">
            Moon Girl and Devil Dinosaur (2015) #23
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="five columns">
          <img src="./assets/59c2888aa0554.jpg" className="detail-img" />
        </div>
        <div className="seven columns">
          <p className="detail-description">
            IT'S THE END OF AN ERA AS “GIRL-MOON” REACHES ITS STUNNING
            CONCLUSION! Lunella and Devil's adventure took them across space -
            now they're going through time! Hey, didn't Devil used to have a
            different partner? Devil makes the hardest choice of all...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComicsDetails;
