import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { supabase } from "@/utils/supabase";
import Navbar from "@/components/Navbar";

const IdContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
    pt-20
    
    `}
`;

const IdStyle = styled.div`
  ${tw`
  w-full
  h-full
  flex
  justify-center
    
    `}
`;

const ModalContainer = styled.div`
  ${tw`
  grid
  gap-4
    h-96
    w-[80%]
    bg-black
    
    `}
`;

const Modal = styled.div`
  ${tw`
    h-80
    w-80
    bg-black
    
    `}
`;

export interface IidProps {
  post: any;
  data: any;
}

const DesignID: React.FC<IidProps> = ({ post }) => {
  console.log(post);


  const postArray = Array.from(post);


  return (
    <>
      <IdContainer>
        <Navbar />
        <IdStyle>
          <ModalContainer>

          </ModalContainer>

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



