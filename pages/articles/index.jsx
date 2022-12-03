import React from "react";
import Head from "next/head";

// import Navbar from "../../components/Navbar";
// import Page from "../../components/Page";

import ArticlesPage from "../../features/ArticlesPage";
import { getAllPosts } from "../../utils/api";

export default function Article(props) {

  console.log(props.posts)
  return (
    <>
      <Head>
        <title>DeGatchi | Articles</title>
        <meta key="description" name="description" content="" />
      </Head>
      <ArticlesPage posts={props.posts} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const posts = getAllPosts(['title', "description",'date', 'slug']);
  console.log({posts})
  return {
    props: {
      posts,
    },
  };
}
