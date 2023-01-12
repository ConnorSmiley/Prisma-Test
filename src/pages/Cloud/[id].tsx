import React from "react";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import tw from "twin.macro";
import Footer from "@/components/Footer";
import { LinkedinShareButton } from "react-share";
import { LinkedinIcon } from "react-share";
import { FacebookIcon } from "react-share";
import { FacebookShareButton } from "react-share";
import { TwitterIcon } from "react-share";
import { TwitterShareButton } from "react-share";
import { supabase } from "@/utils/supabase";

export interface IProps {
  blogPost: any;
  post: any;
}


const IdContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
    flex
    pb-10
    overflow-hidden
    
    `}
`;

const IdStyles = styled.div`
  ${tw`
  relative
    mt-20
    h-full
    w-full
    flex
    flex-col
    items-center
    `}
`;

const BlogContainer = styled.div`
  ${tw`
  flex
  w-full
  flex-col
  items-center
  relative
  
    `}
`;

const Heading = styled.div`
  ${tw`
  flex
  flex-col
    pb-2
    w-[80%]
    
   
   sm:flex-col
    sm:w-[80%]
    md:w-[80%]
    md:flex-row
    lg:w-[80%]
    xl:flex
    xl:items-center
    xl:justify-start
    xl:w-[80%]
    `}
`;

const Heading2 = styled.div`
    ${tw`
    flex
    flex-col
    w-full
    
    sm:flex
    md:flex
    md:flex-col
    `}
`

const PictureContainer = styled.div`
  ${tw`
    aspect-h-1
    w-[100%]
    mr-8
    
    md:w-[40%]
    lg:w-[30%]
    xl:w-[35%]
    `}
`;

const Picture = styled.img`
  ${tw`
    
    `}
`;

const Title = styled.header`
  ${tw`
  text-2xl
  uppercase
  font-extrabold
  text-white
  pt-2
  
  
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

const Title1 = styled.div`

  ${tw`
    text-4xl
    font-extrabold
    pb-6
    tracking-tight
    italic
    
    sm:text-4xl
    md:pb-8
    md:text-5xl
    lg:text-5xl
    xl:text-6xl
    `}
`;

const Title2 = styled.div`
  ${tw`
        text-6xl
    font-extrabold
    pb-10
    pt-4
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
    text-base
    font-light
    flex
    self-end
    
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
  flex
  flex-col
  justify-center
  w-[80%]
  text-xl
  tracking-tight
  text-white
  pt-4
  pb-6
  px-6
  mt-2
  
  rounded-md
  
  sm:pt-6
  sm:text-lg
  sm:w-[80%]
  md:w-[80%]
  lg:w-[80%]
  xl:w-[80%]
  xl:pb-10
  xl:pt-10
  xl:mt-2
    
    `}
`;

const CloudPosts: React.FC<IProps> = ({ post }) => {

  return (
    <>
      <IdContainer>
        <Navbar />

        <BlogContainer>

            <IdStyles>

              <Heading>
                <PictureContainer>
                  <Picture src={post?.img} />
                </PictureContainer>
                <Heading2>
                  <Title>
                    {post?.title}
                  </Title>
                  <Date>
                    {post?.TimeStamp.slice(0, -16)}
                  </Date>
                </Heading2>
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
            </IdStyles>

        </BlogContainer>

      </IdContainer>
      <Footer />;
    </>
  )
    ;
};


export default CloudPosts;


export const getStaticPaths = async () => {
  const { data: posts } = await supabase.from("CloudBlogPosts").select("id");

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
  const { data: post } = await supabase.from("CloudBlogPosts").select("*").eq("id", id).single();

  return {
    props: {
      post
    }
  };
};
