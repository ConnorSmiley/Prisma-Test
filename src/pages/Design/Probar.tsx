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
            Probar
          </Title>

          <About>
            Probar is a company that produces and sells organic, plant-based energy bars and snacks. The company was founded in 2001 with the mission of creating a healthy and delicious alternative to traditional energy bars that are high in sugar and artificial ingredients. Probar's products include energy bars, meal bars, and bites, all of which are made with natural ingredients such as fruits, nuts, and seeds. The company claims that their products are non-GMO, gluten-free, and vegan. Probar also focuses on sustainability and uses eco-friendly packaging materials. The company operates in United States and it's known for producing high-quality, nutritious products that are perfect for people with active lifestyles and dietary restrictions.
          </About>
          <About>
            Worked on color correction and helped design some illustrations. The company wanted three of their products redesigned.

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
  const { data: pic } = await supabase.from("ProBar").select("*");
  return {
    props: {
      pic
    }
  };
};

