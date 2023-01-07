import React from "react";
import { supabase } from "@/utils/supabase";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import tw from "twin.macro";
import Footer from "@/components/Footer";

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
  
    mt-20
    h-full
    flex
    flex-col
    items-center
    px-2
    pr-40
    pl-40
    `}
`;

const BlogContainer = styled.div`
  ${tw`
  flex
  flex-col
  items-center
    
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
    border-black
    
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
    
    `}
`;

const Content = styled.text`
  white-space: pre-line;
  ${tw`
  pt-10
  text-2xl
  tracking-tight
    
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
          </Heading>

            <Content>
              {post?.content}
            </Content>
          </IdStyles>
        </BlogContainer>

      </IdContainer>
      <Footer />
    </>
  );
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
