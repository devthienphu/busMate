import axios from 'axios';
import {ip} from './ip'

export const getTicket = async(keyword) => {
    try {
      const res = await axios({
        method: "get",
        url: `https://${ip}/api/passengerBus?keyword=${keyword}`,
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
  }

export const getMyTicket = async(token) => {
    try {
        const res = await axios({
        method: "get",
        url: `https://${ip}/api/ticket/`,
        headers: { 
            Authorization: `Bearer ${token}` },
        });
        return res.data;
    } catch(error) {
        return error.response.data;
    }
}

export const buyTicket = async(token,id) => {
  try {
    const res = await axios({
      method: "post",
      url: `https://${ip}/api/ticket/${id}`,
      headers: { 
        Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}