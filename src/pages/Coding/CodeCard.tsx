import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CodeCardContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    cursor-pointer
    overflow-hidden
    
    `}
`;

const CodeCardStyle = styled.div`
  ${tw`
  w-[60rem]
  h-[270px]
  flex
  
  border-b-2
  border-gray-500
  pb-8
  my-4
  
    `}
`;

const CardContainer = styled.div`
  ${tw`
  bg-black
  flex
  
    `}
`;

const CardStyle = styled.div`
  ${tw`
  bg-black
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

    sm:text-xl
    md:text-xl
    lg:text-lg
    xl:text-4xl
    `}
`;

const PictureContainer = styled.img`
  ${tw`
  h-full
  left-0
  object-contain
  p-2
  rounded-lg
  flex
  items-center
  justify-center
  aspect-h-1
  
  sm:w-40
  md:w-40
  lg:w-64
  xl:w-80
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

export interface ICodeCardProps {
  posts: any;

}

const CodeCard: React.FC<ICodeCardProps> = ({ posts }) => {

  return (
    <>
      <CodeCardContainer>
        <Link key={posts?.id} href={`Code/${posts?.id}`}>

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
