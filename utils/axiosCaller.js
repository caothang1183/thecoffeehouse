import axios from 'axios';
import * as CONFIG from '../constants/CONFIG_API';

export default function axiosCaller(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${CONFIG.URL}/${endpoint}`,
        data: body,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Credentials': true
        },
        mode: 'no-cors'
    }).catch(err => {
        console.log(err);
    });
};
