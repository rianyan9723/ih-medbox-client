import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_BOX_API}/api`;

export const getAllBoxes = () => {
  return axios.get(`${BASE_URL}/medication`);
};

export const getBox = (id) => {
  return axios.get(`${BASE_URL}/medication/${id}`);
};

export const deleteBox = (id) => {
  return axios.delete(`${BASE_URL}/medication/${id}`);
};

export const createBox = (box) => {
  return axios.post(`${BASE_URL}/medication/add`, box, {
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
  console.log(token)
  return axios.get(`${BASE_URL}/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
