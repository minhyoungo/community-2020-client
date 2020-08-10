import React, { Component } from "react";
import MM00_v from "./screens/MM00_v";
import { Route } from "react-router-dom";
import FreeBoard from "./screens/FreeBoard";
import DocsBoard from "./screens/DocsBoard";
import GallaryBoard from "./screens/GallaryBoard";
import Header from "./screens/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={MM00_v} />
        <Route exact path="/freeboard" component={FreeBoard} />
        <Route exact path="/docsboard" component={DocsBoard} />
        <Route exact path="/gallaryboard" component={GallaryBoard} />
      </div>
    );
  }
}

export default App;
