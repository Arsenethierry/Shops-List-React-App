import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/ActionTypes';

import * as api from '../../api/index.js';

export const getShops = () => async (dispatch) => {
    try {
      const { data } = await api.fetchShops();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createShop = (shop) => async (dispatch) => {
    try {
      const { data } = await api.createShop(shop);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
export const updateShop = (id, shop) => async (dispatch) => {
  try {
    const { data } = await api.updateShop(id, shop);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteShop = (id) => async (dispatch) => {
  try {
    await api.deleteShop(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
