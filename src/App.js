import React from "react";
import "./App.css";
import Card from "./Card";

//Component to rep a single card
//Another component to rep a list

class App extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>The Github Cards App</h1>
        <Card />
      </div>
    );
  }
}

export default App;
