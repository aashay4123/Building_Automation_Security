import axios from "axios";
import { getcookie } from "./components/helper";
const token = getcookie("token");
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const axiosInstance = axios.create({});

export const axiosInstanceAuth = axios.create({
  headers: { Authorization: `Bearer ${token}` },
});
