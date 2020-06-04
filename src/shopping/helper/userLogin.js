import jwt from 'jsonwebtoken';
const KEY_JWT = '123456789';

// cong viec - doc du lieu token tu localStorage
// kiem tra neu co ton tai token trong localStorage thi chung to user da login - gia ma chuoi token de lay cac thong tin co ban cua user ra
const getInfoUserLogin = () => {
  const token = localStorage.getItem('token');
  //console.log(token);
  if(token){
    // giai ma token
    const decodedToken = jwt.verify(token, KEY_JWT);
    //console.log(decodedToken);
    return decodedToken;
  }
  return false;
}

export const helper = {
  getInfoUserLogin
}