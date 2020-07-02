import axios from 'axios';

const getAllDataProduct = async () => {
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const api = `http://t3h-edu.herokuapp.com/api/t3h/v1/products`;
  const response = await axios.get(proxy+api, {
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.status === 200 ? response.data : [];
  return data;
}

const getDataProductById = async (id) => {
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const api = `http://t3h-edu.herokuapp.com/api/t3h/v1/products/${id}`;
  const response = await axios.get(proxy+api, {
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.status === 200 ? response.data : [];
  return data;
}

export const api = {
  getAllDataProduct,
  getDataProductById
}