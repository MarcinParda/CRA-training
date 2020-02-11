import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: []
  };

  componentDidMount() {
    fetch("data/words.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          words: data.words
        });
      });
  }

  render() {
    const words = this.state.words.map(word => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));
    return <ul>{words}</ul>;
  }
}

export default App;
