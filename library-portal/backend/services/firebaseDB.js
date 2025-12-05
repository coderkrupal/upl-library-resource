import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.FIREBASE_DB_URL;

export const db = {
  async get(path) {
    const res = await axios.get(`${DB_URL}/${path}.json`);
    return res.data;
  },

  async set(path, data) {
    const res = await axios.put(`${DB_URL}/${path}.json`, data);
    return res.data;
  },

  async push(path, data) {
    const res = await axios.post(`${DB_URL}/${path}.json`, data);
    return res.data;
  },

  async update(path, data) {
    const res = await axios.patch(`${DB_URL}/${path}.json`, data);
    return res.data;
  },

  async remove(path) {
    const res = await axios.delete(`${DB_URL}/${path}.json`);
    return res.data;
  },
};
