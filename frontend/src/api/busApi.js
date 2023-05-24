import axios from 'axios';
import {ip} from './ip'

export const getListBuses = async(keySearch) => {
  try {
    const res = await axios({
      method: "get",
      url: `http://${ip}:5000/api/bus?keyword=${keySearch}`,
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const getBusDetail = async(number) => {
  try {
    const res = await axios({
      method: "get",
      url: `http://${ip}:5000/api/bus/${number}`,
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const getFavBus = async(token) => {
  if (typeof(token) !== 'string') return []

  try {
  const res = await axios({
      method: "get",
      url: `http://${ip}:5000/api/user/favorite`,
      headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
  
  } catch(error) {
      return error.response.data;
  }
}

export const changeFavBus = async(token, busID) => {
  try {
  const res = await axios({
      method: "patch",
      url: `http://${ip}:5000/api/user/favorite/${busID}`,
      headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
  
  } catch(error) {
      return error.response.data;
  }
}