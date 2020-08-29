import React, { useEffect } from "react";
import CreateFormRoom from "./createForm_room";
import Layout from "../layout/layout";
import Button from "../layout/add_button";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

const Edit_room = (props) => {
  let INITIAL_VALUES = {
    name: "",
  };
  useEffect(() => {
    props.onGetHouse();
    // eslint-disable-next-line
  }, []);
  const Id = props.match.params.id;
  const roomIndex = props.room
    .map((item) => {
      return item._id;
    })
    .indexOf(Id);
  if (roomIndex > -1) {
    INITIAL_VALUES.name = props.room[roomIndex].name;
  }
  const updateRoom = (RoomData, actions) => {
    actions.setSubmitting(true);
    props.onUpdateRoom(RoomData, Id);
    actions.setSubmitting(false);
    window.location.reload();
  };

  return (
    <Layout header="Edit room">
      <Button roomId={Id} history={props.history} />

      <CreateFormRoom
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={updateRoom}
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
    onUpdateRoom: (RoomData, id) => dispatch(actions.updateRoom(RoomData, id)),
    onGetHouse: () => dispatch(actions.getHouse()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth()(Edit_room));
