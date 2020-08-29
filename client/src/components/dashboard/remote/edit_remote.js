import React, { useEffect } from "react";
import CreateFormRemote from "./createForm_remote";
import Layout from "../layout/layout";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

const Edit_remote = (props) => {
  const INITIAL_VALUES = {
    name: props.name,
    company: props.company,
    topic: props.topic,
  };

  const { roomId, remoteId } = props.match.params;

  useEffect(() => {
    props.onGetHouse();
    // eslint-disable-next-line
  }, []);

  const roomIndex = props.room
    .map((item) => {
      return item._id;
    })
    .indexOf(roomId);

  if (roomIndex > -1) {
    const remoteIndex = props.room[roomIndex].Remote.map((item) => {
      return item._id;
    }).indexOf(remoteId);

    if (remoteIndex > -1) {
      INITIAL_VALUES.name = props.room[roomIndex].Remote[remoteIndex].name;
      INITIAL_VALUES.topic = props.room[roomIndex].Remote[remoteIndex].topic;
      INITIAL_VALUES.company =
        props.room[roomIndex].Remote[remoteIndex].company;
    }
  }

  const updateRemote = (RemoteData, actions) => {
    actions.setSubmitting(true);
    props.onUpdateRemote(roomId, remoteId, RemoteData);
    actions.setSubmitting(false);
    props.history.push(`/dashboard/remote/${roomId}`);
    window.location.reload();
  };
  return (
    <Layout header="Edit Remote">
      <CreateFormRemote
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={updateRemote}
        buttonText="Edit"
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
    onGetHouse: () => dispatch(actions.getHouse()),
    onUpdateRemote: (roomId, remoteId, RemoteData) =>
      dispatch(actions.updateRemote(roomId, remoteId, RemoteData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth()(Edit_remote));
