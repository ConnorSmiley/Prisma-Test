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
            My experimental font design
          </Title>

          <About>
            Creating an experimental font using shapes can be a fun and creative process. First, you would need to decide on the shapes you want to use for your font. These could be anything from basic geometric shapes to more complex illustrations. Next, you would need to design each letter, number, and punctuation mark using your chosen shapes. This can be done digitally using software such as Adobe Illustrator or Inkscape, or manually using pen and paper. Once you have designed all of the characters for your font, you would need to digitize them and convert them into a usable font file format such as TTF or OTF. Finally, you can test your font by using it in a design project or sharing it with others to get feedback. Overall, making an experimental font with shapes can be a fun and rewarding experience, as you get to express your creativity and explore new design possibilities.
          </About>
          <About>

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
  const { data: pic } = await supabase.from("MyFont").select("*");
  return {
    props: {
      pic
    }
  };
};

