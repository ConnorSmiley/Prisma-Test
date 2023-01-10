import React from "react";
import styled from "styled-components";
import tw from "twin.macro";



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
    object-contain
    
    `}
`


export interface ISliderProps {
  data: any;
  number:any
}

const Slider: React.FC<ISliderProps> = ({ data, number }) => {
  console.log(data.url)

  return (
    <>
      <SliderContainer>
        <SliderStyle>

          <Image src={data.url} />

        </SliderStyle>
      </SliderContainer>
    </>
  );
};

export default Slider
