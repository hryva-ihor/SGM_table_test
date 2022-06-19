import axios from "axios";
const RANDOM_USER_APL = "https://61e7eaede32cd90017acbe93.mockapi.io/";
const RANDOM_USER_API = `username_comments`;
const Axios = axios.create({
  baseURL: RANDOM_USER_APL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRandomUserData = () => {
  return Axios.get(RANDOM_USER_API);
};
