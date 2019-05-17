import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

const fetchData = param => {
  try {
    return axios.get(`${baseUrl}${param}`).then(response => response.data);
  } catch (e) {
    console.log(e);
  }
};

const deleteData = param => {
  try {
    return axios.delete(`${baseUrl}${param}`).then(response => response.data);
  } catch (e) {
    console.log(e);
  }
};

const createData = (param, body) => {
  try {
    return axios.post(`${baseUrl}${param}`, body);
  } catch (e) {
    console.log(e);
  }
};

const updateData = (param, body) => {
  try {
    return axios.put(`${baseUrl}${param}`, body);
  } catch (e) {
    console.log(e);
  }
};

export { createData, fetchData, deleteData, updateData };
