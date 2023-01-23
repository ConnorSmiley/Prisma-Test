import { GetServerSideProps  } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {PrismaClient} from "@prisma/client";


const IndexContainer = styled.div`
  ${tw`
    `}
`;

const IndexStyle = styled.div`
  ${tw`
    
    `}
`;

export interface IndexProps {
  email:any
  stringEmail: any
  arrayEmail:any
}


const IndexPage: React.FC<IndexProps> = ({ arrayEmail }) => {
  console.log(arrayEmail)

  return (
    <>
      <IndexContainer>
        <IndexStyle>
          {arrayEmail.map((x:any) => (
            <div>
              {x}
            </div>
          ))}

        </IndexStyle>
      </IndexContainer>
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()
  const stringEmail = await prisma.email.findMany();
  const arrayEmail = stringEmail.map(({ name}) =>  name)
  // const email = JSON.stringify(arrayEmail)
  return {
    props: { arrayEmail }
  };
};

