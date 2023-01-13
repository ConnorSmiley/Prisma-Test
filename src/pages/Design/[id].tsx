import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { supabase } from "@/utils/supabase";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const IdContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`;

const IdStyle = styled.div`
  ${tw`
    
    `}
`;

export interface IidProps {
  post: any;
}

const DesignID: React.FC<IidProps> = ({ post }) => {
  console.log(post)

  return (
    <>
      <IdContainer>
        <Navbar />
        <IdStyle>

          <Link href={`Design/${post?.id}`}>
            <IdContainer>
            {post?.img}

            </IdContainer>
          </Link>

        </IdStyle>
      </IdContainer>
    </>
  );
};


export default DesignID;

export const getStaticPaths = async () => {
  const { data: posts } = await supabase.from("DesignThumbnails").select("id");

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
  const { data: post } = await supabase.from("DesignThumbnails").select("*").eq("id", id).single();

  return {
    props: {
      post
    }
  };
};


