// nicht der api trauen - validieren!
// serializer bauen

class ComicsSerializer {
  formatPrice = priceString => priceString && `$${priceString}`;
  formatDate = dateString => {
    let date = new Date(Date.parse(dateString)).toDateString();
    return date !== "Invalid Date" ? date : "No Date available";
  };

  serialize = response => {
    let comics = [];
    response.data.results.map(item => {
      let comic = {};

      try {
        comic.coverPath = `${item.thumbnail.path}.${item.thumbnail.extension}`;
        comic.creators = item.creators.items.map((creator, index) => {
          creator.id = index;
          return creator;
        });
        comic.writer = comic.creators.find(
          creator =>
            creator.role === "writer" ||
            creator.role === "inker" ||
            creator.role === "editor"
        );
        comic.characters = item.characters.items.map((character, index) => {
          character.id = index;
          return character;
        });
        comic.id = item.id;
        comic.pageCount = item.pageCount || "-";
        comic.price = this.formatPrice(
          item.prices.find(price => price.type === "printPrice").price || "-"
        );
        comic.title = item.title || "No Title";
        comic.description = item.description;
        comic.purchaseLink = item.urls.find(
          url => url.type === "purchase" || url.type === "detail"
        ).url;
        comic.date = this.formatDate(
          item.dates.find(
            date => date.type === "focDate" || date.type === "onsaleDate"
          ).date
        );

        comics.push(comic);
      } catch (e) {
        console.log(e);
      }
    });
    // add price and date formatter
    // add prop types

    return comics;
  };
}

export default ComicsSerializer;
