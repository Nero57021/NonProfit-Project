import React from "react";
import SliderAns from "./Slider";

class Question3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userId,
      book: 1,
      mach: 1,
      it: 1,
      logi: 1,
    };
  }
  // async componentDidMount() {
  //   const url = "http://172.20.30.172:8080/question3?id=&book=&mach=&it=&logi=";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ person: data, loading: false,});
  //   console.log(data);
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    var data = {};
    const params = new URLSearchParams({
      id: this.state.id,
      book: this.state.book,
      mach: this.state.mach,
      it: this.state.it,
      logi: this.state.logi,
    }).toString();
    console.log(params);

    const url = "http://172.20.30.172:8080/question3?" + params;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });
    this.props.history.push({ pathname: "/q4" });
  };
  updateValue = (value, name) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div id="generic">
            <h2>Rate the following activities of interest from 1-5:</h2>
            <h4>1 being the least interesting and 5 being the most exciting</h4>
            <p>Manage the financial data and account books of a business.</p>
            <SliderAns
              id="snorlax"
              name="book"
              updateValue={this.updateValue}
            />
            <p>Operate machinery tools in a factory setting.</p>
            <SliderAns name="mach" updateValue={this.updateValue} />
            <p>
              Utilize problem solving skills to perform technological
              troubleshooting.
            </p>
            <SliderAns name="it" updateValue={this.updateValue} />
            <p>
              Use management skills to deal with logistics of supply chain
              facilities.
            </p>
            <SliderAns name="logi" updateValue={this.updateValue} />
          </div>
          <div id="generic" className="submit">
            <div className="divider3" />
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Question3;
