import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.ATxaMnwwzqNxLWB5IdXIn-EZy8kMcFm6XZSAyIs--PEzB7vFpokGhacmVwdg',
  },
});
