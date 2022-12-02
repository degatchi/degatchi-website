import { Article, P, ClickableH2, Wrap } from "../components/styles";

const ProjectsRow = ({ title, description }) => {
  return (
    <Wrap padding="0">
      <ClickableH2>{title}</ClickableH2>
      <P>{description}</P>
    </Wrap>
  );
};

export default ProjectsRow;
