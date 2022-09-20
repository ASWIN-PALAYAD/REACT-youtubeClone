const axios = require('axios')

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'abd8f80e33mshd2435b7432e20a4p16f914jsn36a29335bcd7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;

}