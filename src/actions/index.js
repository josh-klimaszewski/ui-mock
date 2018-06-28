import axios from 'axios';

export const GET_INVOICES = 'GET_INVOICES';
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';

const ROOT_URL = 'https://cdn.contentful.com';
const SPACE_ID = 'rei9f1q1h44r';
const CDN_ACCESS_TOKEN = '2a6b04ce262c6228bb6b14a637fa02136ea1724d842e9917e8062e3ab1c4d97c';

export function getInvoices() {
    const request = axios.get(
    `${ROOT_URL}/spaces/${SPACE_ID}/entries?access_token=${CDN_ACCESS_TOKEN}&content_type=invoices`
    );
    return {
        type: GET_INVOICES,
        payload: request
    }
}
export function getNotifications() {
    const request = axios.get(
    `${ROOT_URL}/spaces/${SPACE_ID}/entries?access_token=${CDN_ACCESS_TOKEN}&content_type=notifications`
    );
    return {
        type: GET_NOTIFICATIONS,
        payload: request
    }
}