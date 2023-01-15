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
            GoLite
          </Title>

          <About>
            GoLite was a company that designed and manufactured lightweight outdoor gear and apparel. The company was founded in 1999 and was based in Boulder, Colorado. GoLite's products included tents, sleeping bags, backpacks, and clothing, all of which were designed to be lightweight and easy to pack. The company was known for its commitment to sustainability and used materials such as recycled nylon and organic cotton in its products. GoLite filed for bankruptcy in 2012 and was acquired by another company.
          </About>
          <About>
            Worked on the packaging and design of their new lite tents. Company wanted info on the weight of the tent while keeping the item appealing. After several iterations, this was the final product.
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
  const { data: pic } = await supabase.from("GoLite").select("*");
  return {
    props: {
      pic
    }
  };
};

