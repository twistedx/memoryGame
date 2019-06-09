import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    selected: [],
    topScore: 0,
    currentScore: 0
  };

  updateSelected = name => {
    if (this.state.selected.indexOf(name) > -1) {
      alert("You Lose, try again.")
      this.setState({ selected: [], currentScore: 0 })

      if (this.state.currentScore > this.state.topScore) {
        this.setState({ topScore: this.state.currentScore })
      }

      this.setState({ score: 0 })

      return;
    } else {
      var currentScore = this.state.currentScore;
      currentScore++;

      if (currentScore > this.state.topScore) {
        this.setState({ topScore: currentScore })
      }
      this.setState({ currentScore: currentScore })
    }

    let selected = this.state.selected
    selected.push(name)
    this.setState({ selected })
  }

  randomImage = () => {
    const tempArr = [];
    while (tempArr.length !== friends.length) {
      let image = friends[Math.floor(Math.random() * friends.length)];
      if (tempArr.indexOf(image) < 0) {
        tempArr.push(image)
      }
    }
    return tempArr
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>
        <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
        {this.randomImage().map(img => (
          <FriendCard
            updateSelected={this.updateSelected}
            name={img.name}
            image={img.image}
          />
        ))}

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
