import { GET_NOTIFICATIONS } from '../actions';


export default function(state = { notifications: [] }, action) {
    switch(action.type) {
        case    GET_NOTIFICATIONS:
            return {...state, notifications: action.payload.data.items};
        default:
            return state;
    }   
}