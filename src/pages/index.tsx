import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomeContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-black
    pt-20

    `}
`;

const HomeStyles = styled.div`
  ${tw`
  w-full
  h-full
  flex
  items-center
  justify-center
    relative
    z-50

    
    `}
`;

const GlowBoxPurple = styled.div`
  //x-offset y-offset blur spread
  box-shadow: 0px 0px 1000px 200px #a117f2;
  opacity: 80%;
  ${tw`
    
    `}
`;

const GlowBoxPink = styled.div`
  box-shadow: 0px 0px 1000px 200px #fe017a;
  opacity: 80%;
  ${tw`
    
    `}
`;

const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    items-center  
    justify-evenly
    `}
`;

const CardContainer = styled.div`
  box-shadow: 0px 0px 15px 0px rgba(77,77,255,0.5); 
  ${tw`
    flex
    justify-center
    items-center
    w-[60%]
    bg-black
    rounded-md
    p-4
    opacity-80
    
    `}
`

const Title = styled.div`
  text-shadow: rgba(242, 100, 255, 1) 0px 0px 1480px;
  ${tw`
  h-40
  w-[60%]
  flex
  justify-center
  text-4xl
  uppercase
  font-bold
  text-white
  rounded-md
    
    `}
`;

const IndexPage: NextPage = () => {

  return (
    <>
      <Navbar />

      <Background>
        <GlowBoxPurple />
        <GlowBoxPink />
      </Background>

      <HomeContainer>
        <HomeStyles>


          <CardContainer>
            <Title>
              Connor
              Smiley
            </Title>
          </CardContainer>

        </HomeStyles>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default IndexPage;
