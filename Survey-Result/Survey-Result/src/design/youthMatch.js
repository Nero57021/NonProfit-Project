import React from "react";
export default class YouthClass extends React.Component {
  render() {
    // if (this.state.loading) {
    //   return <div>loading... website may be down</div>;
    // }
    if (this.props.program === "youthbuild") {
      return (
        <div>
          Youth Build Program <br></br>
          <a href="https://www.clcinc.org/youthbuild.html">Click here</a>
        </div>
      );
    }
    if (this.props.program === "re-entry program") {
      return (
        <div>
          Re-Entry Program <br></br>
          <a href="https://www.clcinc.org/reo.html">Click here</a>
        </div>
      );
    }
    if (this.props.program === "pathway to justice career") {
      return (
        <div>
          Pathways to Justice Careers <br></br>
          <a href="https://www.clcinc.org/pjc.html">Click here</a>
        </div>
      );
    }

    return <div>Nothing loaded: apologies</div>;
  }
}
