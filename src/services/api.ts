import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.30:3333',
})

export {api};