// * Team W4Y - Install Dependencies, run the statement from below:
// * "yarn add express cors @sendgrid/mail"
// * To run server use the statement below:
// * 'nodemon index.js'
// *
// MAKE SURE YOU HAVE NODEMON Installed!
// For Reference check here: https://www.npmjs.com/package/nodemon
//Hides api key from being shown in code
require("dotenv").config();

const express = require("express"); //needed to launch server
const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails

const app = express(); //alias from the express function
//sendgrid api key
sgMail.setApiKey(process.env.key);

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server:
app.get("/", (req, res) => {
  res.send("Welcome to the Sendgrid Emailing Server: trial");
});

app.get("/send-email", (req, res) => {
  //Get Variables from query string in the search bar
  const { recipient, sender, topic, text } = req.query;

  //Sendgrid Data Requirements
  const msg = {
    to: [recipient],
    from: sender,
    subject: topic,
    text: text,
    html:
      "<div><strong>Hello here are the available courses that we have:</strong><br></br><list>https://www.clcinc.org/training-composite.html<br></br>https://www.clcinc.org/training-welding.html<br></br>https://www.clcinc.org/training-machining.html<br></br>https://www.clcinc.org/training-forklift.html<br></br>https://www.clcinc.org/training-clt.html<br></br>https://www.clcinc.org/training-comptiaAplus.html<br></br>https://www.clcinc.org/training-bookkeeping.html</list></div>",
  };

  //Send Email
  sgMail
    .send(msg)
    .then((msg) => {
      console.log("Message sucessfully sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });
});

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(4000, () => console.log("Running on Port 4000"));
