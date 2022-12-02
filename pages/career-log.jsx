import Head from "next/head";

import Post from "../components/MdxPost";
import MarkdownContent from "../posts/career-log.md";

export default function CareerLog() {
  return (
    <>
      <Head>
        <title>DeGatchi | Career Log</title>
        <meta key="description" name="description" content="" />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}
