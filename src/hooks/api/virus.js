import axios from 'axios';

const getDataVirusCorona = async () => {
  const urlApi = `https://api.covid19api.com/summary`;
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  return await axios.get(proxy+urlApi, {
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json'
    }
  });
}
export const api = {
  getDataVirusCorona
} 