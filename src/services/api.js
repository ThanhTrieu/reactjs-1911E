import axios from 'axios';

const getDataMovie = async (nameMovie) => {
  const urlApi = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=cfe422613b250f702980a3bbf9e90716`;
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const response = await axios.get(proxy+urlApi, {
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json'
    }
  });
  const result = await response.data ? response.data.results : [];
  return result;
}

export const api = {
  getDataMovie
}