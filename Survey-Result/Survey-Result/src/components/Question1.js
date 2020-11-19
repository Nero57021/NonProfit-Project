import React from "react";
import "./App.css";
class Question1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userId,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // async componentDidMount() {
  //   const url = "http://172.20.30.172:8080/question1?id=&response=";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ id:this.state.id, loading: false,});
  //   console.log(data);
  // }

  handleClick = (e) => {
    var data = { id: this.state.id };
    const params = new URLSearchParams({
      id: this.state.id,
    }).toString();
    console.log(params);

    const url = "http://172.20.30.172:8080/question1?" + params;
    const response = fetch(url + params, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      this.setState({
        id: this.state.id,
      });
    });

    this.props.history.push({ pathname: "/q2" });
  };
  render() {
    return (
      <div>
        <h2>Are you open to job opportunities?</h2>
        <button onClick={this.handleClick}>Yes</button>
        <div className="divider1" />
        <button onClick={this.handleClick}>No</button>
      </div>
    );
  }
}
export default Question1;
