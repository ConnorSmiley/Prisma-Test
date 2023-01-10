import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/pages/Coding/Projects";
import CodeBlog from "@/pages/Coding/Blog";
import { supabase } from "@/utils/supabase";

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
  codeBlog:any
}


const Coding: React.FC<ICodingProps> = ({codePics, codeBlog }) => {

  return (
    <>
      <Navbar />
      <CodingContainer>
        <CodingStyle>
          <Projects codePics={codePics}/>
        </CodingStyle>

        <CodeBlog codeBlog={codeBlog}/>

      </CodingContainer>
      <Footer />
    </>
  );
};

export default Coding;


export const getStaticProps = async () => {
  const { data: codePics } = await supabase.from("CodeThumbnails" ).select("*");
  const {data : codeBlog } = await supabase.from ("CodeBlog" ).select( "*")
  return {
    props: {
      codePics,
      codeBlog
    }
  };
};

