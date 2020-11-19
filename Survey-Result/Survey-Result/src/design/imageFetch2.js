import React from "react";
export default class FetchImg2 extends React.Component {
  render() {
    // if (this.state.loading) {
    //   return <div>loading... website may be down</div>;
    // }
    if (this.props.class === "aerospace") {
      return (
        <div>
          <img src={require("./component/class-image/aero.jpg")} alt=" " />
        </div>
      );
    }
    if (this.props.class === "welding") {
      return (
        <div>
          <img src={require("./component/class-image/welding.jpg")} alt="" />
        </div>
      );
    }
    if (this.props.class === "machine training") {
      return (
        <div>
          <img src={require("./component/class-image/machining.jpg")} alt="" />
        </div>
      );
    }
    if (this.props.class === "forklift") {
      return (
        <div>
          <img src={require("./component/class-image/forklift.jpg")} alt="" />
        </div>
      );
    }
    if (this.props.class === "logistics") {
      return (
        <div>
          <img src={require("./component/class-image/logistics.jpg")} alt="" />
        </div>
      );
    }
    if (this.props.class === "it") {
      return (
        <div>
          <img src={require("./component/class-image/comp.jpg")} alt="" />
        </div>
      );
    }
    if (this.props.class === "bookkeeping") {
      return (
        <div>
          <img src={require("./component/class-image/booking.jpg")} alt="" />
        </div>
      );
    }

    return <div>Nothing loaded: apologies</div>;
  }
}
