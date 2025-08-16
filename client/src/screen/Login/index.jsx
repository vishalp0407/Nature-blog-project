import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials, logout } from "../../slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const naviagete = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const user = { name: "vishal", age: 22, email: "vishal@exmaple.com" };
    dispatch(setCredentials(user));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      {userInfo ? (
        <>
          <h2>Welcome, {userInfo.name}</h2>
          <button onClick={handleLogout}>Login</button>
        </>
      ) : (
        <>
          <h2>No user logged in</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
