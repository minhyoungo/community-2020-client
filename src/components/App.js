import React, { Component } from "react";
import MM00_v from "./screens/MM00_v";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MM00_v} />
      </div>
    );
  }
}

export default App;
