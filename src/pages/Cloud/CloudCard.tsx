import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CloudCardContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    cursor-pointer
    overflow-hidden
    
    `}
`;

const CloudCardStyle = styled.div`
  ${tw`
  w-full
  h-auto
  flex
  flex-row
  border-b-2
  border-gray-500
  pb-8
  my-4
  
  sm:flex
  sm:flex-col
  md:flex-row
 
    `}
`;

const CardContainer = styled.div`
  ${tw`
  bg-black
  w-auto
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
  
  hover:opacity-80
    
    `}
`;

const Title = styled.header`
  ${tw`
    text-white
    text-xl
    font-bold
    text-white
    flex
    pt-2
    tracking-wide

    sm:text-4xl
    sm:pr-4
    md:text-xl
    lg:text-lg
    xl:text-4xl
    `}
`;

const PictureContainer = styled.img`
  ${tw`
  
  left-0
  
  object-contain
  p-2
  rounded-lg
  aspect-h-1
  
  sm:flex
  sm:flex-col
  md:w-60
  lg:w-80
  xl:w-96
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
  flex
    text-white
    pt-4
    pr-4
    flex
    text-xl
    tracking-wide

   sm:text-xl
   md:text-base
   lg:text-2xl
   `}
`;

const Date = styled.div`
  ${tw`
    font-bold
    font-normal
    text-lg
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

