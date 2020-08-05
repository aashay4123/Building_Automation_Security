import React, { useEffect } from "react";
import CreateFormEquip from "./createForm_equipment";
import Layout from "../layout/layout";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

const Edit_equip = (props) => {
  const INITIAL_VALUES = {
    name: "",
    topic: "",
  };

  useEffect(() => {
    props.onGetHouse();
    // eslint-disable-next-line
  }, []);
  const { roomId, equipmentId } = props.match.params;

  const roomIndex = props.room
    .map((item) => {
      return item._id;
    })
    .indexOf(roomId);

  if (roomIndex > -1) {
    const equipIndex = props.room[roomIndex].Equipments.map((item) => {
      return item._id;
    }).indexOf(equipmentId);

    if (equipIndex > -1) {
      INITIAL_VALUES.name = props.room[roomIndex].Equipments[equipIndex].name;
      INITIAL_VALUES.topic = props.room[roomIndex].Equipments[equipIndex].topic;
    }
  }

  const updateEquipment = (equipmentData, actions) => {
    actions.setSubmitting(false);
    props.onUpdateEquipment(roomId, equipmentId, equipmentData);
    actions.setSubmitting(true);
    props.history.push(`/dashboard/equipment/${roomId}`);
    window.location.reload();
  };

  return (
    <Layout header="Edit Equipment">
      <CreateFormEquip
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={updateEquipment}
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

    onUpdateEquipment: (roomId, equipmentId, equipmentData) =>
      dispatch(actions.updateEquipment(roomId, equipmentId, equipmentData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth("subscriber")(Edit_equip));
