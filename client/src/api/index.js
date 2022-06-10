import axios from "axios";

const url = 'http://localhost:5000/shops';

export const fetchShops = () => axios.get(url);
export const createShop = (newShop) => axios.post(url, newShop);