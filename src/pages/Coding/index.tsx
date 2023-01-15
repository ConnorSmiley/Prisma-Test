import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/pages/Coding/Projects";
import CodeBlog from "@/pages/Coding/Blog";
import { supabase } from "@/utils/supabase";
import CodeCard from "@/pages/Coding/CodeCard";

const CodingContainer = styled.div`
  ${tw`
    w-screen
    h-full
    pt-10
    bg-black
 
    `}
`;

const CodingStyle = styled.div`
  ${tw`
    h-full
    w-full
    z-50
    
    `}
`;

const Background = styled.div`
  ${tw`
    absolute
    flex
    w-full
    h-full
    justify-evenly
    
    `}
`;
const GlowBoxPurple = styled.div`
  //x-offset y-offset blur spread
  box-shadow: 0px 0px 10000px 200px rgba(148, 97, 255, 1);
  ${tw`
  opacity-40
    `}
`;

const GlowBoxPink = styled.div`
  box-shadow: 0px 0px 1000px 200px #fe017a;
  ${tw`
  opacity-40
    `}
`;

const Blog = styled.div`
  ${tw`
    w-full
    h-full
    relative
    
    `}
`;

export interface ICodingProps {
  Projects: any;
  Blog: any;
  codePics: any;
  codeBlog: any;
}

const Coding: React.FC<ICodingProps> = ({ codePics, codeBlog }) => {

  const filterBlog = [...codeBlog].reverse().map((posts: any) => (
    <>
      <CodeCard posts={posts} />
    </>
  ));

  return (
    <>
      <Navbar />

      <CodingContainer>

        <CodingStyle>

          <CodingStyle>
            <Projects codePics={codePics} />
          </CodingStyle>

          <Background>
            <GlowBoxPurple />
            <GlowBoxPink />
          </Background>

          <Blog>

            {filterBlog}

          </Blog>

        </CodingStyle>

      </CodingContainer>
      <Footer />
    </>
  );
};

export default Coding;

export const getStaticProps = async () => {
  const { data: codePics } = await supabase.from("CodeThumbnails").select("*");
  const { data: codeBlog } = await supabase.from("CodeBlog").select("*");
  return {
    props: {
      codePics,
      codeBlog
    }
  };
};

