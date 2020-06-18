import axios from 'axios';

const getDataMovieFromApi = async () => {
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const response = await axios.get(proxy+url,{
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json'
    }
  });
  const result = await response.status === 200 ? response.data.results : [];
  return result;
}

export const api = {
  getDataMovieFromApi
}