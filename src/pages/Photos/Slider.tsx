import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from 'next/image'

const SliderContainer = styled.div`
  ${tw`
    w-full
    h-full
    z-50
    flex
    justify-center
    items-center
    inset-x-0
    inset-y-0
    
    `}
`;

const SliderBackground = styled.div`
  background-color: rgba(0, 0, 0, 9);
  ${tw`
      fixed
      top-1/2
      left-1/2 
      -translate-y-1/2 
      -translate-x-1/2
      w-full
      h-full
      flex
      justify-center
      items-center

    `}
`;

const SliderStyle = styled.div`
  ${tw`
    absolute
    h-[40rem]
    w-[60rem]
    rounded-xl
    
    `}
`;

const ImageSlider = styled.img`
  ${tw`
    h-full
    w-full
    object-contain
    `}
`;

export interface ISliderProps {
  data: any;
  number: any;
  setSlider: any;
  pics: any;
}

const Slider: React.FC<ISliderProps> = ({ number, setSlider, pics }) => {

  return (
    <>
      <SliderContainer onClick={() => setSlider(false)}>
        <SliderBackground>
          <SliderStyle>

            <ImageSlider src={pics[number]?.url} />
            {/*<Image src={pics[number]?.url} layout='fill' loading="eager"/>*/}

          </SliderStyle>
        </SliderBackground>
      </SliderContainer>
    </>
  );
};

export default Slider;
