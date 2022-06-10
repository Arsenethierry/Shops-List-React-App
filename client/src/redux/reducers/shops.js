import { FETCH_ALL, CREATE, DELETE, UPDATE} from '../constants/ActionTypes.js';

export default (shops = [], action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...shops, action.payload];
        case UPDATE:
            return shops.map((shop) => (shop._id === action.payload._id ? action.payload : shop));
        case DELETE:
            return shops.filter((shop) => shop._id !== action.payload);
        default:
            return shops;
    }
};