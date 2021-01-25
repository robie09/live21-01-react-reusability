//import "./App.css";
import InstructorTag from "./components/InstructorTag";
import { AppWrapper } from "./components/styles";

const instructors = [
  {
    id: 1,
    name: "Hamza",
    emoji: "🌚",
    github: `DarthHamza`,
  },
  {
    id: 2,
    name: "Laila",
    emoji: "🐥",
    github: `Lailz`,
  },
  {
    id: 3,
    name: "Hasan",
    emoji: "🦍",
    github: `thehasanas`,
  },
];

const App = () => {
  const instructorsList = instructors.map((inst) => (
    <InstructorTag {...inst} key={inst.id} />
  ));
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {instructorsList}
    </AppWrapper>
  );
};

export default App;
