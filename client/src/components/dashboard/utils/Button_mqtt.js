import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: false,
      loading: false,
    };
  }

  updateButtonState() {
    const { buttonState } = this.state;
    const { mqtt, equipmentId, roomId, onSetButtonState } = this.props;

    this.setState({
      buttonState: !buttonState,
    });
    this.setState({
      loading: true,
    });
    const buttonData = {
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
    const { buttonState, loading } = this.state;

    let buttonText, buttonClass;
    if (!loading) {
      if (buttonState) {
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
