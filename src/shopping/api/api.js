import jwt from 'jsonwebtoken';
const KEY_JWT = '123456789';

const data = [
  {
    id: 1,
    name: "samsungs10",
    price: 1000,
    image: "https://cdn.tgdd.vn/Products/Images/42/214924/TimerThumb/xiaomiredmenote9s.jpg",
    qty: 10,
    desc: "samsungs10 rat dep"
  },
  {
    id: 2,
    name: "samsungs9",
    price: 800,
    image: "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-600x600-200x200.jpg",
    qty: 5,
    desc: "samsungs9 rat dep"
  },
  {
    id: 3,
    name: "samsungs8",
    price: 600,
    image: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x400.jpg",
    qty: 5,
    desc: "samsungs8 rat dep"
  }
];

const getDataById = (id) => data.filter(item => item.id === id);

const checkLoginUser = (user, pass) => {
  let token = null;
  if(user === 'admin' && pass === '123'){
    // ma hoa thong tin user va luu vao localStorage tren browser
    token = jwt.sign({data: user}, KEY_JWT, { algorithm: 'RS256'});
  }
  return token;
}

export const api = {
  product: data,
  getDataById
}