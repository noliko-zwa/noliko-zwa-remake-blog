import Header from "../components/Header";
import Head from "next/head";
import { GetStaticProps } from "next";

export default function index() {
  return (
    <div>
      <Head>
        <title>Nolico Taki</title>
      </Head>
      index hello
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
