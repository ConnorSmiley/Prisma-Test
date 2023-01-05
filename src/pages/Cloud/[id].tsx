import React from "react";
import { supabase } from "@/utils/supabase";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import tw from "twin.macro";

export interface IProps {
  blogPost: any;
  post: any;
}


const IdContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    `}
`;

const IdStyles = styled.div`
  ${tw`
    mt-20
    h-full
    w-[98%]
    flex
    items-center
    px-2
    flex-col
    `}
`;

const Title = styled.div`
  ${tw`
  text-7xl
  uppercase
  font-extrabold
  py-8
    
    `}
`;

const Content = styled.div`
  ${tw`
  text-4xl
  font-medium
    
    `}
`;


const CloudPosts: React.FC<IProps> = ({ post }) => {

  return (
    <>
      <IdContainer>
        <Navbar />
        <IdStyles>
          <Title>
            {post?.title}
          </Title>
          <Content>
            {post?.content}
          </Content>
        </IdStyles>
      </IdContainer>
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
