import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const characterAPI = {
  getDefaultCharacter() {
    return instance.get(`character/1,2,3,4,5`).then((response) => {
      return response.data;
    });
  },
  getByIdCharacter(numPage: string | undefined) {
    return instance.get(`character/${numPage}`).then((response) => {
      return response.data;
    });
  },
  getMoreFiveCharacter() {
    return instance.get(`character/6,7,8,9,10`).then((response) => {
      return response.data;
    });
  },
  getNextCharacter(numPage: string) {
    return instance.get(`character?page=${numPage}`).then((response) => {
      /* console.log(`test response`, response.data); */
      return response.data;
    });
  },
  getFilteredCharacter(status: string, gender: string) {
    return instance.get(`character/?gender=${gender}&status=${status}`).then((response) => {
      return response.data;
    });
  },
};
