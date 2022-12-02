import Head from "next/head";
import Post from "../components/MdxPost";
import MarkdownContent from "../posts/about.md";

export default function Home() {
  return (
    <>
      <Head>
        <title>DeGatchi | Home</title>
        <meta key="description" name="description" content="" />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}
