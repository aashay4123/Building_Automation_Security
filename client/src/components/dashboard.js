import React from "react";
import Layout from "./dashboard/layout/layout";
import withAuth from "./hoc/withAuth";

const Dashboard = () => {
  return <Layout header="House detaiils"></Layout>;
};

export default withAuth("subscriber")(Dashboard);
