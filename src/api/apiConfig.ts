import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.rrU9XY7phFsAxGgwPG4h0NVLy3GZ7ZFZtZZLGlIqhkC_sKCgcP-Lj1lMWFMX',
  },
});