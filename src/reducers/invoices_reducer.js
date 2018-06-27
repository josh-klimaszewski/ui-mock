import { GET_INVOICES } from '../actions';


export default function(state = { invoices: [] }, action) {
    switch(action.type) {
        case GET_INVOICES:
            return {...state, invoices: action.payload.data.items};
        default:
            return state;
    }   
}