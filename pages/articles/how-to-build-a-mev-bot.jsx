import Head from "next/head";

import Post from "../../components/MdxPost";
import MarkdownContent from "../../posts/articles/how-to-build-a-mev-bot.md";

export default function HowToBuildAMevBot() {
  return (
    <>
      <Head>
        <title>DeGatchi | How To Build a MEV Bot</title>
        <meta
          key="A step-by-step guide about what goes into building a MEV bot from scratch."
          name="How To Build a MEV Bot"
          content="MEV"
        />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}
