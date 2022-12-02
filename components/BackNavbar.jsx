import { MenuOuter, Nav, Span } from "./styles";
import Link from "next/link";
import styled from "styled-components";

const GraySpan = styled(Span)`
  color: gray;
  opacity: 50%;
  font-weight: 400;
`

const BackNavbar = ({ link, date }) => {
  return (
    <MenuOuter>
      <Nav>
        {link !== undefined && (
          <>
            <Link href={link} passHref>
              <Span>Back</Span>
            </Link>
            <GraySpan>{date}</GraySpan>
          </>
        )}
      </Nav>
    </MenuOuter>
  );
};

export default BackNavbar;
