import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SliderContainer = styled.div`
  ${tw`
    w-full
    h-full
    z-50
    fixed
    flex
    justify-center
    inset-y-24
    bg-black
    `}
`;

const SliderStyle = styled.div`
  ${tw`
    absolute
    h-[40rem]
    w-[60rem]
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
  setSlider:any
}

const Slider: React.FC<ISliderProps> = ({ data, setSlider }) => {

  return (
    <>
      <SliderContainer onClick={() => setSlider(false)}>
        <SliderStyle>

          <Image src={data.url} />

        </SliderStyle>
      </SliderContainer>
    </>
  );
};

export default Slider
