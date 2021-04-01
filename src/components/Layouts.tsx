import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

type LayoutProps = {
	title?: string;
};

const layoutStyle = createGlobalStyle`
	body {background-color : #ffffff ;
  text-align: center;
  font-size: 16px;
  font-family: Century Gothic;
  letter-spacing: 0.07em
  }
  #wrapper {
    display: flex;
    flex-direction: column;
}
`;
