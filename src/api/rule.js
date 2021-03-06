/* eslint-disable linebreak-style */
import axios from 'axios';
// import qs from 'qs'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;
const test = 'http://192.168.2.64:8100'

// 一般get请求
export const get = (url) => axios.get(`${test}${url}`).then((res) => {
  if (res.status) {
    return Promise.resolve(res.data);
  }
  return Promise.reject(res.data);
});

// 一般post请求
export const post = (url, val) => {
  const data = val !== undefined ? val : '';
  return axios.post(`${test}${url}`, data).then((res) => {
    if (res.status) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(res.data);
  });
};
