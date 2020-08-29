import React from "react";
import Layout from "../../container/layout/layout";
import { isAuth } from "../helper";

export default (role) => (Component) =>
  class withAuth extends React.Component {
    // static async getInitialProps(args) {
    //   const pageProps =
    //     (await Component.getInitialProps) &&
    //     (await Component.getInitialProps(args));
    //   return { ...pageProps };
    // }
    signinPage() {
      this.props.history.push("/signin");
    }
    renderProtectedPage() {
      const userRole = isAuth() && isAuth().role;
      let isAuthorized;
      userRole === "admin" ? (isAuthorized = true) : (isAuthorized = false);

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      }

      if (!userRole) {
        return (
          <Layout>
            <h1>
              {" "}
              You are not authenticated. Please Login to access this page.{" "}
            </h1>
            <button onClick={(e) => this.signinPage(e)}>Log in</button>
          </Layout>
        );
      } else if (!isAuthorized) {
        return (
          <Layout>
            <h1>
              {" "}
              You are not authorized. You dont have a permission to visit this
              page{" "}
            </h1>
          </Layout>
        );
      } else {
        return <Component {...this.props} />;
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
