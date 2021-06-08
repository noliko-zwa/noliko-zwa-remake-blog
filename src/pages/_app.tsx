import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import datas from "../data.json";
import { AppContext } from "../contexts/AppContext";

export const getStaticPrpos = async () => {
  return {
    props: { datas },
  };
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={datas}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
