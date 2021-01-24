//import "./App.css";
import InstructorTag from "./components/InstructorTag";
import { AppWrapper, Name, Emoji, Github } from "./styles";

const App = () => {
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <InstructorTag />
      <Emoji>{$data.Emoji}</Emoji>
      <Name>{$data.name}</Name>

      <Github>onClick={() => window.open(`${data.Github}`)}</Github>
    </AppWrapper>
  );
};

export default App;
