import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const DesignThumbContainer = styled.div`
  ${tw`
    aspect-w-16
    aspect-h-12
    w-full
    h-full
    
    `}
`;

const DesignThumbStyle = styled.img`
  ${tw`
    object-cover

    hover:cursor-pointer
    hover:bg-black
    `}
`;

const HoverContainer = styled.div`
  :hover{opacity: 90%}
  :hover{background: rgba(0,0,0,0.7)}
  ${tw`
  h-auto
  w-auto
  opacity-0
  flex
  items-center
  justify-center
  flex-col
  
  hover:cursor-pointer

    `}
`;


const HoverThumbTitle = styled.div`
  ${tw`
  text-5xl
  font-extrabold
  mb-4
  text-white
  border
  border-white
  border-4
  p-6
  rounded-md
  
  sm:text-3xl
  md:text-3xl
  lg:text-4xl
  xl:text-5xl
    `}
`;

const HoverThumbDescription = styled.div`
  ${tw`
  text-white
  text-3xl
  font-light
  
  sm:text-xl
  md:text-xl
  lg:text-2xl
  xl:text-3xl
    
    `}
`;

export interface IDesignThumbProps {
  data: any;
}

const DesignThumb: React.FC<IDesignThumbProps> = ({ data }) => {

  return (
    <>
      <DesignThumbContainer>

        <DesignThumbStyle src={data?.url} />

          <HoverContainer>
            <HoverThumbTitle>
              {data?.Company}
            </HoverThumbTitle>
            <HoverThumbDescription>
              {data?.ThumbDescription}
            </HoverThumbDescription>
          </HoverContainer>

      </DesignThumbContainer>
    </>
  );
};

export default DesignThumb;
