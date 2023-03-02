import React from "react";
import { create } from "@lottiefiles/lottie-interactivity";

class LottieToken extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        player: "#firstLottie",
        mode: "scroll",
        actions: [
          {
            visibility: [0.5, 1.0],
            type: "play",
          },
        ],
      });
    });
  }
  render() {
    return (
      <div className="App">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          mode="scroll"
          src="./Token.json"
          style={{ width: "auto" }}
        ></lottie-player>
      </div>
    );
  }
}

export default LottieToken;
