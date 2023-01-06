import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SidebarNavContainer = styled.div`
  ${tw`
    w-full
    flex
    
    lg:w-60 
    xl:w-80
    `}
`;

const SidebarNavStyle = styled.div`
  ${tw`
  flex
    place-items-end
    
    hidden lg:flex
    `}
`;

const SidebarNavText = styled.div`
  ${tw`
  flex
    text-white
    text-4xl
    font-thin
    justify-center
 
    `}
`;

const Projects = styled.div`
  ${tw`
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

const Blog = styled.div`
  ${tw`
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

export interface ISidebarNavProps {
  Projects: string;
  Blog: string;
}

const SidebarNavCoding: React.FC<ISidebarNavProps> = () => {

  return (
    <>
      <SidebarNavContainer>
        <SidebarNavStyle>
          <SidebarNavText>
            <>
              <Projects>
                Projects
              </Projects>
              <Blog>
                Blog
              </Blog>
            </>
          </SidebarNavText>
        </SidebarNavStyle>
      </SidebarNavContainer>
    </>
  );
};

export default SidebarNavCoding;
