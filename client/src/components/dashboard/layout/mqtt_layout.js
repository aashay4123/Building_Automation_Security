import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../../container/layout/header";
import Footer from "../../../container/layout/footer";
import { Connector } from "mqtt-react-hooks";
import Button from "./add_button";
import Room from "../room/room";

const Layout = (props) => {
  const { children, match, history, header } = props;
  return (
    /**
     * TODO:
     * add mqtt authentication
     */
    <Connector
      brokerUrl={{
        host: "test.mosquitto.org",
        port: 8080,
        // username: 'username',
        // password: 'password'
      }}
    >
      <Fragment>
        <Header match={match} history={history} />
        <div className="dashcontainer">
          <Room history={history} />
          <Button history={history} />
          <h4 className="dashcard__head">{header}</h4>
          <Fragment>{children}</Fragment>
        </div>
        <Footer />
      </Fragment>
    </Connector>
  );
};

export default withRouter(Layout);
