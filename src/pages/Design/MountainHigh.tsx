import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import DesignThumb from "@/pages/Design/DesignThumb";
import PictureGrid from "@/pages/Design/PictureGrid";


const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    py-60
    bg-black
    pb-40
    
    
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


const GoLiteContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    z-10
    bg-black
    pb-40
    
    `}
`;

const GoLiteStyle = styled.div`
  ${tw`
    mt-24
    h-full
    w-full
    flex
    flex-col
    items-center
      relative

    
    z-10
    `}
`;

const PictureContainer = styled.div`
  ${tw`
  w-[95%]
  h-auto
  flex
  grid
  grid-cols-3
  gap-2
  z-10
  pb-8
  
  sm:grid-cols-5
  sm:gap-2
    
    `}
`;


const Title = styled.div`
  ${tw`
  text-4xl
  z-10
  text-white
  font-bold
  pb-8
    
    `}
`;

const About = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  ${tw`
  w-full
  h-full
  z-10
  text-white
  w-[95%]
  pb-10
  px-3
  py-3
  text-lg
  rounded-md
    
    sm:text-2xl
    md:text-3xl
    lg:text-3xl
    xl:text-3xl
    `}
`;

export interface IGoLiteProps {
  pic: any;
}

const GoLite: React.FC<IGoLiteProps> = ({ pic }) => {
  console.log(pic);

  const mappedPics = [...pic]?.map((data: any) => (
    <>
      <PictureGrid key={data.id} data={data} />
    </>
  ));

  return (
    <>
      <Navbar />
      <GoLiteContainer>
        <GoLiteStyle>
          <PictureContainer>
            {mappedPics}
          </PictureContainer>

          <Title>
            Mountain High Ski Resort
          </Title>

          <About>
            Mountain High Ski Resort is a winter sports resort located in the San Gabriel Mountains of Southern California. The resort has three distinct areas, each with its own base lodge, chairlifts, and terrain. The West Resort has beginner and intermediate runs, the East Resort has more challenging terrain for advanced skiers and snowboarders, and the North Resort offers the longest runs and the most challenging terrain. The resort also offers night skiing, snow tubing, and snowshoeing. The resort typically operates from late November to April depending on snow conditions. Mountain High Ski Resort is one of the most popular ski resorts in southern California, known for its close proximity to Los Angeles and its good snow conditions.
          </About>
          <About>
            The resort wanted people to know the location is not far from the city. These ads were made to remind people the reason is within reasonable distance to the city.
          </About>

        </GoLiteStyle>

        <Background>
          <GlowBoxPurple />
          <GlowBoxPink />
        </Background>

      </GoLiteContainer>
    </>
  );
};

export default GoLite;

export const getStaticProps = async () => {
  const { data: pic } = await supabase.from("MountainHigh").select("*");
  return {
    props: {
      pic
    }
  };
};

