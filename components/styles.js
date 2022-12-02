import styled from "styled-components";

export const Iframe = styled.iframe`
  border: none;
  width: 1080px;
  height: 720px;

  @media (max-width: 1080px) {
    width: 720px;
    height: 480px;
  }

  @media (max-width: 720px) {
    width: 375px;
    height: 250px;
  }
`;

export const Page = styled.div`
  max-width: 90%;
  width: 40em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5em;
  padding-bottom: 8em;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 0;
`;

export const H2 = styled.h2`
  margin-bottom: 0;
`;

export const H3 = styled.h3`
  margin-bottom: 0;
`;

export const ClickableH2 = styled(H2)`
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const MenuOuter = styled.div`
  margin-top: 0.5em;
`;

export const Nav = styled.nav``;

export const Span = styled.span`
  color: #1a202c;
  margin-right: 1em;
  font-weight: 520;
  text-decoration: underline;
  text-decoration-color: black;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Article = styled.article`
  color: #1a202c;
`;

export const ContentOuter = styled.div``;

export const ContentInner = styled.div`
  margin-top: 2em;
`;

export const P = styled.p`
  text-align: justify;
`;

export const Img = styled.img`
  max-width: 100%;
  display: block;
  margin: auto;
`;

export const HR = styled.hr`
  background: #ccc;
  height: 1px;
  border: none;
`;

export const SpaceDiv = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// ----------------------------------------------------------------

export const Wrap = styled.div`
  top: ${({ top }) => (top ? `${top}` : "")};
  left: ${({ left }) => (left ? `${left}` : "")};
  right: ${({ right }) => (right ? `${right}` : "")};
  position: ${({ position }) => (position ? `${position}` : "")};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : "")};
  width: ${({ width }) => (width ? `${width}` : "")};
  height: ${({ height }) => (height ? `${height}` : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  padding: ${({ padding }) => (padding ? `${padding}` : "")};
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : "center")};
  vertical-align: ${({ verticalAlign }) =>
    verticalAlign ? `${verticalAlign}` : ""};
  opacity: ${({ opacity }) => (opacity ? `${opacity}` : "100%")};

  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : "")};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}` : "")};
  overflow-y: ${({ overflowY }) =>
    overflowY
      ? `${overflowY}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow-x: ${({ overflowX }) =>
    overflowX
      ? `${overflowX}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow: ${({ overflow }) =>
    overflow
      ? `${overflow}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : ``)};
  border: ${({ border }) => (border ? `${border}` : ``)};
  border-bottom: ${({ borderBot }) => (borderBot ? `${borderBot}` : ``)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : ``};

  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns ? `${gridTemplateColumns}` : ``};
  grid-gap: ${({ gridGap }) => (gridGap ? `${gridGap}` : ``)};

  transform: ${({ transform }) => (transform ? `${transform}` : "")};

  transition: all 0.2s ease-in-out;
`;

export const CenterWrap = styled(Wrap)`
  display: flex;
  justify-content: center;
`;

export const HoverWrap = styled(Wrap)`
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: 50%;
  }
`;

export const ClickableWrap = styled(Wrap)`
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: ${({ hoverOpacity }) =>
      hoverOpacity ? `${hoverOpacity}` : "50%"};
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor ? `${hoverBgColor}` : ``};
  }
`;

export const ExternalLinkWrap = styled.a`
  top: ${({ top }) => (top ? `${top}` : "")};
  left: ${({ left }) => (left ? `${left}` : "")};
  right: ${({ right }) => (right ? `${right}` : "")};
  position: ${({ position }) => (position ? `${position}` : "")};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : "")};
  width: ${({ width }) => (width ? `${width}` : "")};
  height: ${({ height }) => (height ? `${height}` : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  padding: ${({ padding }) => (padding ? `${padding}` : "0.25rem 0.5rem")};
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : "center")};
  vertical-align: ${({ verticalAlign }) =>
    verticalAlign ? `${verticalAlign}` : ""};

  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : "")};
  overflow-y: ${({ overflowY }) =>
    overflowY
      ? `${overflowY}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow-x: ${({ overflowX }) =>
    overflowX
      ? `${overflowX}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow: ${({ overflow }) =>
    overflow
      ? `${overflow}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : ``)};
  border: ${({ border }) => (border ? `${border}` : ``)};
  border-bottom: ${({ borderBot }) => (borderBot ? `${borderBot}` : ``)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : ``};

  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

export const ExternalLink = styled.a`
  outline: none;
  text-decoration: none;
  color: ${({ color }) => (color ? `${color}` : "black")};
  border: ${({ border }) => (border ? `${border}` : `none`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : `1rem`)};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : `left`)};
  padding: ${({ padding }) => (padding ? `${padding}` : "0")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : ``)};

  /* text-shadow: 0 0 1px white; */

  &:hover {
    opacity: ${({ opacity }) => (opacity ? `${opacity}` : "50%")};
  }

  &.active {
    border-bottom: 3px solid violet;
  }
`;

export const CenterScreen = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? `${top}` : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.p`
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  padding: ${({ padding }) => (padding ? `${padding}` : "0 0.5rem")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  color: ${({ color }) => (color ? `${color}` : `white`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : `1rem`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : ``)};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : `left`)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : ``)};
`;
