import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0,
    };
  }
  componentDidMount() {
    const { equipment } = this.props;
    console.log(equipment);
    this.setState({
      rangeVal: equipment.intensity,
    });
  }
  updateRange(e) {
    const {
      mqtt,
      equipmentId,
      roomId,
      onSetIntensityState,
      equipment,
    } = this.props;
    const value = e.target.value;
    this.setState({
      rangeVal: value,
    });

    const intensityData = {
      name: equipment.name,
      topic: equipment.topic,
      power: equipment.power,
      intensity: parseInt(value),
    };
    console.log(intensityData);
    onSetIntensityState(intensityData, equipmentId, roomId);
    mqtt.publish("@near/demo", value.toString());
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
