import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_MEDBOX_API}/api`;

export const getAllMedbox = () => {
  return axios.get(`${BASE_URL}/medbox`);
};

export const getMedbox = (id) => {
  return axios.get(`${BASE_URL}/medbox/${id}`);
};

export const deleteMedbox = (id) => {
  return axios.delete(`${BASE_URL}/medbox/${id}`);
};

export const createMedbox = (medbox) => {
  return axios.post(`${BASE_URL}/medbox`, medbox, {
    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
  });
};

export const uploadImage = (uploadData) => {
  return axios.post(`${BASE_URL}/upload`, uploadData);
};

export const login = (user) => {
  return axios.post(`${BASE_URL}/login`, user);
};

export const signup = (user) => {
  return axios.post(`${BASE_URL}/signup`, user);
};

export const verify = (token) => {
  return axios.get(`${BASE_URL}/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
