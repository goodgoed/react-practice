import React from "react";
import ReactDOM from "react-dom/client";
import LoginFormContainer from "./routes/LoginFormContainer";
import AlreadyLoggedIn from "./layout/AlreadyLoggedIn";
import RequiredAuth from "./layout/RequiredAuth";
import ConditionalRoute from "./layout/ConditionalRoute";
import PostsContainer from "./routes/PostsContainer";
import PostDetailsContainer from "./routes/PostDetailsContainer";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<AlreadyLoggedIn />}>
                <Route path="" element={<LoginFormContainer />} />
              </Route>
              <Route path="/posts" element={<RequiredAuth />}>
                <Route
                  path=""
                  element={
                    <ConditionalRoute
                      FirstComponent={PostsContainer}
                      SecondComponent={PostDetailsContainer}
                    />
                  }
                />
                <Route
                  path=":postId"
                  element={
                    <ConditionalRoute
                      FirstComponent={PostsContainer}
                      SecondComponent={PostDetailsContainer}
                    />
                  }
                />
              </Route>
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
