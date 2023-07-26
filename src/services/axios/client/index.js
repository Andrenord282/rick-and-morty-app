import axios from 'axios';

const DEV_URL = 'https://rickandmortyapi.com/api/';

const apiServer = axios.create({
    baseURL: process.env.REACT_APP_API_SEREVER || DEV_URL,
});

export default apiServer;
