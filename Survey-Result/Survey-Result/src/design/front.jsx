import React, { Component } from "react";
import "./assets/css/main.css";
import Email from "./email";
import FetchClass from "./classFetcher1";
import FetchClass2 from "./classFetcher2";
import FetchImg from "./imageFetch";
import FetchImg2 from "./imageFetch2";
import YouthClass from "./youthMatch";
import YouthImg from "./youthImg";
//Made by Jeremy Bayangos

class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userId,
      program: "",
      class1: "",
      class2: "",
    };
  }
  async componentDidMount() {
    const params = new URLSearchParams({
      id: this.state.id,
    }).toString();
    const url = `http://172.20.30.172:8080/getresults?${params}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      program: data.program,
      class1: data.class1,
      class2: data.class2,
      loading: false,
    });
    console.log(data);
  }
  render() {
    return (
      <div color="White">
        {/* Header */}
        <header id="header">
          <div className="logo">
            <div href="#">
              {/* Results Page
              <span>
                <br></br>Team W4Y Presents
              </span> */}
            </div>
          </div>
        </header>
        {/* Main */}
        <section id="main">
          <div className="inner">
            {/* One */}
            <section id="one" className="wrapper style1">
              <div className="image fit flush"></div>
              <header className="special">
                <h2>Team W4Y Presents</h2>
                <img
                  src={require("./component/class-image/clc logo.png")}
                  alt=""
                />
                <h2>Here are your personal results</h2>
                <p color="white">You matched with</p>
              </header>
            </section>
            {/* Two */}

            {/* Three  this part here shows the resulting class with its image*/}
            <section id="three" className="wrapper">
              <div className="spotlight">
                <div className="image flush">
                  {/* <img src={require("./images/pic06.jpg")} alt="" /> */}
                  <YouthImg program={this.state.program} />
                  {/* <YouthClass id={this.props.location.state} /> */}
                </div>
                <div className="inner">
                  <h3>Here is the best youth program for you</h3>
                  <YouthClass program={this.state.program} />
                </div>
              </div>
              <div className="spotlight alt">
                <div className="image flush">
                  {/* <img src={require("./images/pic07.jpg")} alt="" /> */}
                  <FetchImg class={this.state.class1} />
                </div>
                <div className="inner">
                  <h3>Here is your top matching choice</h3>
                  <FetchClass class={this.state.class1} />
                </div>
              </div>
              <div className="spotlight">
                <div className="image flush">
                  {/* <img src={require("./images/pic04.jpg")} alt="" /> */}
                  <FetchImg2 class={this.state.class2} />
                </div>
                <div className="inner">
                  <h3>Here is your secondary matching choice</h3>
                  <FetchClass2 class={this.state.class2} />
                </div>
              </div>
            </section>
            <section id="two" className="wrapper style2">
              <header>
                <h2>Courses that may interest you</h2>
              </header>
              <div className="content">
                <div className="gallery">
                  <div>
                    <div className="image fit flush">
                      <a href="https://www.clcinc.org/training-composite.html">
                        <img src={require("./images/pic03.jpg")} alt="" />
                        <p>Aerospace</p>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="https://www.clcinc.org/training-machining.html">
                        <img src={require("./images/pic01.jpg")} alt="" />
                        <p>Machining</p>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="https://www.clcinc.org/training-comptiaAplus.html">
                        <img src={require("./images/pic04.jpg")} alt="" />
                        <p>Computer Tia+</p>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="https://www.clcinc.org/training-welding.html">
                        <img src={require("./images/pic05.jpg")} alt="" />
                        <p>Welding</p>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="https://www.clcinc.org/training-bookkeeping.html">
                        <img src={require("./images/book.jpg")} alt="" />
                        <p>Bookkeeping</p>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="image fit flush">
                      <a href="https://www.clcinc.org/training-clt.html">
                        <img src={require("./images/logic.jpg")} alt="" />
                        <p>Logistics</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="content">
              <h1>In case you want to save for later</h1>
              <Email />
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer id="footer">
          <div className="container">
            <a href="https://www.clcinc.org/contact.html">
              Contact us for any personal questions
            </a>
            <br></br>
            <a href="https://www.clcinc.org/contact.html">
              More info about CLC inc.
            </a>
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/clcfw?lang=en"
                  className="icon fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/CLCFW/"
                  className="icon fa-facebook"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/clcinc/?hl=en"
                  className="icon fa-instagram"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.snapchat.com/add/clcinc"
                  className="icon fa-snapchat"
                >
                  <span className="label">Email</span>
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/oPkJYcMUbdRmRfSaA"
                  className="icon fa-map"
                >
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
        {/* Scripts */}
      </div>
    );
  }
}

export default Front;
