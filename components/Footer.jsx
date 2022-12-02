import {
  Page,
  H1,
  H2,
  MenuOuter,
  Nav,
  Span,
  ContentOuter,
  ContentInner,
  Article,
  P,
  ClickableH2,
  Wrap,
  HR,
  ExternalLink,
} from "../components/styles";
import styled from "styled-components";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const SpaceDiv = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconLink = styled(ExternalLink)`
    margin-left: 1em;
    width: 1em;
    height: 1em;
`

const Footer = () => {
  return (
    <ContentOuter>
      <ContentInner>
        <HR />
        <SpaceDiv>
          <Wrap display="flex">
            <a>2022© DeGatchi</a>
          </Wrap>
          <Wrap display="flex">
            <IconLink
              target="_blank"
              rel="noopener"
              href="https://twitter.com/degatchi"
            >
              <FaTwitter />
            </IconLink>
            <IconLink
              target="_blank"
              rel="noopener"
              href="https://github.com/degatchi"
            >
              <FaGithub />
            </IconLink>
          </Wrap>
        </SpaceDiv>
      </ContentInner>
    </ContentOuter>
  );
};

export default Footer;
