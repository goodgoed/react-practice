import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { wrapper } from "../app/store";
import { Provider } from "react-redux";

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
