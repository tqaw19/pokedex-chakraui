import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_POKEAPI,
  headers: {
    "Content-type": "application/json",
  },
});
