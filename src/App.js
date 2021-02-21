import React from "react";
import "./App.css";
import Form from "./Form";
import CardList from "./CardList";

//Component to rep a single card
//Another component to rep a list

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=2",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=2",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=2",
    company: "Facebook",
  },
];

class App extends React.Component {
  state = {
    profiles: testData,
  };
  render() {
    return (
      <div>
        <div className="header">
          <h1>GitHub Users</h1>
        </div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
