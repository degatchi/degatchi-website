import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Page, CenterWrap, Wrap } from "../components/styles";

const Post = ({ children }) => {
  return (
    <CenterWrap>
      <Page>
        <Wrap>
          <Navbar />
          {children}
          <Footer />
        </Wrap>
      </Page>
    </CenterWrap>
  );
};

export default Post;
