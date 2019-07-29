import React, { Component } from "react";

import { Container, Row } from "./components/grid";
import Header from "./components/Header";
import ComicsDetails from "./components/ComicsDetails";
import ComicsList from "./components/ComicsList";
import ComicsSerializer from "./utils/ComicsSerializer";

// import mock data
import comicsData from "./data/comics";

import "./App.css";

class App extends Component {
  // TODO: get selectedComicId from route || default
  state = {
    comics: null,
    selectedComicId: null
  };

  componentDidMount() {
    // use mock data: comicsData
    const comicsSerializer = new ComicsSerializer();
    const comics = comicsSerializer.serialize(comicsData);

    this.setState({ comics: comics });
    this.setState({ selectedComicId: comics[0] && comics[0].id });
  }

  // TODO: build two components for loading and displaying

  selectComic = id => {
    // TODO: update url after implementing routes
    this.setState({ selectedComicId: id });
  };

  render() {
    let comics = this.state.comics;
    let selectedComic =
      comics && comics.find(comic => comic.id === this.state.selectedComicId);

    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <main>
            <ComicsList
              comics={comics}
              selectedComic={selectedComic}
              selectComic={this.selectComic}
            />
            <ComicsDetails comic={selectedComic} />
          </main>
        </Row>
      </Container>
    );
  }
}

export default App;
