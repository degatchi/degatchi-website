import React, { useState } from "react";
import Head from "next/head";

import Post from "../../components/MdxPost";
import MarkdownContent from "../../posts/experience.md";

export default function Experience() {
  return (
    <>
      <Head>
        <title>DeGatchi | Experience</title>
        <meta key="description" name="description" content="" />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}
