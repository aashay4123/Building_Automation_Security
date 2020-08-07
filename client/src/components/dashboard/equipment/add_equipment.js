import React from "react";
import EquipCreateForm from "./createForm_equipment";
import Layout from "../layout/layout";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

const AddEquipment = (props) => {
  const INITIAL_VALUES = {
    // power: "",
    name: "",
    // intensity: "",
    topic: "",
  };
  const { roomId } = props.match.params;
  const saveEquipment = (equipmentData, actions) => {
    actions.setSubmitting(false);
    props.onCreateEquipment(roomId, equipmentData);
    actions.setSubmitting(true);
    props.history.push(`/dashboard/equipment/${roomId}`);
    window.location.reload();
  };

  return (
    <Layout header="add equipment">
      <EquipCreateForm
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={saveEquipment}
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
    onCreateEquipment: (room_id, equipmentData) =>
      dispatch(actions.createEquipment(room_id, equipmentData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth("subscriber")(AddEquipment));
