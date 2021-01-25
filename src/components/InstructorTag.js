import data from "../data";
import { Emoji, GoToGithub, Name, TagWrapper } from "./styles";

const InstructorTag = ({ github, name, emoji }) => {
  return (
    <TagWrapper onClick={() => window.open(`https://github.com/${github}`)}>
      <Emoji>{emoji}</Emoji>
      <Name>{name}</Name>
      <GoToGithub>Go to GitHub</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
