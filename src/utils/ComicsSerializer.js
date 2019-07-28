// nicht der api trauen - validieren!
// serializer bauen

class ComicsSerializer {
  serialize(response) {
    const comics = [];

    response.data.results.map(item => {
      let comic = {};

      comic.id = item.id;
      comic.creators = item.creators.items;
      comic.price = item.prices.find(
        price => price.type === "printPrice"
      ).price;
      comic.coverPath = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      comic.pageCount = item.pageCount;
      comic.title = item.title;

      comics.push(comic);
    });

    return comics;
  }
}

export default ComicsSerializer;
