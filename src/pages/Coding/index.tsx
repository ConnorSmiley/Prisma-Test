import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/pages/Coding/Projects";
import { supabase } from "@/utils/supabase";
import Blog from "@/pages/Coding/Blog";
import CodePosts from "@/pages/Coding/[id]";

const CodingContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`;

const CodingStyle = styled.div`
  ${tw`
    h-full
    w-full
    flex
    justify-center
    items-center
    
    `}
`;

export interface ICodingProps {
  Projects: any;
  Blog: any;
  codePics:any
}


const Coding: React.FC<ICodingProps> = ({codePics}) => {

  return (
    <>
      <Navbar />
      <CodingContainer>
        <CodingStyle>
          <Projects codePics={codePics}/>
        </CodingStyle>

        <CodePosts />

      </CodingContainer>
      <Footer />
    </>
  );
};

export default Coding;


export const getStaticProps = async () => {
  const { data: codePics } = await supabase.from("CodeThumbnails").select("*");
  return {
    props: {
      codePics
    }
  };
};

