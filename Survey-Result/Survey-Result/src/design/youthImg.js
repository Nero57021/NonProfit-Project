import React from "react";
export default class YouthImg extends React.Component {
  render() {
    // if (this.state.loading) {
    //   return <div>loading... website may be down</div>;
    // }
    if (this.props.program === "youthbuild") {
      return (
        <div>
          <img src={require("./component/class-image/youth.jpg")} alt=" " />
        </div>
      );
    }
    if (this.props.program === "re-entry program") {
      return (
        <div>
          <img src={require("./component/class-image/entry.jpg")} alt=" " />
        </div>
      );
    }
    if (this.props.program === "pathway to justice career") {
      return (
        <div>
          <img src={require("./component/class-image/pathway.jpg")} alt=" " />
        </div>
      );
    }

    return <div>Nothing loaded: apologies</div>;
  }
}
