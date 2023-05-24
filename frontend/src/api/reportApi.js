import axios from 'axios';
import {ip} from './ip'

export const feedBack = async(token,formValue) => {
  
    try {
      const res = await axios({
        method: "post",
        url: `https://${ip}/api/feedback`,
        data: {content:formValue},
        headers: { 
            Accept: 'application/json',
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`},
        
      });
      return res.data;
  
    } catch(error) {
        return error.response.data;
    }
  }