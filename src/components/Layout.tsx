import * as React from "react";
import Link from "next/link";
import NavBar from "./NavBar";
import { createGlobalStyle } from "styled-components";

type Children = any;

export default function Layout({ children }: Children) {
  return (
    <>
      <LayoutStyle />
      <NavBar />
      {children}
    </>
  );
}

type LayoutProps = {
  title?: string;
};

const LayoutStyle = createGlobalStyle`
	body {
  text-align: center;
  font-size: 16px;
  color: pink;
  font-family: Century Gothic;
  letter-spacing: 0.07em
  }
  #wrapper {
    display: flex;
    flex-direction: column;
}
`;
