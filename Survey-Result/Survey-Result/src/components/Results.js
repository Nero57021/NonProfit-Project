import React from "react";

class Results extends React.Component {
  render() {
    return (
      <div>
        <h2>Here are your results!</h2>
        <h3>You matched with the [program name] program!</h3>
        <a href="https://www.clcinc.org/">
          <button id="more-info">Get more Info</button>
        </a>
        <div className="divider1" />
        <a href="https://www.clcinc.org/contact.html">
          <button id="more-info">Sign me up!</button>
        </a>
      </div>
    );
  }
}
export default Results;
