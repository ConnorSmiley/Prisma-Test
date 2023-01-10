import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CodeCard from "@/pages/Coding/CodeCard";

const BlogContainer = styled.div`
  ${tw`
    w-screen
    h-full
    
    `}
`;

const BlogStyle = styled.div`
  ${tw`
    h-full
    w-full
    flex
    justify-center
    
    `}
`;

export interface IBlogProps {
  codeBlog: any;

}

const CodeBlog: React.FC<IBlogProps> = ({ codeBlog }) => {

  const mappedBlog = codeBlog.reverse().map((posts :any)  => (
    <>
      <CodeCard posts={posts}/>
    </>
  ))

  return (
    <>
      <BlogContainer>
        <BlogStyle>
          {mappedBlog}
        </BlogStyle>
      </BlogContainer>
    </>
  );
};

export default CodeBlog;

