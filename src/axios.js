import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-459f3.cloudfunctions.net/api'
})

export default instance;