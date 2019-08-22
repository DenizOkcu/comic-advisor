import React from "react";

const RedButton = ({ link, text, classes, clickFunction, blank = false }) => {
  return (
    <a
      href={link}
      target={blank ? "_blank" : ""}
      rel="noopener noreferrer"
      className={classes}
      onClick={clickFunction}
    >
      {text}
    </a>
  );
};

export default RedButton;
