import React from "react";
import Layout from "../layout/layout";
import HouseCreateForm from "./createForm_house";
import * as actions from "../../../redux/actions";
import withAuth from "../../hoc/withAuth";
import { connect } from "react-redux";

const Addhouse = (props) => {
  const INITIAL_VALUES = {
    name: "",
    flat: "",
    floor: "",
    address: "",
  };
  const saveHouse = (houseData, actions) => {
    console.log("something?");
    actions.setSubmitting(false);
    props.onCreateHouse(houseData);
    actions.setSubmitting(true);
    window.location.reload();
    props.history.push("/house");
  };

  return (
    <Layout header="add House details">
      <HouseCreateForm
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={saveHouse}
        buttonText="create"
      />
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateHouse: (houseData) => dispatch(actions.createHouse(houseData)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withAuth("subscriber")(Addhouse));
