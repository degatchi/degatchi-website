import { MDXProvider } from "@mdx-js/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Page, CenterWrap, Wrap } from "../components/styles";

const Post = ({ mdx }) => {
  return (
    <CenterWrap>
      <Page>
        <Wrap>
          <Navbar />
          <MDXProvider>{mdx}</MDXProvider>
          <Footer />
        </Wrap>
      </Page>
    </CenterWrap>
  );
};

export default Post;
