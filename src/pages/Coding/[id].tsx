import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";

const IdContainer = styled.div`
  ${tw`
    w-screen
    h-full
    flex
    
    `}
`;

const IdStyle = styled.div`
  ${tw`
  relative
    mt-20
    h-full
    flex
    flex-col
    items-center
    px-2
    pr-40
    pl-40
    
    md:pl-10
    md:w-[64rem]
    
    `}
`;

const BlogContainer = styled.div`
  ${tw`
      flex
  flex-col
  items-center
  relative
    
    `}
`;

const Heading = styled.div`
  ${tw`
    flex
    items-center
    justify-start
    w-full
    pb-4
    border-b-2
    border-white
    relative
    
    `}
`;


const PictureContainer = styled.div`
  ${tw`
    aspect-h-1
    w-[20rem]
    mr-8
    
    `}
`;


const Title = styled.header`
  ${tw`
  text-7xl
  uppercase
  font-extrabold
  py-8
  w-[40rem]
  text-white
  
  
  md:text-6xl
    
    `}
`;


const Picture = styled.img`
  ${tw`
    
    `}
`;


const Title1 = styled.div`

  ${tw`
    text-6xl
    font-extrabold
    pb-8
    tracking-tight
    italic
    
    `}
`;

const LinkMain = styled.div`
  ${tw`
    w-full
    flex
    items-center
    justify-evenly
    
    `}
`;

const LinksContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-evenly
    w-[30rem]
    
    `}
`;

const Date = styled.div`
  ${tw`
    text-white
    absolute
    bottom-8
    right-0
    text-xl
    font-light
    
    md:text-base
    `}
`;

const LinkedInContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  ${tw`
    h-12
    w-32
    flex
    flex-row
    items-center
    justify-between
    pr-4
    pl-3
    rounded-xl
    border-2
    border-gray-500
    text-xl
    font-bold
    text-white
    
    hover:bg-gray-500
    `}
`;

const LinkedInStyles = styled.div`
  ${tw`
    pt-2
    flex
    justify-evenly
    w-full
    
    `}
`;

const Content = styled.text`
  white-space: pre-line;
  background: rgba(0, 0, 0, 0.5);
  ${tw`
  text-2xl
  tracking-tight
  text-white
  pt-10
  pb-10
  px-10
  mt-2
  
  rounded-md
    
    `}
`;


export interface IIdProps {

}

const CodePosts: React.FC<IIdProps> = () => {

  return (
    <>
      <IdContainer>
        <Navbar />

        <BlogContainer>
          <IdStyle>
            <Heading>
              <PictureContainer>
                <Picture />
              </PictureContainer>
              <Title>

              </Title>
              <Date>

              </Date>
            </Heading>

            <LinkMain>
             <LinksContainer>




             </LinksContainer>
            </LinkMain>




          </IdStyle>
        </BlogContainer>

      </IdContainer>
    </>
  );
};

export default CodePosts;
