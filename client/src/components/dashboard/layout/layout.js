import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Button from "./add_button";
import Room from "../room/room";

const Layout = ({ children, match, history, header }) => {
  return (
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
  );
};

export default withRouter(Layout);
