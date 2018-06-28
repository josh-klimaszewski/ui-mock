import { combineReducers } from 'redux';
import InvoicesReducer from './invoices_reducer';
import NotificationsReducer from './notifications_reducer';

const rootReducer = combineReducers({
    invoices: InvoicesReducer,
    notifications: NotificationsReducer
});

export default rootReducer;