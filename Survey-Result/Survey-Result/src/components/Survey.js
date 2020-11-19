import React from "react";
import logo from "../assets/CLC Logo.png";

class Survey extends React.Component {
  // componentDidMount () {
  //   fetch('http://172.20.30.172:8080/from', {
  //     method: 'GET',
  //     body: JSON.stringify(),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then (res => res.json())
  // }
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div id="generic">
        <img id="logo" src={logo} alt={logo} />
        <h2>Questionnaire for CLC</h2>
        <button onClick={() => this.nextPath("/q1")}>Start</button>
      </div>
    );
  }
}
export default Survey;
