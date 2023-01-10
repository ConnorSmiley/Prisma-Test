import React from "react";
import { supabase } from "@/utils/supabase";
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
    pb-20
    
    `}
`;

const IdStyles = styled.div`
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

const Picture = styled.img`
  ${tw`
    
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

const Title1 = styled.div`

  ${tw`
    text-6xl
    font-extrabold
    pb-8
    tracking-tight
    italic
    
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
`

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
              <Title>
                {post?.title}
              </Title>
              <Date>
                {post.TimeStamp.slice(0, -16)}
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

export const getStaticPaths = async () => {
  const { data: posts } = await supabase.from("BlogPosts").select("id");

  const paths = posts.map(({ id }) => ({
    params: {
      id: id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: post } = await supabase.from("BlogPosts").select("*").eq("id", id).single();

  return {
    props: {
      post
    }
  };
};

export default CloudPosts;
