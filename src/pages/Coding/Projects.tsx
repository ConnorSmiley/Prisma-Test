import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import { supabase } from "@/utils/supabase";

const ProjectsContainer = styled.div`
  ${tw`
    w-screen
    h-full
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`;

const ProjectsStyle = styled.div`
  ${tw`
    w-full
    h-full
    pt-20
    flex
    justify-center
    
    sm:h-full
    sm:pt-20
    `}
`;

const ProjectDisplay = styled.div`
  ${tw`
    grid
    grid-cols-1
    gap-4
    h-full
    w-[80%]
    pb-10
    flex
    items-center
    flex-col
    grid-cols-1
    
    
    sm:items-center
    sm:h-full
    sm:w-[70%]
    sm:pt-0
    sm:gap-4
    sm:flex-col
    sm:grid-cols-1
    sm:pb-8
    
    md:flex
    md:flex-row
    md:justify-between
    md:grid
    md:grid-cols-3
    md:w-[90%]
    
    lg:w-[80%]
    lg:flex
    
    xl:w-[70%]
    
    `}
`;

const Card = styled.img`
  ${tw`
    rounded-xl
    h-[20rem]
    w-[20rem]
    border
    border-white
    object-cover
    
    sm:h-[30rem]
    sm:w-[30rem]
    md:w-60
    md:h-[30rem]
    lg:w-64
    lg:h-[30rem]
    xl:w-72
    xl:h-[30rem]
    `}
`;

export interface IProjectsProps {
  codePics: any;
}

const Projects: React.FC<IProjectsProps> = ({ codePics }) => {

  return (
    <>
      <ProjectsContainer>
        <ProjectsStyle>
          <ProjectDisplay>


            <Card src={'https://njnfyypwtoiiqclfvxqe.supabase.co/storage/v1/object/public/images/Code%20Thumbnails/Thinkscript.jpeg'}/>
            <Card src={'https://njnfyypwtoiiqclfvxqe.supabase.co/storage/v1/object/public/images/Code%20Thumbnails/Wordle.png'} />
            <Card />

          </ProjectDisplay>
        </ProjectsStyle>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

