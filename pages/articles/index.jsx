import React from "react";
import Head from "next/head";

// import Navbar from "../../components/Navbar";
// import Page from "../../components/Page";

import ArticlesPage from "../../features/ArticlesPage";

export default function Article() {
  return (
    <>
      <Head>
        <title>DeGatchi | Articles</title>
        <meta key="description" name="description" content="" />
      </Head>
      <ArticlesPage />
    </>
  );
}
