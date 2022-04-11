import axios from 'axios';
import { CharacterResponseType } from '../../Types/Types';

const instance = axios.create({
  withCredentials: false,
  headers: {
    /* 'X-Custom-Header': 'Rick and Morty API', */
    /* 'API-KEY': 'abb817gh4435yjj1d-3b335t1d-4622268-9243gj33be-946026yi7766k65586kui54855208a', */
  },
  baseURL: 'https://rickandmortyapi.com/api',
});

export const characterAPI = {
  getDefaultCharacter() {
    return instance.get(`/character/1,2,3,4,5`).then((response) => {
      return response.data;
    });
  },
  getCharacter() {
    return instance.get(`/character/6,7,8,9,10`).then((response) => {
      return response.data;
    });
  },

  /* deleteUsers(id) {
    return instance.delete(`/follow/${id}`, {}).then((response) => {
       users?page=${currentPage}&count=${pageSize} 
      return response.data;
    });
  },

  postUsers(id) {
    return instance.post(`/follow/${id}`, {}, {}).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo/`, formData);
  },

  saveProfile(profile) {
    const formData = new FormData();
    formData.append('profile', profile);
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }, */
};
