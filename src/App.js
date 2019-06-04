import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    highscore: 0
  };

    // Shuffle the friend cards when clicked
  clickedFriend = () => {
    const shuffle = this.state.friends;

    shuffle.forEach(() => {
      this.setState({friend: shuffle.sort(() => Math.random() - 0.5)
      })
    })
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>

          {this.state.friends.map(friend => (
            <FriendCard
              clickedFriend={this.clickedFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper></div>
    );
  }
}

export default App;
