import React, { useEffect } from "react";
import CreateFormRoom from "./createForm_house";
import Layout from "../layout/layout";
import withAuth from "../..//hoc/withAuth";
import * as actions from "../../../redux/actions";
import Button from "../layout/add_button";
import { connect } from "react-redux";

const Edit_house = (props) => {
  // const { history } = props;
  useEffect(() => {
    if (!(props.rooms && props.rooms.length > 0)) {
      props.onGetHouse();
    }
    // eslint-disable-next-line
  }, []);
  let INITIAL_VALUES = {
    name: props.houseName,
    flat: props.flat,
    floor: props.floor,
    address: props.address,
  };

  const updateHouse = (houseData, actions) => {
    actions.setSubmitting(false);
    props.onCreateHouse(houseData);
    actions.setSubmitting(true);
    window.location.reload();
  };

  // const createHouse = (e) => {
  //   e.preventDefault();
  //   history.push("/addhouse");
  // };
  // const deleteWarning = (e) => {
  //   e.stopPropagation();
  //   let isConf = window.confirm("Are you sure you want to delete ??");
  //   if (isConf) {
  //     props.onDeletehouse();
  //   }
  // };
  return (
    <Layout header="Edit house">
      <Button houseId={props.houseId} history={props.history} />
      <CreateFormRoom
        initialValues={INITIAL_VALUES}
        error={props.error}
        onSubmit={updateHouse}
        buttonText="Edit"
      />
      {/* <button className="nav__btn nav__btn--green" onClick={createHouse}>
        create House
      </button>
      <button className="nav__btn nav__btn--red" onClick={deleteWarning}>
        delete House  
      </button> */}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    houseName: state.dash.houseName,
    flat: state.dash.flat,
    floor: state.dash.floor,
    address: state.dash.address,
    houseId: state.dash.houseId,
    error: state.dash.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletehouse: () => dispatch(actions.deleteHouse()),
    onCreateHouse: (houseData) => dispatch(actions.createHouse(houseData)),
    onGetHouse: () => dispatch(actions.getHouse()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth()(Edit_house));
