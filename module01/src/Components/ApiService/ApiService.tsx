import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://rickandmortyapi.com/api',
});

export const characterAPI = {
  getDefaultCharacter() {
    return instance.get(`/character/1,2,3,4,5`).then((response) => {
      return response.data;
    });
  },
  getMoreFiveCharacter() {
    return instance.get(`/character/6,7,8,9,10`).then((response) => {
      return response.data;
    });
  },
};
