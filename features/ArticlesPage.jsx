import {
  Page,
  ContentOuter,
  ContentInner,
  CenterWrap,
  Wrap,
} from "../components/styles";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArticlesPage = (props) => {
  console.log({ posts: props.posts });
  return (
    <CenterWrap>
      <Page>
        <Wrap>
          <Navbar />
          <ContentOuter>
            <ContentInner>
              {props.posts?.map((post) => (
                <Row
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </ContentInner>
          </ContentOuter>
          <Footer />
        </Wrap>
      </Page>
    </CenterWrap>
  );
};

export default ArticlesPage;
