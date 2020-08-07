import { updateObject } from "../../../utility";

// getHouseAll Account
export const getHouseAllFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const getHouseAllSuccess = (state, action) => {
  return updateObject(state, { error: false });
};
//pending
export const updateBuildingState = (state, action) => {
  const updateState = {
    houseId: action.house._id,
    houseName: action.house.name,
    flat: action.house.flat,
    floor: action.house.floor,
    address: action.house.address,
    room: action.house.room,
    user_id: action.house.user_id,
    error: false,
  };
  return updateObject(state, updateState);
};

// get House
export const getHouseFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const getHouseSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

// create and update House
export const createHouseFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const createHouseSuccess = (state, action) => {
  return updateObject(state, { error: false });
};
/**TODO:
 * maybe this is the cause of equipment not updated correctly
 */
export const updateHouseState = (state, action) => {
  console.log("update house state", action.house.room);
  const updateState = {
    houseId: action.house._id,
    houseName: action.house.name,
    flat: action.house.flat,
    floor: action.house.floor,
    address: action.house.address,
    room: action.house.room,
    user_id: action.house.user_id,
    error: false,
  };
  return updateObject(state, updateState);
};

// delete house
export const deleteHouseFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const deleteHouseSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

// create delete and update Room
export const createRoomFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const createRoomSuccess = (state, action) => {
  return updateObject(state, { error: false });
};
export const updateRoomFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const updateRoomSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

export const deleteRoomFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const deleteRoomSuccess = (state, action) => {
  return updateObject(state, { error: false });
};
