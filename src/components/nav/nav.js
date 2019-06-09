
import React from "react";
import "./nav.css";

class nav extends React.Component {
    render() {
        return (
            <div className="header col-sm-12">
                <link href="https://fonts.googleapis.com/css?family=Allan" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
                <div className="title">
                    <h1>The Memory Game</h1>
                    <h4>Click on an image to earn points.</h4>
                    <h4>Make sure not to click on an image more than once!</h4>
                </div>
                <div className="scores">
                    <p id="score">Score: {this.props.currentScore} | High Score: {this.props.topScore}</p>
                </div>
            </div>
        )
    }
}

export default nav;