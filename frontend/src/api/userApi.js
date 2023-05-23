import axios from 'axios';
import {ip} from './ip';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = async(formValue) => {
  if(formValue.email==='' && formValue.password==='')
    return;

  try {
    const res = await axios({
      method: "post",
      url: `http://${ip}:5000/api/user/auth`,
      data: formValue,
      headers: { 
          Accept: 'application/json',
          "Content-Type": "application/x-www-form-urlencoded" },
      
    });
    await AsyncStorage.setItem('user', res.data.token);
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}

export const signUp = async(formValue) => {
  if( formValue.userName==='' && formValue.email==='' && formValue.contact==='' && formValue.password==='')
    return;

  try {
    const res = await axios({
      method: "post",
      url: `http://${ip}:5000/api/user/register`,
      data: { ...formValue, ['roleUser']:'customer' },
      headers: { 
          Accept: 'application/json',
          "Content-Type": "application/x-www-form-urlencoded" },
    });
    await AsyncStorage.setItem('user', res.data.token);
    return res.data;

    } catch(error) {
        return error.response.data;
    }
}

export const getUser = async(token) => {
    try {
      const res = await axios({
        method: "get",
        url: `http://${ip}:5000/api/user`,
        headers: { 
            Accept: 'application/json',
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}` }
        });
        return res.data;
  
    } catch(error) {
        return error.response.data;
    }
  }

export const updateUser = async(token, formValue) => {
    if( formValue.userName==='' && formValue.contact==='' && formValue.password==='')
        return;

    try {
    const res = await axios({
        method: "patch",
        url: `http://${ip}:5000/api/user`,
        data: formValue,
        headers: { 
            Accept: 'application/json',
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}` },
    });
    return res.data;
    
    } catch(error) {
        return error.response.data;
    }
}