import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomeContainer = styled.div`
  ${tw`
    w-full
    h-full
    bg-black
    pt-20
  relative

    `}
`;

const HomeStyles = styled.div`
  ${tw`
  w-full
  h-full
  flex
  items-center
  justify-center
  z-40
    
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
    w-screen
    h-full
    items-center  
    justify-evenly
    `}
`;

const CardContainer = styled.div`
  //box-shadow: 0px 0px 15px 0px rgba(77,77,255,0.5); 
  ${tw`
    flex
    justify-center
    items-center
    w-[60%]
    rounded-md
    p-4
    z-40
    
    `}
`

const Title = styled.div`
  //text-shadow: rgba(242, 100, 255, 1) 0px 0px 1480px;
  ${tw`
  h-full
  w-full
  flex
  justify-center
  items-center
  text-center
  text-2xl
  font-extrabold
  text-white
  font-sans
  uppercase
  rounded-md
  leading-[4rem]
  z-40
    
    sm:text-3xl
    sm:leading-[6rem]
    md:text-3xl
    md:leading-[6rem]
    lg:text-4xl
    lg:leading-[7rem]
    xl:text-4xl
    xl:leading-[7rem]

    `}
`;

const BackgroundImage = styled.img`
    ${tw`
    w-full
    h-full
    absolute
    items-center
    justify-center
    
    `}
`

const IndexPage: NextPage = () => {

  return (
    <>
      <Navbar />


      <HomeContainer>
        <Background>
          <GlowBoxPurple />
          <GlowBoxPink />
        </Background>

        <HomeStyles>


          {/*<CardContainer>*/}
            <Title>
              Connor Smiley <br/>
            코너 스마일리<br/>
              コナー・スマイリー
            </Title>
          {/*</CardContainer>*/}

          <BackgroundImage src="/3paint.png" />

        </HomeStyles>

      </HomeContainer>
    </>
  );
};

export default IndexPage;
