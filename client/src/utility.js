import axios from "axios";
import { getcookie } from "./components/helper";
const token = getcookie("token");
const BASE_URL = window.host ? window.host : "http://localhost:3000";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const axiosInstanceAuth = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: { Authorization: `Bearer ${token}` },
});
