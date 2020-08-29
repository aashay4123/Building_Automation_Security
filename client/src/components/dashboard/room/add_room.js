import React from "react";
import Layout from "../layout/layout";
import CreateFormRoom from "./createForm_room";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

const AddRoom = (props) => {
  const INITIAL_VALUES = {
    name: "",
  };

  const saveRoom = (roomData, actions) => {
    actions.setSubmitting(false);
    props.onCreateRoom(roomData);
    actions.setSubmitting(true);
    window.location.reload();
    props.history.push("/house");
  };

  return (
    <Layout header="add room">
      <CreateFormRoom
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={saveRoom}
        buttonText="Create"
      />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    room: state.dash.room,
    error: state.dash.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateRoom: (roomData) => dispatch(actions.createRoom(roomData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth()(AddRoom));
