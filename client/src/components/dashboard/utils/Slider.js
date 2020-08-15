import React, { Component } from "react";
import { Fragment } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0,
    };
  }
  componentDidMount() {
    const { equipment } = this.props;
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
    onSetIntensityState(intensityData, equipmentId, roomId);
    mqtt.publish(equipment.topic, value.toString());
  }

  render() {
    const { equipment } = this.props;
    return (
      <Fragment>
        <div className="dashcard__price">
          <p> {equipment.power ? "active" : "inactive"}</p>
        </div>
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
      </Fragment>
    );
  }
}

export default Slider;
