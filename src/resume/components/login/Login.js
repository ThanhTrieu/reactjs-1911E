import React from 'react';
import {
  Link
} from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <form>
        <label htmlFor="user">Username</label>
        <input type="text" id="user" name="user"/>
        <br/>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="pass"/>
        <br/>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Quay ve trang chu</Link>
    </>
  )
}
export default LoginForm;