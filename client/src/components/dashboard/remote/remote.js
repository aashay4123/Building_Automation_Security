import React, { useEffect } from "react";
import Layout from "../layout/layout";
import Dashcard from "./dashcard";
import withAuth from "../../hoc/withAuth";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import Button from "../layout/add_button";
import Loading from "../../utils/loading";

const Remote = (props) => {
  useEffect(() => {
    props.onGetHouse();
    // eslint-disable-next-line
  }, []);
  const { history, room } = props;

  const roomId = props.match.params.roomId;
  const roomIndex = props.room.map((room) => room._id).indexOf(roomId);

  const deleteWarning = (e, remote_id) => {
    e.stopPropagation();
    let isConf = window.confirm("Are you sure you want to delete ??");
    if (isConf) {
      props.onDeleteRemote(roomId, remote_id);
      window.location.reload();
      history.push(`/dashboard/remote/${roomId}`);
    }
  };

  const navigateEdit = (e, remote_id) => {
    e.stopPropagation();
    props.history.push(`/dashboard/editremote/${roomId}/${remote_id}`);
  };
  let RemoteDetails = <Loading />;
  if (room[roomIndex]) {
    RemoteDetails = Object.values(room[roomIndex].Remote).map(
      (remote, index) => {
        return (
          <Dashcard
            history={history}
            remote={remote}
            key={index}
            deleteWarning={deleteWarning}
            navigateEdit={navigateEdit}
          />
        );
      }
    );
  }
  return (
    <Layout header="Remote">
      <Button roomId={roomId} history={history} />
      <section className="dashfeatures">{RemoteDetails}</section>
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
    onDeleteRemote: (room_id, remoteId) =>
      dispatch(actions.deleteRemote(room_id, remoteId)),
    onGetHouse: () => dispatch(actions.getHouse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth()(Remote));
