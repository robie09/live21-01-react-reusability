import data from "../data";

const InstructorTag = () => {
  // Create the InstructorTag component here
  const instructor = data.map((data) => {
    return <InstructorTag key={data.id} data={data} />;
  });

  return <>{instructor}</>;
};

export default InstructorTag;
