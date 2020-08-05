import { updateObject } from "../../../utility";

// create and update Equipment
export const createEquipmentFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const createEquipmentSuccess = (state, action) => {
  return updateObject(state, { error: false });
};
export const updateEquipmentFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const updateEquipmentSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

// delete Equipment
export const deleteEquipmentFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const deleteEquipmentSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

// create and update Remote
export const createRemoteFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const createRemoteSuccess = (state, action) => {
  return updateObject(state, { error: false });
};
export const updateRemoteFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const updateRemoteSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

// delete Remote
export const deleteRemoteFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const deleteRemoteSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

export const setButtonFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const setButtonSuccess = (state, action) => {
  return updateObject(state, { error: false });
};

export const setIntensityFailed = (state, action) => {
  return updateObject(state, { error: true });
};
export const setIntensitySuccess = (state, action) => {
  return updateObject(state, { error: false });
};
