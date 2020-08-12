import axios from "axios";
import { getcookie } from "./components/helper";
const token = getcookie("token");
const BASE_URL = window.host;
console.log(BASE_URL);
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const axiosInstance = axios.create({
  baseURL: `/api`,
});

export const axiosInstanceAuth = axios.create({
  baseURL: `/api`,
  headers: { Authorization: `Bearer ${token}` },
});
