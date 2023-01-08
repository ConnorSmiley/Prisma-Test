import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import { supabase } from "@/utils/supabase";
import PhotoThumb from "@/pages/Photos/PhotoThumb";
import Slider from "@/pages/Photos/Slider";

const PhotosContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900

    `}
`;

const PhotosStyle = styled.div`
  ${tw`
  w-full
  h-full
  pt-20

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

export const getStaticProps = async () => {
  const { data: pic } = await supabase.from("PhotographyThumbnails").select("*");
  return {
    props: {
      pic
    }
  };
};

export interface IDesignProps {
  pic: any;
  data: any;
  idx: number;
  slider: boolean;
}

const Photos: React.FC<IDesignProps> = ({ pic }) => {
  const [slider, setSlider] = useState<boolean>(false);
  const [count, setCount] = useState<any>();

  return (
    <>

      <PhotosContainer>

        <Navbar />
        <PhotosStyle>
          <GridWidth>
            <MainGrid>

              {pic.map((data: any, idx: any) => (
                <PhotoThumb data={data}
                            slider={slider}
                            setSlider={setSlider}
                            setCount={setCount}
                            count={count}
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

