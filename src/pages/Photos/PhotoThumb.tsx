import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

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
  hover:bg-black
  hover:bg-opacity-70

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
}


const PhotoThumb: React.FC<IPhotoThumbProps> = ({ data, idx, setSlider, slider }) => {
  const handleClick = () => {
    setSlider(!slider);
  };


  return (
    <>

      <PhotoThumbContainer onClick={handleClick}>
        <PhotoImage src={data?.url} />
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
