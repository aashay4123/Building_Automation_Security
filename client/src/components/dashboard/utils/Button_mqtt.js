import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    const { equipment } = this.props;

    this.state = {
      buttonState: equipment.power,
    };
  }

  updateButtonState() {
    const { buttonState } = this.state;
    const {
      mqtt,
      equipmentId,
      roomId,
      onSetButtonState,
      equipment,
    } = this.props;

    this.setState({
      buttonState: !buttonState,
    });
    const buttonData = {
      name: equipment.name,
      topic: equipment.topic,
      intensity: equipment.intensity,
      power: buttonState,
    };
    onSetButtonState(buttonData, equipmentId, roomId);
    mqtt.publish("@near/demo", buttonState.toString());

    console.log("mqtt button", buttonState.toString());
  }

  render() {
    const { equipment } = this.props;
    let buttonText, buttonClass;
    if (!equipment.power) {
      buttonText = "ON";
      buttonClass = "green";
    } else {
      buttonText = "OFF";
      buttonClass = "red";
    }
    // buttonText = "OFF";
    // buttonClass = "grey";

    return (
      <button
        className={`dashcard__btnh nav__btn nav__btn--${buttonClass}`}
        onClick={() => this.updateButtonState()}
      >
        {buttonText}
      </button>
    );
  }
}

export default Button;
