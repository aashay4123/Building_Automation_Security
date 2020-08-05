import React, { useEffect } from "react";
import Dropdown from "../room/dropdown";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import Loading from "../../utils/loading";

const Room = (props) => {
  const options = ["Equipment", "Remote"];
  useEffect(() => {
    props.onGetHouse();
    // eslint-disable-next-line
  }, []);
  const sidebarName = (e) => {
    e.preventDefault();
    props.history.push("/house");
  };

  const deleteWarning = (e, Id) => {
    e.stopPropagation();
    let isConf = window.confirm("Are you sure you want to delete ??");
    if (isConf) {
      props.onDeleteRoom(Id);
      window.location.reload();
    }
  };

  const navigateEdit = (e, Id) => {
    e.stopPropagation();
    props.history.push(`/dashboard/room/${Id}`);
  };

  let roomDetails = <Loading />;
  if (props.rooms[0]) {
    roomDetails = Object.values(props.rooms).map((room, index) => {
      return (
        <Dropdown
          history={props.history}
          room={room}
          key={index}
          options={options}
          deleteWarning={deleteWarning}
          navigateEdit={navigateEdit}
        />
      );
    });
  }
  return (
    <div className="dashsidebar">
      <button onClick={sidebarName} className="dashsidebar__name">
        <p className="center">{props.name}</p>
      </button>
      <span className="dashsidebar__partition">&nbsp;</span>
      <div className="dashsidebar__content"></div>
      {roomDetails}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: state.dash.houseName,
    rooms: state.dash.room,
    error: state.dash.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetHouse: () => dispatch(actions.getHouse()),
    onDeleteRoom: (id) => dispatch(actions.deleteRoom(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth("subscriber")(Room));
