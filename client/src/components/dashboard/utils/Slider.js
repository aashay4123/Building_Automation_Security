import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0,
    };
  }
  updateRange(e) {
    const { mqtt, equipmentId, roomId, onSetIntensityState } = this.props;
    const value = e.target.value;
    this.setState({
      rangeVal: value,
    });

    const intensityData = {
      intensity: parseInt(value),
    };

    onSetIntensityState(intensityData, equipmentId, roomId);
    mqtt.publish("@near/demo", value.toString());
    console.log("mqtt slider", value.toString());
  }

  render() {
    return (
      <div className="dashcard__btnh slider__div">
        <input
          className="range"
          type="range"
          value={this.state.rangeVal}
          min="1"
          max="100"
          step="1"
          onChange={(e) => this.updateRange(e)}
        />
        <span className="output">{this.state.rangeVal}</span>
      </div>
    );
  }
}

export default Slider;
