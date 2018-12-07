import * as CONFIG from '../constants/CONFIG_API';

export default function fetchCaller(endpoint, method = 'GET', body) {
    return fetch(`${CONFIG.URL}/${endpoint}`, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Credentials': true
        },
        body: body,
        mode: 'no-cors'
    }).catch((error) => {
        console.error(error);
    });
};
