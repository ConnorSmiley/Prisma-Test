import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CloudCardContainer = styled.div`
  :hover {opacity: 100%}

  ${tw`
    w-full
    flex
    justify-center
    cursor-pointer
    overflow-hidden
    opacity-100
    
    sm:opacity-70
    `}
`;

const CloudCardStyle = styled.div`
  ${tw`
  w-full
  h-auto
  flex
  flex-row
  pb-8
  
  sm:my-4
  sm:flex
  sm:flex-col
  md:flex-row
 
    `}
`;

const CardContainer = styled.div`
  ${tw`
  bg-black
  w-full
  h-full
  flex
  items-center
  
    `}
`;

const CardStyle = styled.div`
  ${tw`
  bg-black
  h-full
  w-full
  relative
  pl-2
  pt-2
  
    
    `}
`;

const Title = styled.header`
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  min-width: 0;
  word-break: keep-all;
  ${tw`
    text-white
    text-lg
    font-bold
    text-white
    flex
    tracking-wide
    leading-tight

    sm:pt-2
    sm:text-4xl
    sm:pr-4
    md:text-xl
    lg:text-lg
    xl:text-4xl
    `}
`;

const ContentContainer = styled.text`
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  min-width: 0;
  word-break: keep-all;

  ${tw`
    text-white
    pr-4
    flex
    text-sm
    tracking-wide
    leading-tight
    pt-4

    sm:pt-4
   sm:text-xl
   md:text-base
   lg:text-2xl
   `}
`;


const PictureContainer = styled.img`
  ${tw`
  left-0
  object-contain
  p-2
  rounded-lg
  aspect-h-1
  w-60
  
  sm:flex
  sm:flex-col
  md:w-60
  lg:w-80
  xl:w-96
    `}
`;


const Date = styled.div`
  ${tw`
    font-bold
    font-normal
    text-xs
    bottom-6
    text-white
    font-light
    tracking-wide
    
    sm:text-sm
    sm:mt-2
    sm:pb-0
    md:text-base
    lg:text-base
    lg:mt-1
    lg:pb-0
    lg:bottom-5
    xl:text-xl
    xl:font-light
    xl:bottom-4

    `}
`;

const ButtonContainer = styled.div`
  ${tw`
  absolute
  bottom-2
  right-2
   
    `}
`;

const ButtonClick = styled.div`
  ${tw`
  w-40
  h-8
  rounded-md
  font-bold
  uppercase
    flex
    items-center
    justify-evenly
    border
    border-2
    border-pink-500
    text-sm
    text-white
    hover:bg-pink-500
    
    hover:bg-pink-500
    cursor-pointer
    
    `}
`;

export interface IProps {
  posts: any;
}

const CloudCard: React.FC<IProps> = ({ posts }) => {

  return (
    <>
      <CloudCardContainer>
        <Link key={posts?.id} href={`Cloud/${posts?.id}`}>

          <CloudCardStyle>

            <CardContainer>
              <PictureContainer src={posts?.img} />
            </CardContainer>

            <CardStyle>
              <Date>
                {posts?.TimeStamp.slice(0, -16)}
              </Date>

              <Title>
                {posts?.title}
              </Title>
              <ContentContainer>
                {posts?.content}
              </ContentContainer>

            </CardStyle>

          </CloudCardStyle>
        </Link>

      </CloudCardContainer>
    </>
  );
};
export default CloudCard;

