import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";

const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    py-60
    
    `}
`;
const GlowBoxPurple = styled.div`
  //x-offset y-offset blur spread
  box-shadow: 0px 0px 10000px 200px rgba(148, 97, 255, 1);
  ${tw`
  opacity-50
    `}
`;

const GlowBoxPink = styled.div`
  box-shadow: 0px 0px 1000px 200px #fe017a;
  ${tw`
  opacity-50
    `}
`;


const AboutContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-black
    `}
`;

const AboutStyle = styled.div`
  ${tw`
    mt-20
    
    `}
`;

const LinkS = styled.div`
  ${tw`
    
    `}
`;

export default function About() {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <AboutStyle>
          <div>
            Work in progress
          </div>

          <Background>
            <GlowBoxPurple />
            <GlowBoxPink />
          </Background>

        </AboutStyle>
      </AboutContainer>
    </>
  );
}
