import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.setshow = this.setshow.bind(this);
  }

  setshow() {
    //hh
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.setshow}>
          Show Para
        </button>
        {this.state.show && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
        {/* Do not remove this main div!! */}
      </div>
    );
  }
}

export default App;
