import React from "react";
import Header from "./components/Header";
import ComicsList from "./components/ComicsList";
import ComicsDetails from "./components/ComicsDetails";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <ComicsList />
        <ComicsDetails />
      </div>
    </div>
  );
}

export default App;
