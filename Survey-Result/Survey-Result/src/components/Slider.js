import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const marks = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];

class SliderAns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  valuetext(value) {
    return `${value}`;
  }
  valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  updateValue = (e, newValue) => {
    this.props.updateValue(newValue, this.props.name);
    this.setState({ value: newValue });
  };
  render() {
    return (
      <div className="slider">
        <Typography id="discrete-slider-restrict" gutterBottom></Typography>
        <Slider
          value={this.state.value}
          onChange={this.updateValue}
          valueLabelFormat={this.valueLabelFormat}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          min={1}
          max={5}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    );
  }
}
export default SliderAns;
