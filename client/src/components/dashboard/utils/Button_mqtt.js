import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: false,
      loading: false,
    };
  }
  componentDidMount() {
    const { equipment } = this.props;
    console.log(equipment);
    this.setState({
      buttonState: equipment.power,
    });
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
      loading: true,
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
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    const { equipment } = this.props;

    let buttonText, buttonClass;
    if (!loading) {
      if (!equipment.power) {
        buttonText = "ON";
        buttonClass = "green";
      } else {
        buttonText = "OFF";
        buttonClass = "red";
      }
    } else {
      buttonText = "OFF";
      buttonClass = "grey";
    }

    return (
      <button
        className={`dashcard__btnh nav__btn nav__btn--${buttonClass}`}
        onClick={() => this.updateButtonState()}
        disabled={loading}
      >
        {buttonText}
      </button>
    );
  }
}

export default Button;
