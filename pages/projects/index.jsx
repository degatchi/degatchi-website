import React, { useState } from "react";
import Head from "next/head";

import Post from "../../components/MdxPost";
import MarkdownContent from "../../posts/projects.md";

export default function Projects() {
  return (
    <>
      <Head>
        <title>DeGatchi | Projects</title>
        <meta key="description" name="description" content="" />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}
