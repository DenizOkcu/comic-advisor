import React, { Component } from "react";

import Header from "./components/Header";
import ComicsDetails from "./components/ComicsDetails";
import ComicsList from "./components/ComicsList";
import ComicsSerializer from "./utils/ComicsSerializer";

// import mock data for Part 1
// Part 2 TODO: replace with an actual endpoint
import comicsData from "./data/comics";

import "./App.css";

class App extends Component {
  // the state will hold
  // - the comics
  // - the id of the selected comic for the detail view
  // - information if the detail modal in mobile portrait mode is hidden
  state = {
    comics: null,
    selectedComicId: null,
    detailsHiddenOnMobile: true
  };

  componentDidMount() {
    // validate and cleanup the comic data
    // fill missing attributes with defaults
    const comicsSerializer = new ComicsSerializer();
    const comics = comicsSerializer.serialize(comicsData);

    // add comics to the state
    this.setState({ comics: comics });
    // Part 2 TODO: get selectedComicId from route || first comic id
    this.setState({ selectedComicId: comics[0] && comics[0].id });
  }

  // function to select a comic from the list
  selectComic = id => {
    // TODO: update url after implementing routes
    this.setState({ selectedComicId: id });
    this.setState({ detailsHiddenOnMobile: false });
  };

  // function to let the user close the mobile detail modal
  clickToCloseDetails = () => {
    this.setState({ detailsHiddenOnMobile: true });
  };

  render() {
    let comics = this.state.comics;
    // find the selected comic object
    let selectedComic =
      comics && comics.find(comic => comic.id === this.state.selectedComicId);

    return (
      <div className="container">
        <Header />
        {comics ? (
          <main>
            <ComicsList
              comics={comics}
              selectedComic={selectedComic}
              selectComic={this.selectComic}
            />
            <ComicsDetails
              comic={selectedComic}
              detailsHiddenOnMobile={this.state.detailsHiddenOnMobile}
              clickToCloseDetails={this.clickToCloseDetails}
            />
          </main>
        ) : (
          <main className="loading-wrapper">
            <div className="loading-title">Your comics are loading</div>
            <div className="loading-ripple">
              <div></div>
              <div></div>
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default App;
