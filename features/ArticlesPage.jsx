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

const ArticlesPage = () => {
  return (
    <CenterWrap>
      <Page>
        <Wrap>
          <Navbar />

          <ContentOuter>
            <ContentInner>
              <Row
                title="Entering The Dark Forest"
                description="Learn about how to research about MEV bots so you can eventually build your own."
                date="Oct 11, 2022 | By DeGatchi"
                link="/articles/entering-the-dark-forest"
              />
              <Row
                title="The Areas Of Web3 Development"
                description="Learn about the different fields of development within the Web3 space."
                date="Sep 13, 2022 | By DeGatchi"
                link="/articles/the-areas-of-web3-development"
              />
              <Row
                title="How To Build a MEV Bot"
                description="A step-by-step guide about what goes into building a MEV bot from scratch."
                date="Sep 9, 2022 | By DeGatchi"
                link="/articles/how-to-build-a-mev-bot"
              />
            </ContentInner>
          </ContentOuter>

          <Footer />
        </Wrap>
      </Page>
    </CenterWrap>
  );
};

export default ArticlesPage;
