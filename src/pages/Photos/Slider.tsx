import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { supabase } from "@/utils/supabase";

const SliderContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  ${tw`
    w-full
    h-full
    z-50
    fixed
    flex
    justify-center
    inset-y-24
    `}
`;

const SliderStyle = styled.div`
  ${tw`
    absolute
    h-[40rem]
    w-[40rem]
    bg-black
    rounded-xl
    
    `}
`;

const Image = styled.img`
  ${tw`
    h-full
    w-full
    object-cover    
    
    `}
`;

export interface ISliderProps {
  url: any;
}

const Slider: React.FC<ISliderProps> = ({  url }) => {

  return (
    <>
      <SliderContainer>
        <SliderStyle>

          <Image src={url.url} />

        </SliderStyle>
      </SliderContainer>
    </>
  );
};


export default Slider

