import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link'


const HomeContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-black
    
    sm:pt-20

    `}
`;

const HomeStyles = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  items-center
  justify-center
    relative
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
    flex-col
    justify-center
    items-center
    rounded-md
    p-4
    z-40
    
    `}
`;

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

const Title2 = styled.div`
  background: rgba(0, 0, 0, 0.5);
  ${tw`
  flex
  flex-col
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
  px-4
  py-2
  rounded-md
  
    
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


const Title3 = styled.div`
  ${tw`
  flex
  items-center
  text-center
  text-xl
  font-extrabold
  text-white
  font-sans
  uppercase
  rounded-md
  leading-[4rem]
  z-40
  mt-8
  px-4
  rounded-md
  bg-blue-500
  hover:bg-black
  
    
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

const Title4 = styled.div`
  ${tw`
  flex
  items-center
  text-center
  text-xl
  font-extrabold
  text-white
  font-sans
  uppercase
  rounded-md
  leading-[4rem]
  z-40
  px-4
  mt-8
  rounded-md
  bg-gray-500
  
  hover:bg-black
    
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



const Links = styled.div`
    ${tw`
    flex
    flex-row
    justify-evenly
    w-full
    pt-10
    
    `}
`

const BackgroundImage = styled.img`
  ${tw`
    absolute
    w-full
    h-full
    items-center
    justify-center
    object-cover
    opacity-60
    
    sm:object-contain
    sm:opacity-100

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
              Connor Smiley <br />
              코너 스마일리<br />
              コナー・スマイリー
            </Title>
          </CardContainer>

          <BackgroundImage src="/3paint.png" />

        </HomeStyles>

      </HomeContainer>
    </>
  );
};

export default IndexPage;
