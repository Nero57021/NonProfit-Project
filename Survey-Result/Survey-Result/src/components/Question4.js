import React from "react";
import SliderAns from "./Slider";

class Question4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userId,
      weld: 1,
      fork: 1,
      aero: 1,
    };
  }
  // async componentDidMount() {
  //   const url = "http://172.20.30.172:8080/question4?id=&weld=&fork=&aero=";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ state: data, loading: false,});
  //   console.log(data);
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    var data = {};
    const params = new URLSearchParams({
      id: this.state.id,
      weld: this.state.weld,
      fork: this.state.fork,
      aero: this.state.aero,
    }).toString();
    console.log(params);

    const url = "http://172.20.30.172:8080/question4?" + params;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });
    this.props.history.push({ pathname: "/results" });
  };

  updateValue = (value, name) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="generic">
          <h2>
            Rate the following activities of interest from 1-5 (continued):
          </h2>
          <h4>1 being the least interesting and 5 being the most exciting</h4>
          <p>
            Learn in-demand fabrication processes to melt materials together.
          </p>
          <SliderAns name="weld" updateValue={this.updateValue} />
          <p>
            Operate a forklift in a manufacturing and industrial environments.
          </p>
          <SliderAns name="fork" updateValue={this.updateValue} />
          <p>Manage aircraft assembly and learn composite bonding.</p>
          <SliderAns name="aero" updateValue={this.updateValue} />
        </div>
        <div id="generic" className="submit">
          <button id="more-info" type="submit">
            See results!
          </button>
        </div>
      </form>
    );
  }
}
export default Question4;
