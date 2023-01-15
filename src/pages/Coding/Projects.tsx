import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const ProjectsContainer = styled.div`

  ${tw`
    w-screen
    h-full
    bg-black
    z-10
    
    `}
`;

const ProjectsStyle = styled.div`
  ${tw`
    w-full
    h-full
    pt-20
    flex
    justify-center
    z-10
    
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
    z-10
    
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
  :hover {
    opacity: 100%
  }

  ${tw`
    rounded-xl
    h-[20rem]
    w-[20rem]
    border
    border-white
    object-cover
    opacity-100
    
    hover:cursor-pointer
    
    sm:opacity-70
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

  const url2 = () => {

  };

  return (
    <>
      <ProjectsContainer>
        <ProjectsStyle>
          <ProjectDisplay>


            <Link href={"https://dumbscript.com/"}>
              <Card
                src={"https://njnfyypwtoiiqclfvxqe.supabase.co/storage/v1/object/public/images/Code%20Thumbnails/Thinkscript.jpeg"} />
            </Link>
            <Link href={"https://willowy-puppy-ece4b9.netlify.app/"}>
              <Card
                src={"https://njnfyypwtoiiqclfvxqe.supabase.co/storage/v1/object/public/images/Code%20Thumbnails/Wordle.png"} />
            </Link>
            <Card />

          </ProjectDisplay>
        </ProjectsStyle>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

