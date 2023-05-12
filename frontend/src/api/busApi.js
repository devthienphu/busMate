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

export const addFavBus = async(token,busId) => {
  try {
    const res = await axios({
      method: "get",
      url: `http://${ip}:5000/api/user/favorite/${busId}`,
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

