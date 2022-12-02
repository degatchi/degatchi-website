import Head from "next/head";

import Post from "../../components/MdxPost";
import MarkdownContent from "../../posts/articles/the-areas-of-web3-development.md";

export default function TheAreasOfWeb3Development() {
  return (
    <>
      <Head>
        <title>DeGatchi | The Areas Of Web3 Development</title>
        <meta
          key="Learn about the different fields of development within the Web3 space."
          name="The Areas Of Web3 Development"
          content="The Areas Of Web3 Development"
        />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}
