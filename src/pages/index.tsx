import styled from "styled-components";
import tw from "twin.macro";
import { useState } from "react";


const Container = styled.div`
  ${tw`
  h-16
  w-full
  bg-red-500
    
    `}
`;


const ProjectPage = () => {
  const [words, setWords] = useState("");

  const handlesubmit = ()  => {
  }

  const handleChange = (e:any)  => {
    setWords(e.target.value)
  }

  return (
    <>
      <Container>
        <form>
          <input onChange={handleChange} />
          <button onClick={handlesubmit}>submit</button>
        </form>

      </Container>
    </>
  );
};
export default ProjectPage;


