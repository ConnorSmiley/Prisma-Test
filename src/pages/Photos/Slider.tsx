import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from 'next/image'



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


export interface ISliderProps {
  data: any;
}

const Slider: React.FC<ISliderProps> = ({ data }) => {
  console.log(data.url)

  return (
    <>
      <SliderContainer>
        <SliderStyle>

          <Image src={data.id} width={80} height={80} />

        </SliderStyle>
      </SliderContainer>
    </>
  );
};

export default Slider
