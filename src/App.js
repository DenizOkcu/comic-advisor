import React, { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import ComicsDetails from "./components/ComicsDetails";
import ComicsList from "./components/ComicsList";
import ComicsSerializer from "./utils/ComicsSerializer";
import config from "./config";

import "./App.css";

class App extends Component {
  // the state will hold
  // - the comics
  // - the id of the selected comic for the detail view
  // - information if the detail modal in mobile portrait mode is hidden
  state = {
    comics: null,
    selectedComicId: null,
    detailsHiddenOnMobile: true,
    error: null
  };

  fetchComics = () => {
    const limit = 6;
    const offset = Math.ceil(Math.random() * 10000);
    const url = `${config.apiUrl}?limit=${limit}&offset=${offset}&apikey=${config.publicApiKey}`;

    // resets the comics, shows the spinner
    this.setState({ comics: null });
    this.setState({ selectedComicId: null });

    axios
      .get(url)
      .then(res => {
        // validate and cleanup the comic data
        // fill missing attributes with defaults
        const comicsSerializer = new ComicsSerializer();
        const comics = comicsSerializer.serialize(res.data);

        // add comics to the state
        this.setState({ comics });
        this.setState({ selectedComicId: comics[0] && comics[0].id });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  fetchHistory = () => {
    let comics = [];

    this.setState({ comics });
    this.setState({ selectedComicId: comics[0] && comics[0].id });
  };

  // function to select a comic from the list
  selectComic = id => {
    this.setState({ selectedComicId: id });
    this.setState({ detailsHiddenOnMobile: false });
  };

  // function to let the user close the mobile detail modal
  clickToCloseDetails = () => {
    this.setState({ detailsHiddenOnMobile: true });
  };

  componentDidMount() {
    this.fetchComics();
  }

  render() {
    // get the comics and find the selected comic object
    let comics = this.state.comics;
    let selectedComic =
      comics && comics.find(comic => comic.id === this.state.selectedComicId);

    // check for errors, a pending request or...
    let connectionMessage = this.state.error ? (
      <main className="loading-wrapper">
        <div className="loading-title">
          An error occurred. Please come back later.
        </div>
      </main>
    ) : (
      <main className="loading-wrapper">
        <div className="loading-title">Your comics are loading</div>
        <div className="loading-ripple">
          <div></div>
          <div></div>
        </div>
      </main>
    );
    // ...a successfully loaded response
    let contentSuccess = (
      <main>
        <ComicsList
          comics={comics}
          selectedComic={selectedComic}
          selectComic={this.selectComic}
          fetchComics={this.fetchComics}
          fetchHistory={this.fetchHistory}
        />
        <ComicsDetails
          comic={selectedComic}
          detailsHiddenOnMobile={this.state.detailsHiddenOnMobile}
          clickToCloseDetails={this.clickToCloseDetails}
        />
      </main>
    );

    return (
      <div className="container">
        <Header />
        {comics ? contentSuccess : connectionMessage}
      </div>
    );
  }
}

export default App;
