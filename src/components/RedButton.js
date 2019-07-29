import React from "react";

const RedButton = ({ link, text, classes, blank = false }) => {
  return (
    <a
      href={link}
      target={blank ? "_blank" : ""}
      rel="noopener noreferrer"
      className={classes}
    >
      {text}
    </a>
  );
};

export default RedButton;
