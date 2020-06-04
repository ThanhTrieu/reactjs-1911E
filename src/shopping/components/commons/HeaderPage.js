import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from "react-router-dom";
import {helper} from '../../helper/userLogin';
import './common.css';

const { Header } = Layout;

const HeaderPage = () => {
  const history = useHistory();
  const infoUser = helper.getInfoUserLogin();
  const [username, setUserName] = useState(infoUser.data);

  const logoutUser = () => {
    setUserName(null);
    // xoa token luu trong localStorage
    localStorage.removeItem('token');
    // quay ve lai trang login
    history.push('/login');
  }
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">HI : {username}</Menu.Item>
          <Menu.Item key="5">
            <span onClick={() => logoutUser()}>Logout</span>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  )
}

export default React.memo(HeaderPage);