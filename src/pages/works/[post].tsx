import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { MDXProvider } from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
import styled from 'styled-components';

// import Head from 'next/head';

export interface PostProps {
	readonly mdx: string;
	metaInformation: object;
}

export interface MatterContents {
	content: string;
	data: object;
}

const BasicStyle = styled.div`
	font-size: 40px;
	font-weight: bold;
	h1 {
		color: pink;
	}
`;

const Post: React.FC<PostProps> = (props) => {
	return (
		<>
			{/* <Head>SEO Information: {JSON.stringify(props.metaInformation)}</Head> */}
			<BasicStyle>
				<MDXProvider components={{}}>
					<MDX> {props.mdx} </MDX>
				</MDXProvider>
			</BasicStyle>
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
