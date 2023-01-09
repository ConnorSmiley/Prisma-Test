import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import Navbar from "@/components/Navbar";

const ProjectsContainer = styled.div`
    ${tw`
    w-screen
    h-auto
    bg-gradient-to-r from-pink-500 to-purple-900
    
    `}
`

const ProjectsStyle = styled.div`
    ${tw`
    w-full
    h-full
    pt-20
    flex
    justify-center
    
    `}
`

const ProjectDisplay = styled.div`
    ${tw`
    grid
    grid-cols-3
    pt-20
    h-[30rem]
    w-[70%]
    flex
    justify-between
    bg-red-500
    
    sm:pt-0
    sm:gap-4
    sm:flex-col
    sm:grid-cols-1
    
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
`

const Card = styled.div`
    ${tw`
    bg-black
    rounded-xl
    aspect-h-1
    
    sm:aspect-w-1
    md:w-full
    lg:w-64
    xl:w-72
    xl:h-72
    `}
`

export interface IProjectsProps {

}

const Projects: React.FC<IProjectsProps> = () => {

    return(
       <>
        <ProjectsContainer>
          <Navbar />
            <ProjectsStyle>
              <ProjectDisplay>

                <Card />
                <Card />
                <Card />

              </ProjectDisplay>
            </ProjectsStyle>
        </ProjectsContainer>
       </>
    )
}

export default Projects
