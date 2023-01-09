import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/pages/Coding/Projects";

const CodingContainer = styled.div`
    ${tw`
    w-screen
    h-screen
    bg-gradient-to-r from-pink-500 to-purple-900
 
    `}
`

const CodingStyle = styled.div`
    ${tw`
    h-full
    w-full
    flex
    justify-center
    items-center
    
    `}
`

export interface ICodingProps {
   Projects:any
    Blog:any
}


const Coding: React.FC<ICodingProps> = () => {

    return (
    <>
        <CodingContainer>
            <CodingStyle>
                <Navbar />
                <Projects />

            </CodingStyle>
        </CodingContainer>
        <Footer />
    </>
    )
}

export default Coding
