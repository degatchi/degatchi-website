import { MenuOuter, Nav, Span, H1, Wrap } from "./styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Wrap>
        <H1>DeGatchi</H1>
      </Wrap>

      <MenuOuter>
        <Nav>
          <Link href="/" passHref>
            <Span>Home</Span>
          </Link>
          <Link href="/projects" passHref>
            <Span>Projects</Span>
          </Link>
          <Link href="/articles" passHref>
            <Span>Articles</Span>
          </Link>
          <Link href="/career-log" passHref>
            <Span>Career</Span>
          </Link>
          <Link href="/experience" passHref>
            <Span>Experience</Span>
          </Link>
        </Nav>
      </MenuOuter>
    </>
  );
};

export default Navbar;
