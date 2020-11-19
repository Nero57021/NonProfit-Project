import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Survey from "./components/Survey";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Front from "./design/front";
import { Layout } from "./components/Layout";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goSignal: false,
      id: "",
    };
  }

  componentDidMount() {
    console.log(this.state);
    if (!this.state.id) {
      const url = "http://172.20.30.172:8080/from?origin=";
      axios.get(url).then((res) => {
        this.setState({ id: res.data.userId });
        console.log(this.state);
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Switch id="generic">
            <Route exact path="/" component={Survey} />
            <Route
              exact
              path="/q1"
              render={(props) => (
                <Question1 userId={this.state.id} {...props} />
              )}
            />
            <Route
              exact
              path="/q2"
              render={(props) => (
                <Question2 userId={this.state.id} {...props} />
              )}
            />
            <Route
              exact
              path="/q3"
              render={(props) => (
                <Question3 userId={this.state.id} {...props} />
              )}
            />
            <Route
              exact
              path="/q4"
              render={(props) => (
                <Question4 userId={this.state.id} {...props} />
              )}
            />
            <Route
              exact
              path="/results"
              render={(props) => <Front userId={this.state.id} {...props} />}
            />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;
