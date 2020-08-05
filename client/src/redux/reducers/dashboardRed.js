import * as aT from "../actions/actionTypes";
import * as dashA from "./dashboard";
const initialState = {
  houseId: "",
  houseName: "",
  flat: "",
  floor: "",
  address: "",
  room: [],
  user_id: {},
  error: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    //get House All Reducer
    case aT.GET_HOUSE_ALL_SUCCESS:
      return dashA.getHouseAllSuccess(state, action);
    case aT.GET_HOUSE_ALL_FAILED:
      return dashA.getHouseAllFailed(state, action);
    case aT.UPDATE_STATE_BUILDING:
      return dashA.updateBuildingState(state, action);
    //getHouse Reducer
    case aT.GET_HOUSE_SUCCESS:
      return dashA.getHouseSuccess(state, action);
    case aT.GET_HOUSE_FAILED:
      return dashA.getHouseFailed(state, action);
    case aT.UPDATE_STATE_HOUSE:
      return dashA.updateHouseState(state, action);
    //create and delete House Reducer
    case aT.CREATE_HOUSE_SUCCESS:
      return dashA.createHouseSuccess(state, action);
    case aT.CREATE_HOUSE_FAILED:
      return dashA.createHouseFailed(state, action);
    case aT.DELETE_HOUSE_SUCCESS:
      return dashA.deleteHouseSuccess(state, action);
    case aT.DELETE_HOUSE_FAILED:
      return dashA.deleteHouseFailed(state, action);
    //create and delete Room Reducer
    case aT.CREATE_ROOM_SUCCESS:
      return dashA.createRoomSuccess(state, action);
    case aT.CREATE_ROOM_FAILED:
      return dashA.createRoomFailed(state, action);
    case aT.UPDATE_ROOM_FAILED:
      return dashA.updateRoomFailed(state, action);
    case aT.UPDATE_ROOM_SUCCESS:
      return dashA.updateRoomSuccess(state, action);
    case aT.DELETE_ROOM_SUCCESS:
      return dashA.deleteRoomSuccess(state, action);
    case aT.DELETE_ROOM_FAILED:
      return dashA.deleteRoomFailed(state, action);
    //create and delete Equipment Reducer
    case aT.CREATE_EQUIPMENT_SUCCESS:
      return dashA.createEquipmentSuccess(state, action);
    case aT.CREATE_EQUIPMENT_FAILED:
      return dashA.createEquipmentFailed(state, action);
    case aT.UPDATE_EQUIPMENT_SUCCESS:
      return dashA.updateEquipmentSuccess(state, action);
    case aT.UPDATE_EQUIPMENT_FAILED:
      return dashA.updateEquipmentFailed(state, action);
    case aT.DELETE_EQUIPMENT_SUCCESS:
      return dashA.deleteEquipmentSuccess(state, action);
    case aT.DELETE_EQUIPMENT_FAILED:
      return dashA.deleteEquipmentFailed(state, action);
    //create and delete Remote Reducer
    case aT.CREATE_REMOTE_SUCCESS:
      return dashA.createRemoteSuccess(state, action);
    case aT.CREATE_REMOTE_FAILED:
      return dashA.createRemoteFailed(state, action);
    case aT.UPDATE_REMOTE_SUCCESS:
      return dashA.updateRemoteSuccess(state, action);
    case aT.UPDATE_REMOTE_FAILED:
      return dashA.updateRemoteFailed(state, action);
    case aT.DELETE_REMOTE_SUCCESS:
      return dashA.deleteRemoteSuccess(state, action);
    case aT.DELETE_REMOTE_FAILED:
      return dashA.deleteRemoteFailed(state, action);

    case aT.UPDATE_INTENSITY_SUCCESS:
      return dashA.setButtonSuccess(state, action);
    case aT.UPDATE_INTENSITY_FAILED:
      return dashA.setButtonFailed(state, action);
    case aT.UPDATE_BUTTON_SUCCESS:
      return dashA.setIntensitySuccess(state, action);
    case aT.UPDATE_BUTTON_FAILED:
      return dashA.setIntensityFailed(state, action);
    default:
      return state;
  }
};

export default Reducer;
