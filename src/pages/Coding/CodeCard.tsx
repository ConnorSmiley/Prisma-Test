import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CodeCardContainer = styled.div`
  :hover {opacity: 100%}

  ${tw`
   w-full
    flex
    justify-center
    cursor-pointer
    overflow-hidden
    opacity-100
    px-2
    
    sm:opacity-70
    
    `}
`;

const CodeCardStyle = styled.div`
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
  w-60
  
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
    pt-2
    pr-4
    flex
    text-base
    tracking-wide
    leading-tight

   sm:text-xl
   md:text-base
   lg:text-2xl

   `}
`;

const Date = styled.div`
  ${tw`
    font-bold
    font-normal
    text-sm
    bottom-6
    text-white
    font-light
    tracking-wide
    pt-2
    
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

export interface ICodeCardProps {
  posts: any;

}

const CodeCard: React.FC<ICodeCardProps> = ({ posts }) => {

  return (
    <>
      <CodeCardContainer>
        <Link key={posts?.id} href={`Coding/${posts?.id}`}>

          <CodeCardStyle>

            <CardContainer>
              <PictureContainer src={posts?.img} />
            </CardContainer>

            <CardStyle>
              <Date>
                {posts?.timestamp.slice(0, -16)}
              </Date>

              <Title>
                {posts?.title}
              </Title>
              <ContentContainer>
                {posts?.content}
              </ContentContainer>

            </CardStyle>

          </CodeCardStyle>
        </Link>

      </CodeCardContainer>
    </>
  );
};

export default CodeCard;
