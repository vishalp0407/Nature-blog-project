import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store";
import Layout from "@components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
