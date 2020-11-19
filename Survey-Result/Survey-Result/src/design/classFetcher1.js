import React from "react";
export default class FetchClass extends React.Component {
  render() {
    // if (this.state.loading) {
    //   return <div>loading... website may be down</div>;
    // }
    if (this.props.class === "aerospace") {
      return (
        <div>
          Aerospace Class <br></br>
          <a href="https://www.clcinc.org/training-composite.html">
            Click here
          </a>
        </div>
      );
    }
    if (this.props.class === "welding") {
      return (
        <div>
          Welding Class <br></br>
          <a href="https://www.clcinc.org/training-welding.html">Click here</a>
        </div>
      );
    }
    if (this.props.class === "machine training") {
      return (
        <div>
          Machine Training Class <br></br>
          <a href="https://www.clcinc.org/training-machining.html">
            Click here
          </a>
        </div>
      );
    }
    if (this.props.class === "forklift") {
      return (
        <div>
          Forklift Class <br></br>
          <a href="https://www.clcinc.org/training-forklift.html">Click here</a>
        </div>
      );
    }
    if (this.props.class === "logistics") {
      return (
        <div>
          Logistics Class <br></br>
          <a href="https://www.clcinc.org/training-clt.html">Click here</a>
        </div>
      );
    }
    if (this.props.class === "it") {
      return (
        <div>
          CompTia+ Class <br></br>
          <a href="https://www.clcinc.org/training-comptiaAplus.html">
            Click here
          </a>
        </div>
      );
    }
    if (this.props.class === "bookkeeping") {
      return (
        <div>
          Bookkeeping Class <br></br>
          <a href="https://www.clcinc.org/training-bookkeeping.html">
            Click here
          </a>
        </div>
      );
    }

    return <div>Nothing loaded: apologies</div>;
  }
}
