import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { MDXProvider } from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
// import Head from 'next/head';

export interface PostProps {
	readonly mdx: string;
	metaInformation: object;
}

export interface MatterContents {
	content: string;
	data: object;
}

const Post: React.FC<PostProps> = (props) => {
	return (
		<>
			{/* <Head>SEO Information: {JSON.stringify(props.metaInformation)}</Head> */}
			<MDXProvider>
				<MDX> {props.mdx} </MDX>
			</MDXProvider>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (props) => {
	const directoryPath = path.join('src', 'pages', 'works');
	const filePath = path.join(
		directoryPath,
		`${props!.params!.post}`,
		'index.mdx',
	);
	const rawFileSource = fs.readFileSync(filePath);
	const { content, data }: MatterContents = matter(rawFileSource);
	const source = fs.readFileSync(filePath);
	return {
		props: {
			mdx: content,
			metaInformation: data,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: { post: 'test2' },
			},
			{
				params: { post: 'All-of-love-and-justifications-as-competences' },
			},
		],
		fallback: false,
	};
};

export default Post;
