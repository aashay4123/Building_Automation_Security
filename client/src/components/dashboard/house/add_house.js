import React from "react";
import Layout from "../layout/layout";
import HouseCreateForm from "./createForm_house";
import * as actions from "../../../redux/actions";
import withAuth from "../../hoc/withAuth";
import { connect } from "react-redux";

const INITIAL_VALUES = {
  name: "",
  flat_no: "",
  floor: "",
  address: "",
};

const Addhouse = (props) => {
  const saveHouse = (houseData, actions) => {
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
const mapStateToProps = (state) => {
  return {
    name: state.dash.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateHouse: (houseData) => dispatch(actions.createHouse(houseData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth("subscriber")(Addhouse));

// import * as actions from "../../../redux/actions";
// import { connect } from "react-redux";
