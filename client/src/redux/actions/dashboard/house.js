import * as actionTypes from "../actionTypes";
import { axiosInstanceAuth as axios } from "../../../utility";
/**TODO:
 * remove toast Message
 */

// Get all house Actions
export const updateBuildingState = (building) => {
  return {
    type: actionTypes.UPDATE_STATE_BUILDING,
    building: building,
  };
};
export const getHouseAllFailed = (err) => {
  return {
    type: actionTypes.GET_HOUSE_ALL_FAILED,
    error: err,
  };
};
export const getHouseAllSuccess = () => {
  return {
    type: actionTypes.GET_HOUSE_ALL_SUCCESS,
  };
};
export const getHouseAll = () => {
  return (dispatch) => {
    axios
      .get("/house/all")
      .then((response) => {
        dispatch(getHouseAllSuccess(response.data.message));
        dispatch(updateBuildingState(response.data));
      })
      .catch((error) => {
        dispatch(getHouseAllFailed(error.response.data.error));
      });
  };
};

// Get house Actions
export const updateHouseState = (house) => {
  return {
    type: actionTypes.UPDATE_STATE_HOUSE,
    house: house,
  };
};
export const getHouseFailed = (err) => {
  return {
    type: actionTypes.GET_HOUSE_FAILED,
    error: err,
  };
};
export const getHouseSuccess = () => {
  return {
    type: actionTypes.GET_HOUSE_SUCCESS,
  };
};
export const getHouse = () => {
  return (dispatch) => {
    axios
      .get("/house")
      .then((response) => {
        dispatch(getHouseSuccess());
        dispatch(updateHouseState(response.data));
      })
      .catch((error) => {
        dispatch(getHouseFailed(`gethouse ${error} `));
      });
  };
};

// create House Actions
export const createHouseFailed = (err) => {
  return {
    type: actionTypes.CREATE_HOUSE_FAILED,
    error: err,
  };
};
export const createHouseSuccess = () => {
  return {
    type: actionTypes.CREATE_HOUSE_SUCCESS,
  };
};
export const createHouse = (houseData) => {
  return (dispatch) => {
    axios
      .post("/house", houseData)
      .then((response) => {
        dispatch(createHouseSuccess(response.data.message));
      })
      .catch((error) => {
        dispatch(createHouseFailed(error.response.data.error));
      });
  };
};
// delete House Actions
export const deleteHouseFailed = (err) => {
  return {
    type: actionTypes.DELETE_HOUSE_FAILED,
    error: err,
  };
};
export const deleteHouseSuccess = () => {
  return {
    type: actionTypes.DELETE_HOUSE_SUCCESS,
  };
};
export const deleteHouse = () => {
  return (dispatch) => {
    axios
      .delete(`/house`)
      .then((response) => {
        dispatch(deleteHouseSuccess());
      })
      .catch((error) => {
        dispatch(deleteHouseFailed(error.response.data.error));
      });
  };
};

// create Room Actions
export const createRoomFailed = (err) => {
  return {
    type: actionTypes.CREATE_ROOM_FAILED,
    error: err,
  };
};
export const createRoomSuccess = () => {
  return {
    type: actionTypes.CREATE_ROOM_SUCCESS,
  };
};
export const createRoom = (RoomData) => {
  return (dispatch) => {
    axios
      .post("/room", RoomData)
      .then((response) => {
        dispatch(createRoomSuccess(response.data.message));
      })
      .catch((error) => {
        dispatch(createRoomFailed(error.response.data.error));
      });
  };
};

// update Room Actions
export const updateRoomFailed = (err) => {
  return {
    type: actionTypes.UPDATE_ROOM_FAILED,
    error: err,
  };
};
export const updateRoomSuccess = () => {
  return {
    type: actionTypes.UPDATE_ROOM_SUCCESS,
  };
};
export const updateRoom = (RoomData, Id) => {
  return (dispatch) => {
    axios
      .patch(`/room/${Id}`, RoomData)
      .then((response) => {
        dispatch(updateRoomSuccess(response.data.message));
      })
      .catch((error) => {
        dispatch(updateRoomFailed(error.response.data.error));
      });
  };
};

// delete Room Actions
export const deleteRoomFailed = (err) => {
  return {
    type: actionTypes.DELETE_ROOM_FAILED,
    error: err,
  };
};
export const deleteRoomSuccess = () => {
  return {
    type: actionTypes.DELETE_ROOM_SUCCESS,
  };
};
export const deleteRoom = (id) => {
  return (dispatch) => {
    axios
      .delete(`/room/${id}`)
      .then((response) => {
        dispatch(deleteRoomSuccess());
      })
      .catch((error) => {
        dispatch(deleteRoomFailed(error.response.data.error));
      });
  };
};
