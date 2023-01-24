import styled from "styled-components";
import tw from "twin.macro";
import { useState } from "react";
import {PrismaClient, Prisma} from "@prisma/client";


const prisma = new PrismaClient()

const Container = styled.div`
  ${tw`
  h-16
  w-full
  bg-red-500
  text-green-500
    
    `}
`;


const ProjectPage = ({ emailx }) => {
  const [words, setWords] = useState();

  const handleChange = (e: any) => {
    setWords(e.target.value);
  };





  async function saveMovie(e ) {
    e.preventDefault()
    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(words)
    })

    return await response.json()
  }



  return (
    <>
      <Container>
        <form onSubmit={saveMovie}
        >
          <input onChange={handleChange} />
          <button >submit</button>
        </form>

        {[emailx].map((x) => (
          <>
            {x}
          </>
            ))}

      </Container>
    </>
  );
};
export default ProjectPage;

export async function getServerSideProps() {

  const emails = await prisma.signup.findMany();
  const emailx = JSON.stringify(emails)

  return {
    props: {
      emailx
    }
  };
}

