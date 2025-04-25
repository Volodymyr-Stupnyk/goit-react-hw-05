import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'NGs3SkActjyp15a_4eLFEAl4naA-6OJZaFcsFbWMhmc';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;

export async function getImages(search, page) {
  const params = { query: search, page, orientation: 'landscape' };
  const response = await axios.get('search/photos', { params });

  return response.data;
};