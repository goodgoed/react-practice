import React from "react";
import ReactDOM from "react-dom/client";
import LoginFormContainer from "./routes/LoginFormContainer";
import AlreadyLoggedIn from "./layout/AlreadyLoggedIn";
import RequiredAuth from "./layout/RequiredAuth";
import PostsContainer from "./routes/PostsContainer";
import PostDetailsContainer from "./routes/PostDetailsContainer";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AlreadyLoggedIn />,
    children: [
      {
        path: "",
        element: <LoginFormContainer />,
      },
    ],
  },
  {
    path: "/posts",
    element: <RequiredAuth />,
    children: [
      {
        path: "",
        element: <PostsContainer />,
      },
      {
        path: ":postId",
        element: <PostDetailsContainer />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
