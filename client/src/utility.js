import axios from "axios";
import { getcookie } from "./components/helper";
const token = getcookie("token");
// const BASE_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:9001' : '';

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const axiosInstanceAuth = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { Authorization: `Bearer ${token}` },
});
