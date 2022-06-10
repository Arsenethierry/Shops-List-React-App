import { FETCH_ALL, CREATE} from '../constants/ActionTypes';

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
