import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import store from "./store";

import PostDetails from "./screen/PostDetails";
import Login from "./screen/Login";
import Regiser from "./screen/Register";
import Home from "./screen/Home";
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regiser />} />
      </Routes>
    </Provider>
  );
};

export default App;
