import React from "react";
import ComicsListItem from "./ComicsListItem";

// im rest destrukturieren (kann auf default) { comics, selectComic = {} }
const ComicsList = ({ comics, selectComic }) => {
  // kann auch in zeile 18 passieren
  const listItems =
    comics &&
    comics.map(comic => (
      <ComicsListItem key={comic.id} comic={comic} selectComic={selectComic} />
    ));

  return listItems ? (
    <aside className="four columns">
      <h4>Comics List</h4>
      <hr />
      {listItems}
    </aside>
  ) : (
    ""
  );
};

export default ComicsList;
