import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import CloudCard from "@/pages/Cloud/CloudCard";
import { supabase } from "@/utils/supabase";
import Footer from "@/components/Footer";


const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    pt-60
    
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


const CloudContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-black
    pb-20
 
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
  pt-4
  h-auto
  flex
  flex-col
  justify-center
  z-30
    
    `}
`;

export interface ICloudProps {
  blogPost: any;
  index: any
}


const Index: React.FC<ICloudProps> = ({ blogPost }) => {

  const filteredBlog = [...blogPost]?.reverse().map((posts: any, index :any) => (
    <>
      {/*<Link key={blogPost.id} href={`/${blogPost.id}`} >*/}
        <CloudCard key={posts.id} posts={posts} index={index}/>
      {/*</Link>*/}
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
          <Background>
            <GlowBoxPurple />
            <GlowBoxPink />
          </Background>

        </DarkBackground>
      </CloudContainer>
      <Footer />

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
