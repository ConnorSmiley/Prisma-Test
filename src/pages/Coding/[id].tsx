import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import Footer from "@/components/Footer";
import { supabase } from "@/utils/supabase";


const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    py-60
    z-10
    overflow-hidden
    
    `}
`;
const GlowBoxPurple = styled.div`
  //x-offset y-offset blur spread
  box-shadow: 0px 0px 10000px 200px rgba(148, 97, 255, 1);
  ${tw`
  opacity-50

    `}
`;

const GlowBoxPink = styled.div`
  box-shadow: 0px 0px 1000px 200px #fe017a;
  ${tw`
  opacity-50
    `}
`;


const IdContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    pb-10
    z-10
    bg-black
    overflow-hidden
    
    `}
`;

const IdStyle = styled.div`
  ${tw`
  relative
    mt-20
    h-full
    w-full
    flex
    flex-col
    items-center
    z-10
    
    `}
`;

const BlogContainer = styled.div`
  ${tw`
  flex
  w-full
  flex-col
  items-center
  relative
  z-10
    
    `}
`;

const Heading = styled.div`
  ${tw`
  flex
  flex-col
    pb-2
    w-[90%]
    z-30
    
   sm:flex-col
    sm:w-[90%]
    md:w-[90%]
    md:flex-row
    lg:w-[90%]
    xl:flex
    xl:items-center
    xl:justify-start
    xl:w-[90%]
    
    `}
`;


const PictureContainer = styled.div`
  ${tw`
    aspect-h-1
    w-[100%]
    mr-8
    z-50
    
    md:w-[40%]
    lg:w-[30%]
    xl:w-[35%]
    
    `}
`;

const Sharebutton = styled.div`
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
    
    hover:bg-gray-500    `}
`;


const Title = styled.header`
  ${tw`
  text-2xl
  uppercase
  font-extrabold
  text-white
  pt-2
  z-50
  
  sm:text-4xl
  sm:pt-6
  sm:pb-2
  md:w-[100%]
  md:text-4xl
  lg:text-5xl
  
  xl:text-7xl
  xl:font-extrabold
  xl:py-8
  xl:w-[90%]
    
    `}
`;


const Picture = styled.img`
  ${tw`
    
    `}
`;


const Title1 = styled.div`

  ${tw`
    text-4xl
    font-extrabold
    pb-6
    tracking-tight
    italic
    z-50
    
    sm:text-4xl
    md:pb-8
    md:text-5xl
    lg:text-5xl
    xl:text-6xl
    
    `}
`;

const LinkMain = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    z-50
    
    sm:items-center
    sm:justify-evenly
    
    `}
`;

const LinksContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-evenly
    w-full
    z-50
    
    sm:flex-row
    sm:w-[30rem]
    
    `}
`;

const Date = styled.div`
  ${tw`
    text-white
    text-base
    font-light
    flex
    self-end
    z-50
    
    sm:text-base
    md:text-lg
    lg:text-xl
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
    justify-evenly
    pr-2
    pl-1
    rounded-xl
    border-2
    border-gray-500
    text-xl
    font-bold
    text-white
    z-50
    
    hover:bg-gray-500
    `}
`;

const LinkedInStyles = styled.div`
  ${tw`
    pt-2
    flex
    justify-evenly
    w-full
    z-50
    
    `}
`;

const Content = styled.text`
  white-space: pre-line;
  background: rgba(0, 0, 0, 0.5);
  ${tw`
  flex
  flex-col
  justify-center
  w-[98%]
  text-base
  tracking-tight
  text-white
  pt-4
  pb-6
  px-4
  mt-2
  z-50
  
  rounded-md
  
  sm:pt-6
  sm:text-lg
  sm:w-[98%]
  sm:text-xl
  md:w-[98%]
  md:text-xl
  lg:w-[98%]
  lg:text-2xl
  xl:w-[98%]
  xl:pb-10
  xl:pt-10
  xl:mt-2
  xl:text-2xl
    
    `}
`;


export interface IdProps {
  post: any;
}

const CodePosts: React.FC<IdProps> = ({post}) => {

  return (
    <>
      <IdContainer>
        <Navbar />

        <BlogContainer>
          <IdStyle>

            <Heading>
              <PictureContainer>
                <Picture src={post?.img} />
              </PictureContainer>
              <Title>
                {post?.title}
              </Title>
              <Date>
                {/*{post?.TimeStamp.slice(0, -16)}*/}
              </Date>
            </Heading>


            <LinkMain>
              <LinksContainer>
                <LinkedInStyles>
                  <LinkedinShareButton url={`www.localhost:3000/Cloud/${post?.id}`} title={"Connor Smiley's Blog"}>
                    <LinkedInContainer>
                      <LinkedinIcon size={28} iconFillColor={"white"} borderRadius={10} />
                      Share
                    </LinkedInContainer>
                  </LinkedinShareButton>
                </LinkedInStyles>

                <LinksContainer>
                  <LinkedInStyles>
                    <FacebookShareButton url={`www.localhost:3000/Cloud/${post?.id}`} title={"Connor Smiley's Blog"}>
                      <LinkedInContainer>
                        <FacebookIcon size={28} iconFillColor={"white"} borderRadius={10} />
                        Share
                      </LinkedInContainer>
                    </FacebookShareButton>
                  </LinkedInStyles>
                </LinksContainer>

                <LinksContainer>
                  <LinkedInStyles>
                    <TwitterShareButton url={`www.localhost:3000/Cloud/${post?.id}`} title={"Connor Smiley's Blog"}>
                      <LinkedInContainer>
                        <TwitterIcon size={28} iconFillColor={"white"} borderRadius={10} />
                        Tweet
                      </LinkedInContainer>
                    </TwitterShareButton>
                  </LinkedInStyles>
                </LinksContainer>
              </LinksContainer>
            </LinkMain>


            <Content>
              <Title1>
                {post?.title1}
              </Title1>

              {post?.content}

            </Content>

            <Background>
              <GlowBoxPurple />
              <GlowBoxPink />
            </Background>

          </IdStyle>

        </BlogContainer>

      </IdContainer>
      <Footer />;
    </>
  )
    ;
};

export default CodePosts;


export const getStaticPaths = async () => {
  const { data: posts } = await supabase.from("CodeBlog").select("id");

  const paths = posts?.map(({ id }) => ({
    params: {
      id: id?.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: post } = await supabase.from("CodeBlog").select("*").eq("id", id).single();

  return {
    props: {
      post
    }
  };
};











































