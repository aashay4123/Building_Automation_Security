import React, { useEffect } from "react";
import Layout from "../layout/mqtt_layout";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import Button from "../layout/add_button";
import Loading from "../../utils/loading";
import _Dashcard from "./dashcard";
import { subscribe } from "mqtt-react";

const Dashcard = subscribe({ topic: "@near/demo" })(_Dashcard);

const Equipment = (props) => {
  useEffect(() => {
    props.onGetHouse();
    // eslint-disable-next-line
  }, []);
  const { history, rooms, match } = props;

  const roomId = match.params.roomId;
  const roomIndex = rooms
    .map((room) => {
      return room._id;
    })
    .indexOf(roomId);

  const deleteWarning = (e, equipment_id) => {
    e.stopPropagation();
    let isConf = window.confirm("Are you sure you want to delete ??");
    if (isConf) {
      props.onDeleteEquipment(roomId, equipment_id);
      history.push(`/dashboard/equipment/${roomId}`);
      window.location.reload();
    }
  };

  const navigateEdit = (e, equipment_id) => {
    e.stopPropagation();
    history.push(`/dashboard/editequipment/${roomId}/${equipment_id}`);
  };
  let equipmentDetails = <Loading />;
  if (rooms[roomIndex]) {
    equipmentDetails = Object.values(rooms[roomIndex].Equipments).map(
      (equipment, index) => {
        return (
          <Dashcard
            history={props.history}
            equipment={equipment}
            key={index}
            deleteWarning={deleteWarning}
            navigateEdit={navigateEdit}
            roomId={roomId}
            onSetButtonState={props.onSetButtonState}
            onSetIntensityState={props.onSetIntensityState}
          />
        );
      }
    );
  }
  return (
    <Layout header="Equipment">
      {/* <h4 className="dashcard__head">Equipment</h4> */}
      <Button roomId={roomId} history={props.history} />
      <section className="dashfeatures">{equipmentDetails}</section>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    rooms: state.dash.room,
    error: state.dash.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteEquipment: (RoomId, equipment_id) =>
      dispatch(actions.deleteEquipment(RoomId, equipment_id)),
    onGetHouse: () => dispatch(actions.getHouse()),
    onSetButtonState: (buttonState, equipId, roomId) =>
      dispatch(actions.setButtonState(buttonState, equipId, roomId)),
    onSetIntensityState: (intensityState, equipId, roomId) =>
      dispatch(actions.setIntensityState(intensityState, equipId, roomId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth("subscriber")(Equipment));
