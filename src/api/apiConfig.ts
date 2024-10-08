import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.CbsjsWXZnqtEIINFuHTM8RFo8nv89GPbndVi9JJ6zeKyL256CkKP1_rlOR_6',
  },
});
