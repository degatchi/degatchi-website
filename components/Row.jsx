import {
  P,
  ClickableH2,
  Wrap,
  Text,
  ClickableWrap,
} from "../components/styles";
import Link from "next/link";

const Row = ({ title, description, date, link }) => {
  return link === undefined ? (
    <Wrap padding="0 0 .75rem 0">
      <ClickableH2>{title}</ClickableH2>
      <Text padding="0.25rem 0" opacity="50%" color="black">
        {description}
      </Text>
      <Text padding="0.25rem 0" opacity="50%" color="gray" fontSize=".9rem">
        {date}
      </Text>
    </Wrap>
  ) : (
    <Link href={link} passHref>
      <ClickableWrap padding="0 0 .75rem 0">
        <ClickableH2>{title}</ClickableH2>
        <Text padding="0.25rem 0" opacity="50%" color="black">
          {description}
        </Text>
        <Text padding="0.25rem 0" opacity="50%" color="gray" fontSize=".9rem">
          {date}
        </Text>
      </ClickableWrap>
    </Link>
  );
};

export default Row;
