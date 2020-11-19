import React, { Component } from "react";
class Email extends Component {
  state = {
    person: null,
    email: {
      recipient: "",
      sender: "BlockTest57@gmail.com",
      subject: "CLC inc. Personal Survey information",
      text: `Hello the text below covers the course and classes your interested in from our company:`,
    },
  };

  sendEmail = (_) => {
    const { email } = this.state;
    fetch(
      `http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`
    ) //query string url
      .catch((err) => console.error(err));
  };

  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10,
    };
    return (
      <div>
        <div style={{ marginTop: 10 }}>
          <h2>Please enter your email below</h2>
          <br />
          <input
            value={email.recipient}
            onChange={(e) =>
              this.setState({ email: { ...email, recipient: e.target.value } })
            }
          />
          <div style={spacer} />
          <button id="more-info" onClick={this.sendEmail}>
            {" "}
            Send Email{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Email;
