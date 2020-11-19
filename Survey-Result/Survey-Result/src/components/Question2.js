import React from "react";
import Survey from "./Survey";
class Question2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userId,
      age: null,
      edu: null,
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  // async componentDidMount() {
  //   const url = "http://172.20.30.172:8080/question2?id=&age=&edu=";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ person: data, loading: false, id: data.userId });
  //   console.log(data);
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    var data = {};
    const params = new URLSearchParams({
      id: this.state.id,
      age: this.state.age,
      edu: this.state.edu,
    }).toString();
    console.log(params);

    const url = "http://172.20.30.172:8080/question2?" + params;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    // console.log(data);

    var path = "/q3";
    if (this.state.age === "15") {
      path = "/results";
    } else {
      path = "/q3";
    }
    console.log(this.props.location);
    this.props.history.push({
      pathname: path,
      state: this.props.location.state,
    });
  };
  handleOptionChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div id="generic">
        <h2>What is your age?</h2>
        <form id="pikachu" onSubmit={this.handleSubmit}>
          <input
            color="primary"
            type="radio"
            name="age"
            value="15"
            checked={this.state.age === "15"}
            onChange={this.handleOptionChange}
          />
          15 or below
          <div className="divider1" />
          <input
            color="#01569"
            type="radio"
            name="age"
            value="17"
            checked={this.state.age === "17"}
            onChange={this.handleOptionChange}
          />
          16-17
          <div className="divider1" />
          <input
            type="radio"
            name="age"
            value="21"
            checked={this.state.age === "21"}
            onChange={this.handleOptionChange}
          />
          18-21
          <div className="divider1" />
          <input
            type="radio"
            name="age"
            value="24"
            checked={this.state.age === "24"}
            onChange={this.handleOptionChange}
          />
          22-24
          <div className="divider1" />
          <input
            type="radio"
            name="age"
            value="25"
            checked={this.state.age === "25"}
            onChange={this.handleOptionChange}
          />
          24 or above
          <h2>Do you have a high school diploma?</h2>
          <input
            type="radio"
            name="edu"
            value="yes"
            checked={this.state.edu === "yes"}
            onChange={this.handleOptionChange}
          />
          Yes
          <div className="divider1" />
          <input
            type="radio"
            name="edu"
            value="no"
            checked={this.state.edu === "no"}
            onChange={this.handleOptionChange}
          />
          No
          <div id="generic" className="submit">
            <div className="divider3" />
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Question2;
