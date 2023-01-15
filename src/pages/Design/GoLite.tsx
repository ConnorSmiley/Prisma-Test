import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import DesignThumb from "@/pages/Design/DesignThumb";


const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    py-60
    z-10
    bg-black
    
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
    pb-10
    z-10
    
    `}
`;

const GoLiteStyle = styled.div`
  ${tw`
     relative
    mt-20
    h-full
    w-full
    flex
    flex-col
    items-center
    z-10 
    `}
`;

const PictureContainer = styled.div`
  ${tw`
    
    `}
`;

const PictureCard = styled.div`
  ${tw`
    
    `}
`;

const Title = styled.div`
  ${tw`
    
    `}
`;

const About = styled.div`
  ${tw`
    
    `}
`;

export interface IGoLiteProps {
  pic: any;
}

const GoLite: React.FC<IGoLiteProps> = ({ pic }) => {
  console.log(pic)

  const mappedPics = [...pic]?.map((data: any) => (
    <>
      <Link key={data.id} href={`Design/${data.id}`}>
        <PictureCard key={data.id} data={data} />
      </Link>
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

