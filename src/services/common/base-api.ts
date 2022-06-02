/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import { EnhancedStore } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_BASE_URL } from 'constants/api.constants';
import { setLoggedOut } from 'store/reducers/userSlice';

let store: unknown;

export const injectStore = (_store: unknown): void => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const userState = (store as EnhancedStore).getState().user;
      if (userState?.isLoggedIn && userState.token) {
        config.headers.authorization = `Bearer ${userState.token}`;
      }
    }
    return config;
  },
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      (store as any).dispatch(setLoggedOut());
    }
  },
);

axiosInstance.interceptors.response.use(undefined, (error) => {
  const { status } = error.response;
  if (status === 401) {
    (store as any).dispatch(setLoggedOut());
  }
  return Promise.resolve(error.response);
});

export const BaseApi = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};
