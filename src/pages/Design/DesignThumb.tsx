import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";


const DesignThumbContainer = styled.div`
  :hover {
    background: rgba(0, 0, 0, 1)
  }
  :hover {
    opacity: 100%
  }


  ${tw`
    aspect-w-16
    aspect-h-12
    w-full
    h-full
    z-20
    opacity-100
    
    sm:opacity-60
    `}
`;

const Container = styled.div`
  ${tw`
    flex
    
    `}
`;

const DesignThumbStyle = styled.img`
  ${tw`
    object-cover

    hover:cursor-pointer
    hover:bg-white
    `}
`;

const HoverContainer = styled.div`
  opacity: 0%;

  :hover {
    opacity: 100%
  }

  ${tw`
  h-auto
  w-auto
  flex
  items-center
  justify-center
  flex-col
  z-20
  
  hover:cursor-pointer

    `}
`;


const HoverThumbTitle = styled.div`
  box-shadow: 0px 0px 10px 5px #fe017a;
  text-shadow:
    /* White glow */
          0 0 7px #fff,
          0 0 10px #fff,
          0 0 21px #fff,
            /* Green glow */
          0 0 42px #fff,
          0 0 82px #fff,
          0 0 92px #fff,
          0 0 102px #fff,
          0 0 151px #fff;
}

  ${tw`
  text-5xl
  font-extrabold
  mb-4
  text-black
  border
  border-[#fe017a]
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
  text-black
  
  sm:text-xl
  md:text-xl
  lg:text-2xl
  xl:text-3xl
    
    `}
`;

export interface IDesignThumbProps {
  posts: unknown;
}

const DesignThumb: React.FC<IDesignThumbProps> = ({ posts }) => {

  return (
    <>
      <Link key={posts?.id} href={`Design/${posts?.Company}`}>

        <DesignThumbContainer>

          <DesignThumbStyle src={posts?.url} />

          <HoverContainer>
            <HoverThumbTitle>
              {posts?.Company}
            </HoverThumbTitle>
            <HoverThumbDescription>
              {posts?.ThumbDescription}
            </HoverThumbDescription>
          </HoverContainer>

        </DesignThumbContainer>
      </Link>

    </>
  );
};

export default DesignThumb;

