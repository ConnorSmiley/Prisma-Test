import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNavContainer = styled.div`
  ${tw`
    absolute
    left-0
    h-screen
    w-60
    
    lg:w-60 
    xl:w-80
    
    `}
`;

const SidebarNavStyle = styled.div`
  ${tw`
    relative
    right-0
    h-full
    flex
    flex-col
    items-center  
    justify-center
    place-items-end
    
    hidden lg:flex

    `}
`;

const SidebarNavText = styled.div`
  ${tw`
    text-white
    text-4xl
    font-thin
    space-y-2
    flex
    flex-col
    justify-center
    place-items-end
    h-80
    border-r-4
    // border-[#08e8de]
    border-purple-900
    pr-10
 
    `}
`;

const Projects = styled.div`
  ${tw`
  px-8
  -mr-10
  py-4
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

const Blog = styled.div`
  ${tw`
  px-8
  -mr-10
  py-4
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

const ProjectsSelected = styled.div`
  ${tw`
  px-8
  -mr-10
  py-4
  bg-blue-500
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

const BlogSelected = styled.div`
  ${tw`
  px-8
  -mr-10
  py-4
  
  hover:cursor-pointer
  hover:bg-yellow-500
    `}
`;

export interface ISidebarNavProps {
  Projects: any;
  Blog: any;
  slug:any
}

const SidebarNavCoding: React.FC<ISidebarNavProps> = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <SidebarNavContainer>
        <SidebarNavStyle>
          <SidebarNavText>

              <>
                <Link href="/Coding/[...slug]" as={`/${currentRoute}`}>
                  <Projects>
                    Projects
                  </Projects>
                </Link>
                <Link href="/Coding/Blog">
                  <Blog>
                    Blog
                  </Blog>
                </Link>
              </>


          </SidebarNavText>
        </SidebarNavStyle>
      </SidebarNavContainer>
    </>
  );
};

export default SidebarNavCoding;
