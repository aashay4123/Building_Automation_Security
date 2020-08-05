import * as actionTypes from "../actionTypes";
import { axiosInstanceAuth as axios } from "../../../utility";

export const setButtonState = (buttonState, equipId, roomId) => {
  return (dispatch) => {
    axios
      .patch(`/room/equipment/${roomId}/${equipId}`, buttonState)
      .then((response) => {
        dispatch(setButtonSuccess(response));
      })
      .catch((error) => {
        dispatch(setButtonFailed(error.response.data.error));
      });
  };
};
export const setButtonFailed = (err) => {
  return {
    type: actionTypes.UPDATE_BUTTON_FAILED,
    error: err,
  };
};
export const setButtonSuccess = (res) => {
  return {
    type: actionTypes.UPDATE_BUTTON_SUCCESS,
  };
};
export const setIntensityState = (intensity, equipId, roomId) => {
  return (dispatch) => {
    axios
      .patch(`/room/equipment/${roomId}/${equipId}`, intensity)
      .then((response) => {
        dispatch(setButtonSuccess(response));
      })
      .catch((error) => {
        dispatch(setButtonFailed(error.response.data.error));
      });
  };
};

export const setIntensityFailed = (err) => {
  return {
    type: actionTypes.UPDATE_INTENSITY_FAILED,
    error: err,
  };
};
export const setIntensitySuccess = (res) => {
  return {
    type: actionTypes.UPDATE_INTENSITY_SUCCESS,
  };
};

// create Equipment Actions
export const createEquipmentFailed = (err) => {
  return {
    type: actionTypes.CREATE_EQUIPMENT_FAILED,
    error: err,
  };
};
export const createEquipmentSuccess = () => {
  return {
    type: actionTypes.CREATE_EQUIPMENT_SUCCESS,
  };
};
export const createEquipment = (room_id, EquipmentData) => {
  return (dispatch) => {
    axios
      .post(`/room/equipment/${room_id}`, EquipmentData)
      .then((response) => {
        dispatch(createEquipmentSuccess());
      })
      .catch((error) => {
        dispatch(createEquipmentFailed(error.response.data.error));
      });
  };
};

// update Equipment Actions
export const updateEquipmentFailed = (err) => {
  return {
    type: actionTypes.UPDATE_EQUIPMENT_FAILED,
    error: err,
  };
};
export const updateEquipmentSuccess = () => {
  return {
    type: actionTypes.UPDATE_EQUIPMENT_SUCCESS,
  };
};
export const updateEquipment = (room_id, EquipId, EquipmentData) => {
  return (dispatch) => {
    axios
      .patch(`/room/equipment/${room_id}/${EquipId}`, EquipmentData)
      .then((response) => {
        dispatch(updateEquipmentSuccess());
      })
      .catch((error) => {
        dispatch(updateEquipmentFailed(error.response.data.error));
      });
  };
};

// delete Equipment Actions
export const deleteEquipmentFailed = (err) => {
  return {
    type: actionTypes.DELETE_EQUIPMENT_FAILED,
    error: err,
  };
};
export const deleteEquipmentSuccess = () => {
  return {
    type: actionTypes.DELETE_EQUIPMENT_SUCCESS,
  };
};
export const deleteEquipment = (room_id, EquipId) => {
  return (dispatch) => {
    axios
      .delete(`/room/equipment/${room_id}/${EquipId}`)
      .then((response) => {
        dispatch(deleteEquipmentSuccess());
      })
      .catch((error) => {
        dispatch(deleteEquipmentFailed(error.response.data.error));
      });
  };
};

// create Remote Actions
export const createRemoteFailed = (err) => {
  return {
    type: actionTypes.CREATE_REMOTE_FAILED,
    error: err,
  };
};
export const createRemoteSuccess = () => {
  return {
    type: actionTypes.CREATE_REMOTE_SUCCESS,
  };
};
export const createRemote = (room_id, RemoteData) => {
  return (dispatch) => {
    axios
      .post(`/room/remote/${room_id}`, RemoteData)
      .then((response) => {
        dispatch(createRemoteSuccess());
      })
      .catch((error) => {
        dispatch(createRemoteFailed(error.response.data.error));
      });
  };
};

// update Remote Actions
export const updateRemoteFailed = (err) => {
  return {
    type: actionTypes.UPDATE_REMOTE_FAILED,
    error: err,
  };
};
export const updateRemoteSuccess = () => {
  return {
    type: actionTypes.UPDATE_REMOTE_SUCCESS,
  };
};
export const updateRemote = (room_id, remoteId, RemoteData) => {
  return (dispatch) => {
    axios
      .patch(`/room/remote/${room_id}/${remoteId}`, RemoteData)
      .then((response) => {
        dispatch(updateRemoteSuccess());
      })
      .catch((error) => {
        dispatch(updateRemoteFailed(error.response.data.error));
      });
  };
};

// delete Remote Actions
export const deleteRemoteFailed = (err) => {
  return {
    type: actionTypes.DELETE_REMOTE_FAILED,
    error: err,
  };
};
export const deleteRemoteSuccess = () => {
  return {
    type: actionTypes.DELETE_REMOTE_SUCCESS,
  };
};
export const deleteRemote = (room_id, remoteId) => {
  return (dispatch) => {
    axios
      .delete(`/room/remote/${room_id}/${remoteId}`)
      .then((response) => {
        dispatch(deleteRemoteSuccess());
      })
      .catch((error) => {
        dispatch(deleteRemoteFailed(error.response.data.error));
      });
  };
};
