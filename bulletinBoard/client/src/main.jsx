import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./routes/Loginpage";
import RequiredAuth from "./routes/RequiredAuth";
import Posts from "./routes/Posts";
import Post from "./routes/PostDetails";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/posts",
    element: <RequiredAuth />,
    children: [
      {
        path: "",
        element: <Posts />,
      },
      {
        path: ":postId",
        element: <Post />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
