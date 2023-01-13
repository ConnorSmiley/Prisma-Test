import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "@/pages/Photos/Slider";
import { supabase } from "@/utils/supabase";

const PhotoThumbContainer = styled.div`
  ${tw`
    aspect-w-8
    aspect-h-8
    w-full
    h-full
    
    `}
`;

const PhotoImage = styled.img`
  ${tw`
    object-cover

    hover:cursor-pointer
    hover:bg-black
    `}
`;

const HoverContainer = styled.div`
  :hover {
    opacity: 90%
  }

  :hover {
    background: rgba(0, 0, 0, 0.7)
  }

  ${tw`
  h-auto
  w-auto
  opacity-0
  flex
  items-center
  justify-center
  flex-col
  
  hover:cursor-pointer
  hover:opacity-100

    `}
`;

const HoverThumbTitle = styled.div`
  ${tw`
  text-sm
  text-white
  font-bold
  mb-4
  flex
  flex-col
  items-center
  justify-center
  border
  border-4
  border-white
  px-10
  py-4
  rounded-md
  
  sm:text-3xl
  md:text-3xl
  lg:text-4xl
  xl:text-3xl
    `}
`;

export interface IPhotoThumbProps {
  data: any;
  idx: number;
  slider: boolean;
  setSlider: boolean;
  number: any;
  pictures: any;
  pics: any;
  fullPics: any;
}

const PhotoThumb: React.FC<IPhotoThumbProps> = ({ pics, fullPics }) => {
  const [slider, setSlider] = useState<boolean>(false);
  const [number, setNumber] = useState();

  const handleClick = () => {
    setSlider(!slider);
    setNumber(pics?.id - 1);
  };

  return (
    <>
      {slider &&
        <Slider fullPics={fullPics} pics={pics} number={number} setSlider={setSlider} />}

      <PhotoThumbContainer onClick={handleClick}>

        <PhotoImage src={pics?.url} />

        <HoverContainer>
          <HoverThumbTitle>
            Click
          </HoverThumbTitle>
        </HoverContainer>
      </PhotoThumbContainer>

    </>
  );
};

export default PhotoThumb;

