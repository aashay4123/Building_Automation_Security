import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, match, history }) => {
  return (
    <Fragment>
      <Header match={match} history={history} />
      <div className="authcontainer">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Layout);
