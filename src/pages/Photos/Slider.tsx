import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import RightChev from "/public/circle-chevron-right-solid.svg";
import LeftChev from "/public/circle-chevron-left-solid.svg";


const SliderContainer = styled.div`
  ${tw`
    w-full
    h-full
    z-20
    flex
    justify-center
    items-center
    inset-x-0
    inset-y-0
    
    `}
`;

const SliderBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
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
    rounded-xl
    flex
    items-center
    justify-evenly
    z-50
    
    `}
`;

const CloseSlider = styled.div`
  ${tw`
  absolute
    w-screen
    h-screen
    
    `}
`;

const ImageSlider = styled.img`
  ${tw`
    h-full
    w-full
    object-contain
    `}
`;

const Right = styled(RightChev)`
!important;
  color: white;
  ${tw`
    h-20
    w-20
    z-50
    
    hover:cursor-pointer
    hover:text-gray-500
    
    `}
`;

const Left = styled(LeftChev)`
!important;
  color: white;
  ${tw`
    h-20
    w-20
    z-50
    
    hover:cursor-pointer
    hover:text-gray-500
    
    `}
`;

export interface ISliderProps {
  data: any;
  number: any;
  setSlider: any;
  pics: any;
  fullPics: any;

}

const Slider: React.FC<ISliderProps> = ({ setSlider, number, fullPics }) => {
  const [currImg, setCurrImg] = useState(number);
  console.log(currImg);

  const leftClick = () => {
    if (currImg > 0 && fullPics.length - 1) {
      setCurrImg(prev => (prev - 1));
    } else {
      return (setCurrImg(fullPics.length - 1));
    }
  };

  const rightClick = () => {
    if (currImg < fullPics.length - 1) {
      setCurrImg(prev => (prev + 1));
    } else {
      return (setCurrImg(0));
    }
  };

  return (
    <>
      <SliderContainer>
        <SliderBackground>
          <SliderStyle>

            <Left onClick={leftClick} />

              <ImageSlider src={fullPics[currImg]?.url} />
            <CloseSlider onClick={() => setSlider(false)}/>


            <Right onClick={rightClick} />

          </SliderStyle>
        </SliderBackground>
      </SliderContainer>
    </>
  );
};

export default Slider;

