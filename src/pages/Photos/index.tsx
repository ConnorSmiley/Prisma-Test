import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import { supabase } from "@/utils/supabase";
import PhotoThumb from "@/pages/Photos/PhotoThumb";

const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    py-60
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

const PhotosContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-black

    `}
`;

const PhotosStyle = styled.div`
  ${tw`
  w-full
  h-full
  mt-20
  relative

   `}
`;

const GridWidth = styled.div`
  ${tw`
     justify-center
 
    `}
`;

const MainGrid = styled.div`
  ${tw`
    grid
    grid-cols-1
    gap-4
    place-items-center
    justify-center   
    
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-5
    
    `}
`;

const PictureContainer = styled.div`
  ${tw`
    // aspect-w-16
    // aspect-h-12
    h-full
    w-full
    
    `}
`;


export interface IDesignProps {
  pic: any;
  data: any;
  idx: number;
  slider: boolean;
  pics: any;
  fullPics: any;
}

const Photos: React.FC<IDesignProps> = ({ pic, fullPics }) => {

  return (
    <>
      <Navbar />

      <PhotosContainer>

        <PhotosStyle>
          <Background>
            <GlowBoxPurple />
            <GlowBoxPink />
          </Background>

          <GridWidth>
            <MainGrid>

              {[...pic].map((pics: any, idx: any) => (
                <PhotoThumb pics={pics} fullPics={fullPics} key={idx}
                />
              ))}

            </MainGrid>
          </GridWidth>
        </PhotosStyle>
      </PhotosContainer>
    </>
  );
};

export default Photos;

export const getStaticProps = async () => {
  const { data: pic } = await supabase.from("PhotographyThumbnails").select("*");
  const { data: fullPics } = await supabase.from("Photography").select("*");

  return {
    props: {
      pic,
      fullPics
    }
  };
};
