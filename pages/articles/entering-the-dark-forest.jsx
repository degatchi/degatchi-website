import Head from "next/head";

import Post from "../../components/MdxPost";
import MarkdownContent from "../../posts/articles/entering-the-dark-forest.md";

export default function TraversingTheDarkForest() {
  return (
    <>
      <Head>
        <title>DeGatchi | Traversing The Dark Forest</title>
        <meta
          key="Learn about how to prepare to build MEV bots in crypto."
          name="Entering The Dark Forest"
          content="The dark forest is harsh environment. A void full of relentless hounds drooling to seize every opportunity that they smell. Without sufficient resources and knowledge, you're sure to get eaten alive. Stripped of your precious ETH. For any new adventurer inquisitive, allow me to pry open the doors into the shroud."
        />
      </Head>
      <Post mdx={<MarkdownContent />} />
    </>
  );
}