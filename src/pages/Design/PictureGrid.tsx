import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PictureGridContainer = styled.div`
  ${tw`
    h-full
    w-full
    
    `}
`;

const PictureStyles = styled.div`
  ${tw`
  w-full
  h-full
    
    `}
`;

const PictureGridStyle = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    
    `}
`;

const Picture = styled.img`
  
  ${tw`
  aspect-w-1
  w-80
    `}
`;

export interface IPictureGridProps {
  data: any;
}

const PictureGrid: React.FC<IPictureGridProps> = ({ data }) => {

  return (
    <>
      <PictureGridContainer>
        <PictureStyles>
          <PictureGridStyle>

            <Picture src={data?.url} />

          </PictureGridStyle>
        </PictureStyles>
      </PictureGridContainer>
    </>
  );
};

export default PictureGrid;
