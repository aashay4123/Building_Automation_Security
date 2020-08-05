import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children, match, history }) => {
  return (
    <Fragment>
      <Header match={match} history={history} />
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Layout);
