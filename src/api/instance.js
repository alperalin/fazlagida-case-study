import axios from 'axios';

// Axios create
// You can make an api call by
// calling api variable. It will provide the url.
const api = axios.create({
  baseURL: 'https://ws.audioscrobbler.com/2.0/',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    limit: 10,
    format: 'json',
  },
});

export default api;
