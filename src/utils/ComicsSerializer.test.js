import ComicsSerializer from "./ComicsSerializer";

it("renders without crashing", () => {
  const serializer = new ComicsSerializer();
  const externalData = {
    data: {
      results: [
        {
          id: 73809,
          digitalId: 0,
          title: "Champions (2019) #6",
          issueNumber: 6,
          variantDescription: "",
          description: null,
          modified: "2019-06-12T09:02:45-0400",
          isbn: "",
          upc: "75960609259800611",
          diamondCode: "APR190748",
          ean: "",
          issn: "",
          format: "Comic",
          pageCount: 32,
          textObjects: [],
          resourceURI: "http://gateway.marvel.com/v1/public/comics/73809",
          urls: [
            {
              type: "detail",
              url:
                "http://marvel.com/comics/issue/73809/champions_2019_6?utm_campaign=apiRef&utm_source=e4d9813c604e68af2b80750496961901"
            },
            {
              type: "purchase",
              url:
                "http://comicstore.marvel.com/Champions-6/digital-comic/51716?utm_campaign=apiRef&utm_source=e4d9813c604e68af2b80750496961901"
            }
          ],
          series: {
            resourceURI: "http://gateway.marvel.com/v1/public/series/26592",
            name: "Champions (2019 - Present)"
          },
          variants: [],
          collections: [],
          collectedIssues: [],
          dates: [
            {
              type: "onsaleDate",
              date: "2019-06-12T00:00:00-0400"
            },
            {
              type: "focDate",
              date: "2019-05-20T00:00:00-0400"
            }
          ],
          prices: [
            {
              type: "printPrice",
              price: 3.99
            }
          ],
          thumbnail: {
            path: "test",
            extension: "jpg"
          },
          images: [
            {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5cf826bbd866a",
              extension: "jpg"
            },
            {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5cf7dda7539c1",
              extension: "jpg"
            }
          ],
          creators: {
            available: 1,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/73809/creators",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/creators/13215",
                name: "writer name",
                role: "writer"
              }
            ],
            returned: 7
          },
          characters: {
            available: 2,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/73809/characters",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1009285",
                name: "Dust"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/characters/1017577",
                name: "Ms. Marvel (Kamala Khan)"
              }
            ],
            returned: 2
          },
          stories: {
            available: 2,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/73809/stories",
            items: [
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/stories/164427",
                name: "cover from Champions (2019) #6",
                type: "cover"
              },
              {
                resourceURI:
                  "http://gateway.marvel.com/v1/public/stories/164428",
                name: "story from Champions (2019) #6",
                type: "interiorStory"
              }
            ],
            returned: 2
          },
          events: {
            available: 0,
            collectionURI:
              "http://gateway.marvel.com/v1/public/comics/73809/events",
            items: [],
            returned: 0
          }
        }
      ]
    }
  };
  const comics = [
    {
      id: 73809,
      creators: [
        {
          name: "writer name",
          resourceURI: "http://gateway.marvel.com/v1/public/creators/13215",
          role: "writer"
        }
      ],
      price: 3.99,
      coverPath: "test.jpg",
      pageCount: 32,
      title: "Champions (2019) #6"
    }
  ];

  expect(serializer.serialize(externalData)).toEqual(comics);
});
