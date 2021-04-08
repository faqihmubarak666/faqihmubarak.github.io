import React, { Component } from "react";
import "./App.css";
import FooterWeb from "./component/FooterWeb";
import Headers from "./component/Headers";

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <FooterWeb />
      </div>
    );
  }
}

export default App;
