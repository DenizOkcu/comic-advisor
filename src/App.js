import React from "react";
import Header from "./components/Header";
import ComicsList from "./components/ComicsList";
import ComicsDetails from "./components/ComicsDetails";
import comics from "./data/comics";
import "./App.css";

class App extends React.Component {
  state = {
    comics: comics.data.results,
    selectedComic: comics.data.results[0]
  };

  selectComic = comic => {
    this.setState({ selectedComic: comic });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <ComicsList
            comics={this.state.comics}
            selectComic={this.selectComic}
          />
          <ComicsDetails comic={this.state.selectedComic} />
        </div>
      </div>
    );
  }
}

export default App;
