import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.VWqK1qoEkoIiKRkYMfPJVrky0qwdIxuMjMDvK6sE_kRF5qxvrJNJbgRl-QH7',
  },
});
