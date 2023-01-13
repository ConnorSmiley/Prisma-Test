import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import CloudCard from "@/pages/Cloud/CloudCard";
import { supabase } from "@/utils/supabase";
import Footer from "@/components/Footer";

const CloudContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`;

const DarkBackground = styled.div`
  ${tw`
    pt-16
    px-2
    flex
    justify-center
    
    sm:px-20
    sm:pt-4
    md:pt-20
    
    `}
`;

const CloudStyle = styled.div`
  ${tw`
  h-auto
  m-5
  overflow-hidden
  flex
  flex-col
  justify-center
    
    `}
`;

export interface ICloudProps {
  blogPost: any;
  index: any
}


const Index: React.FC<ICloudProps> = ({ blogPost }) => {

  const filteredBlog = [...blogPost]?.reverse().map((posts: any, index :any) => (
    <>
        <CloudCard key={posts.id} posts={posts} index={index}/>
    </>
  ));

  return (
    <>
      <CloudContainer>
        <Navbar />
        <DarkBackground>

          <CloudStyle>
            {filteredBlog}
          </CloudStyle>

        </DarkBackground>
        <Footer />
      </CloudContainer>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const { data: blogPost } = await supabase.from("CloudBlogPosts").select("*");
  return {
    props: {
      blogPost
    }
  };
};
