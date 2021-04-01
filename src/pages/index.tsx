import Header from '../components/Header';
import Head from 'next/head';
import { GetStaticProps } from 'next';

export default function Home() {
	return (
		<>
			<Head>
				<title>Nolico Taki</title>
			</Head>
			<Header />
			index
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
