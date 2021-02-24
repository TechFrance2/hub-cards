import React from "react";
import "./App.css";
import Form from "./Form";
import CardList from "./CardList";

//Component to rep a single card
//Another component to rep a list

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">
          <h1>GitHub Users</h1>
        </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
