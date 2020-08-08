import React, { Component } from "react";
import { Connector } from "mqtt-react";
import Layout from "../container/layout/layout";

import _MessageContainer from "./MessageContainer.js";
import { subscribe } from "mqtt-react";

const MessageContainer = subscribe({ topic: "@near/demo" })(_MessageContainer);

class App extends Component {
  state = {
    mqttProps: {
      host: "test.mosquitto.org",
      port: 8081,
      protocol: "mqtts",
    },
  };
  render() {
    return (
      <Layout>
        <Connector mqttProps={this.state.mqttProps}>
          <div className="App">
            <div className="App-header">
              <h2>Welcome to our MQTT-Demo</h2>
            </div>
            <MessageContainer />
          </div>
        </Connector>
      </Layout>
    );
  }
}

export default App;
