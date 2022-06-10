import axios from "axios";

const url = 'http://localhost:5000/shops';

export const fetchShops = () => axios.get(url);
export const createShop = (newShop) => axios.post(url, newShop);
export const updateShop = (id, updatedShop) => axios.patch(`${url}/${id}`, updatedShop);
export const deleteShop = (id) => axios.delete(`${url}/${id}`);
