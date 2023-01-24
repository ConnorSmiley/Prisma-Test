import styled from "styled-components";
import tw from "twin.macro";
import { useState } from "react";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const Container = styled.div`
  ${tw`
  h-full
  w-full
  bg-black
    
    `}
`;


const Style = styled.div`
    ${tw`
    items-center
    flex
    justify-center
    flex-col
    
    `}
`

const List = styled.div`
    ${tw`
    bg-gray-400
    w-[90%]
    flex
    flex-col
    
    `}
`



const ProjectPage = ({ emailx }) => {
  const [words, setWords] = useState();
  const handleChange = (e: any) => {
    setWords(e.target.value);
  };

  async function saveMovie(e) {
    e.preventDefault();
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(words)
    });
    return await response.json();
  }

  return (
    <>
      <Container>
        <Style>

        <form onSubmit={saveMovie}>
          <input onChange={handleChange} />
          <button>submit</button>
        </form>

        {[emailx].map((x) => (
          <>
              <List>
              {x}
              </List>
          </>
        ))}

        </Style>
      </Container>
    </>
  );
};
export default ProjectPage;

export async function getServerSideProps() {

  const emails = await prisma.signup.findMany();
  const emailx = JSON.stringify(emails);

  return {
    props: {
      emailx
    }
  };
}

