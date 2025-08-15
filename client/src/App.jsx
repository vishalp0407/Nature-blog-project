import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./store";
import Post from "./screen/Post";
import PostDetails from "./screen/PostDetails";
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Provider>
  );
};

export default App;
