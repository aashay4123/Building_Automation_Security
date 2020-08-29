import React, { useEffect } from "react";
import CreateFormRemote from "./createForm_remote";
import Layout from "../layout/layout";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

const AddRemote = (props) => {
  const INITIAL_VALUES = {
    name: props.name,
    company: props.company,
    topic: props.topic,
  };
  useEffect(() => {
    props.onGetHouse();
    // eslint-disable-next-line
  }, []);
  const { roomId } = props.match.params;

  const saveRemote = (remoteData, actions) => {
    actions.setSubmitting(false);
    props.onCreateRemote(roomId, remoteData);
    actions.setSubmitting(true);
    props.history.push(`/dashboard/remote/${roomId}`);
    window.location.reload();
  };

  return (
    <Layout header="add remote">
      <CreateFormRemote
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={saveRemote}
        buttonText={"create"}
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
    onCreateRemote: (room_id, remoteData) =>
      dispatch(actions.createRemote(room_id, remoteData)),
    onGetHouse: () => dispatch(actions.getHouse()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth()(AddRemote));
