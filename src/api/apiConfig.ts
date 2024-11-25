import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.38cr85x7LTrl2ipDUQ3Z9r2eVNO9USz6WWth4VGBcwm__TCbk1cHu3G7lnJc',
  },
});
