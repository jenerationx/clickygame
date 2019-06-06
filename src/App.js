import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";
import { createPublicKey } from "crypto";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    highscore: 0
  };

  // Shuffle the friend cards when clicked
  clickedFriend = (friend) => {
    const shuffle = this.state.friends;
    if (this.state.clickedFriends.includes(friend)) {
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score });
      } this.setState({ score: 0, clickedFriends: [] });
      alert("You clicked me already!  Sorry, game over!  Try again!");

    } else {
      shuffle.forEach(() => {
        this.setState({
          friends: shuffle.sort(() => Math.random() - 0.5), score: this.state.score + 1, clickedFriends: this.state.clickedFriends.concat([friend])
        })
      })
    };
    if (this.state.score === 11) {
      alert("Great Job! You win!");
      this.setState({ score: 0, clickedFriends: [], highscore: 12 });
      return true;
    };


  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore} />
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
        </Wrapper>
      </div>
    );
  }
}

export default App;
